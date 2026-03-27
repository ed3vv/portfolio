'use client';

import Link from 'next/link';
import ExpandableItem from '@/components/expandable-item';
import { Footer } from '@/components/footer';
import { useNavigationBounce } from '@/lib/useNavigationBounce';

const workData: { icon: string; title: string; subtitle: string; link?: string; githubLink?: string; date: string; description: string; tags: string[] }[] = [
  {
    icon: '/smashspeed.png',
    title: 'Founding Member, COO',
    subtitle: 'Smashspeed AI • 42,000+ Users',
    link: 'https://smashspeed.app',
    date: 'Sept 2025 – Present',
    description:
      'Co-developed a real-time computer vision pipeline for iOS using YOLOv5, CoreML, and Kalman filtering to calculate badminton shuttle speeds with high precision on-device. Achieved 93% model accuracy by labeling 13,000+ images and training on 15,000+ images using NVIDIA A100 GPUs on Google Cloud. Built the fully functional React Native mobile app with more than 45,000 downloads.',
    tags: ['COO', 'React Native', 'CoreML', 'YOLOv5', 'Kalman Filters', 'Machine Learning', 'iOS', 'Android'],
  },
  {
    icon: '/stemsphere.png',
    title: 'Founding Member, CFO',
    subtitle: 'Stemsphere Foundation',
    link: 'https://stemsf.org',
    date: 'August 2025 – Present',
    description:
      'Founding member of a non-profit promoting STEM education for young people. Helped develop a functional web platform and curriculum with React, reaching over 200 students. Manages financial planning and operations as CFO.',
    tags: ['CFO', 'Founder', 'React', 'Non-Profit', 'STEM Education', 'Leadership'],
  },
  {
    icon: '/furiousfrogs.svg',
    title: 'Developer',
    subtitle: 'Furious Frogs (FTC 26025)',
    link: 'https://furiousfrogs.org',
    date: 'June 2024 – Present',
    description:
      'Developed an autonomous system balancing hardware, software, and computer vision for the Furious Frogs FTC team. The team reached 2nd in the world out of 100,000+ teams at the World Championships and ranked #1 in Canada for overall stats.',
    tags: ['Java', 'Computer Vision', 'Robotics', 'FTC', 'Autonomous Systems'],
  },
  {
    icon: '🎓',
    title: 'SHAD Fellow',
    subtitle: 'SHAD Canada Summer Program • Lethbridge, Canada',
    date: 'June 2025 – July 2025',
    description:
      'Selected from a competitive pool of Canadian high school students to participate in a month-long enrichment program focused on STEM, entrepreneurship, and leadership. Led a team of 6 to design a sustainable solution to transportation issues in Canada, winning the Best Presentation Award.',
    tags: ['Leadership', 'Entrepreneurship', 'STEM', 'Teamwork', 'Best Presentation Award'],
  },
];

export default function Work() {
  const { shouldBounce } = useNavigationBounce('work');

  return (
    <main className="relative">
      <div className="relative z-10 mx-auto max-w-screen-sm px-4 sm:px-0">
        <div className="pt-16 sm:pt-24" />

        {/* Header */}
        <div className="text-sm sm:text-[0.95rem] leading-relaxed space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="underline underline-offset-[3px] font-extralight">◆ Work Experience</h1>
            <div className="flex items-center gap-2 font-extralight">
              <Link href="/" className="hover-underline-nudge">Home</Link>
              <span className="text-neutral-400 dark:text-neutral-600">|</span>
              <Link href="/projects" className={`hover-underline-nudge ${shouldBounce('projects') ? 'nav-bounce' : ''}`}>Projects</Link>
              <span className="text-neutral-400 dark:text-neutral-600">|</span>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`hover-underline-nudge ${shouldBounce('resume') ? 'nav-bounce-delayed' : ''}`}>Resume</a>
            </div>
          </div>
        </div>

        <div className="my-4 border-t border-neutral-200 dark:border-neutral-700" />

        {/* Work Items */}
        <div>
          {workData.map((item, index) => (
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
