'use client';

import Link from 'next/link';
import ExpandableItem from '@/components/expandable-item';
import { Footer } from '@/components/footer';
import { useNavigationBounce } from '@/lib/useNavigationBounce';

const projectData = [
  {
    icon: '/smashspeed.png',
    title: 'Smashspeed AI',
    subtitle: 'Viral iOS & Android app to calculate badminton smash speed.',
    link: '/projects/smashspeed-engine',
    githubLink: 'https://github.com/ed3vv',
    date: 'July 2025 – Present',
    description: 'Co-developed a real-time computer vision pipeline for iOS using YOLOv5, CoreML, and Kalman filtering to calculate badminton shuttle speeds with high precision on-device. Achieved 93% model accuracy by labeling 13,000+ images and training on 15,000+ images using NVIDIA A100 GPUs on Google Cloud. Built the fully functional React Native mobile app with 45,000+ downloads across iOS and Android, a viral social media campaign reaching 5M+ views, and a peak ranking of #1 in App Store Sports.',
    tags: ['Founder', 'React Native', 'CoreML', 'YOLOv5', 'Kalman Filters', 'Python', 'PyTorch', 'iOS', 'Android', 'Machine Learning'],
  },
  {
    icon: '/furiousfrogs.svg',
    title: 'Furious Frogs — FTC Autonomous System',
    subtitle: 'World-class robot built for FIRST Tech Challenge (FTC 26025)',
    date: 'June 2024 – Present',
    description: 'Developed an autonomous system for the Furious Frogs FTC team (26025) balancing hardware, software, and computer vision. The system reached 2nd in the world out of 100,000+ teams at the World Championships, with the team ranked #1 in Canada for overall stats.',
    tags: ['Java', 'Computer Vision', 'Robotics', 'FTC', 'Autonomous Systems'],
  },
  {
    icon: null,
    title: 'Dushu',
    subtitle: 'Web app to analyze Mandarin texts for complexity and readability',
    date: '2025',
    description: 'Built a web app to analyze Mandarin texts and determine complexity, lexile equivalent level, and readability. Used various language databases, APIs, Jieba, Fly.io, and scrapers to create a library of personalized texts based on the user\'s Mandarin level.',
    tags: ['Python', 'Jieba', 'Fly.io', 'NLP', 'Web Scraping', 'Next.js'],
  },
  {
    icon: '/slate.png',
    title: 'Slate',
    subtitle: 'Minimalist personal planning and productivity app for students',
    date: '2025',
    description: 'Designed and built Slate, a minimalist productivity app tailored for students. Features include calendar integration, a focus session tracker, priority listing, and to-do lists. Built with a clean, distraction-free UI using Next.js, TypeScript, TailwindCSS, and React.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'React', 'Product Design'],
  },
  {
    icon: '/dmoj.png',
    title: 'Competitive Programming',
    subtitle: 'Top 5,000 globally on DMOJ out of 200,000+ developers',
    date: '2022 – Present',
    description: '2+ years of competitive programming experience on DMOJ (Don Mills Online Judge), a modern online judge for algorithmic problems. Ranked in the top 5,000 globally out of over 200,000 developers. Focused on data structures, graph algorithms, dynamic programming, and combinatorics.',
    tags: ['Python', 'Java', 'Algorithms', 'Data Structures', 'Dynamic Programming', 'Graph Theory'],
  },
  {
    icon: null,
    title: 'Tele-Clash',
    subtitle: 'Hack Camp Finalist — Gesture-based game controller using webcam',
    date: '2024',
    description: 'Built a full-fledged gesture-based game controller allowing users to control games (e.g., Clash Royale) using their webcam and hand gestures. Combined MediaPipe, a KNN classifier, and PyAutoGUI/OpenCV to map hand-landmark data to reliable in-game controls. Selected as a finalist at Hack Camp.',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'PyAutoGUI', 'KNN', 'Computer Vision', 'Hackathon'],
  },
];

export default function Projects() {
  const { shouldBounce } = useNavigationBounce('projects');

  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-16 sm:pt-24" />

        {/* Header */}
        <div className="text-sm sm:text-[0.95rem] leading-relaxed space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="underline underline-offset-[3px] font-extralight">◆ Projects</h1>
            <div className="flex items-center gap-2 font-extralight">
              <Link href="/" className="hover-underline-nudge">Home</Link>
              <span className="text-neutral-400 dark:text-neutral-600">|</span>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`hover-underline-nudge ${shouldBounce('resume') ? 'nav-bounce-delayed' : ''}`}>Resume</a>
            </div>
          </div>
        </div>

        <div className="my-4 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Project Items */}
        <div>
          {projectData.map((item, index) => (
            <ExpandableItem
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
              githubLink={item.githubLink}
              date={item.date}
              description={item.description}
              tags={item.tags}
            />
          ))}
        </div>

        <Footer />
      </div>
    </main>
  );
}
