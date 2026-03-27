'use client';

import Image from "next/image";
import Link from "next/link";
import { useNavigationBounce } from "../lib/useNavigationBounce";
import { Footer } from "@/components/footer";

function Logo({ src, alt, size = 26, className = "" }: { src: string; alt: string; size?: number; className?: string }) {
  return (
    <span className="inline-flex items-center align-middle relative -top-[1px]">
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        sizes={`${size}px`}
        quality={100}
        priority={false}
        className={`h-[18px] w-[18px] sm:h-[20px] sm:w-[20px] object-contain align-middle ${className}`}
      />
    </span>
  );
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="relative -top-[1px] leading-none align-middle">{children}</span>
);

export default function Home() {
  const { shouldBounce } = useNavigationBounce('home');

  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-6 sm:px-0">
        <div className="pt-16 sm:pt-24" />

        {/* Header */}
        <div className="text-sm sm:text-base leading-tight space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="underline underline-offset-[3px] font-extralight">◆ Eden Liang</h1>
            <div className="flex items-center gap-2 font-extralight">
              <Link href="/projects" className={`hover-underline-nudge ${shouldBounce('projects') ? 'nav-bounce-delayed' : ''}`}>Projects</Link>
              <span className="text-neutral-400 dark:text-neutral-600">|</span>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`hover-underline-nudge ${shouldBounce('resume') ? 'nav-bounce-delayed-more' : ''}`}>Resume</a>
            </div>
          </div>

          {/* Introduction Section */}
          <div className="py-1">
            hi! im eden, a 16 year old from vancouver who loves math, learning and building stuff. im interested in building things that are useful to others. outside of school and coding i like playing badminton and the piano. hope you find what you're looking for here!
          </div>

          <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

          <div>◆ Currently:</div>
          <div>↳ Cofounder, COO — <span className="inline-flex items-center align-middle gap-1"><Logo src="/smashspeed.png" alt="Smashspeed" /><Label><a href="/projects/smashspeed-engine" className="hover-underline-nudge">Smashspeed AI</a></Label></span></div>
          <div className="ml-4">↳ Real-time CV pipeline for badminton bird speed detection</div>
          <div className="ml-4">↳ Fully functionable react native mobile app + yolov5 with 93% accuracy</div>
          <div>↳ Developer — <span className="inline-flex items-center align-middle gap-1"><Logo src="/furiousfrogs.svg" alt="Furious Frogs" /><Label>Furious Frogs (FTC 26025)</Label></span></div>
          <div className="ml-4">↳ Autonomous robot system — <span className="font-bold slight-italic">2nd in world out of 100,000+ teams, #1 in Canada</span></div>
          <div>↳ Cofounder, CFO — <span className="inline-flex items-center align-middle gap-1"><Logo src="/stemsphere.png" alt="Stemsphere" /><Label><a href="https://stemsf.org" target="_blank" rel="noreferrer" className="hover-underline-nudge">Stemsphere</a></Label></span></div>
          <div className="ml-4">↳ Non-profit promoting CS education, reaching 600+ students</div>
        </div>

        <div className="my-3 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Highlights */}
        <div className="text-sm sm:text-base leading-tight space-y-3">
          <div>◆ Highlights:</div>
          <div>↳ <span className="inline-flex items-center align-middle gap-1"><Logo src="/smashspeed.png" alt="Smashspeed" /><Label><a href="/projects/smashspeed-engine" className="hover-underline-nudge">Smashspeed</a></Label></span> — badminton speed tracker, <span className="font-bold slight-italic">45K+ users, 5M+ views</span></div>
          <div className="ml-4">↳ <span className="font-bold slight-italic">15K hand-annotated images → YOLOv5 93% accuracy, built on CoreML</span></div>
          <div className="ml-4">↳ <span className="font-bold slight-italic">Fully functionable react native mobile app</span></div>
          <div>↳ Competitive programming on DMOJ — <span className="font-bold slight-italic">top 5,000 globally out of 200,000</span></div>
          <div>↳ Hackathons — 2x winner</div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
