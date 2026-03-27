'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function ConstellationBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = -9999;
    let mouseY = -9999;
    let animId: number;

    canvas.width = width;
    canvas.height = height;

    const PARTICLE_COUNT = Math.min(85, Math.floor((width * height) / 11000));
    const MAX_DIST = 130;
    const CURSOR_RADIUS = 160;

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 1.2 + 0.8,
    }));

    function isDark() {
      return document.documentElement.classList.contains('dark');
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const dark = isDark();
      const color = dark ? '255, 255, 255' : '0, 0, 0';

      // Move particles — no mouse influence
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }

      // Draw lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.3;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Cursor field: draw lines from cursor to nearby particles,
      // and boost connections between particles that are both near the cursor
      const hasMouse = mouseX > -100;
      if (hasMouse) {
        for (let i = 0; i < particles.length; i++) {
          const dxi = particles[i].x - mouseX;
          const dyi = particles[i].y - mouseY;
          const di = Math.sqrt(dxi * dxi + dyi * dyi);

          if (di < CURSOR_RADIUS) {
            // Line from cursor to this particle
            const alpha = (1 - di / CURSOR_RADIUS) * 0.45;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.stroke();

            // Boost connections between particles both inside cursor field
            for (let j = i + 1; j < particles.length; j++) {
              const dxj = particles[j].x - mouseX;
              const dyj = particles[j].y - mouseY;
              const dj = Math.sqrt(dxj * dxj + dyj * dyj);

              if (dj < CURSOR_RADIUS) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxBoostedDist = MAX_DIST * 1.6;
                if (dist < maxBoostedDist) {
                  const boost = Math.min(1 - di / CURSOR_RADIUS, 1 - dj / CURSOR_RADIUS);
                  const alpha = (1 - dist / maxBoostedDist) * boost * 0.55;
                  ctx.beginPath();
                  ctx.strokeStyle = `rgba(${color}, ${alpha})`;
                  ctx.lineWidth = 0.8;
                  ctx.moveTo(particles[i].x, particles[i].y);
                  ctx.lineTo(particles[j].x, particles[j].y);
                  ctx.stroke();
                }
              }
            }
          }
        }

        // Dot at cursor
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, 0.25)`;
        ctx.arc(mouseX, mouseY, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, 0.5)`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseLeave = () => { mouseX = -9999; mouseY = -9999; };
    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
