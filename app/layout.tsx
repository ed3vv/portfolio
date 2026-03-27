import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'

const ConstellationBg = dynamic(
  () => import('@/components/ui/constellation-bg').then((mod) => mod.ConstellationBg),
  { ssr: false }
)

const inter = Inter({ subsets: ['latin'], weight: ['200','300'] })

export const metadata: Metadata = {
  title: "Eden Liang",
  description: 'Builder and student based in Vancouver',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: "Eden Liang",
    description: 'Builder and student based in Vancouver',
    images: ['/puzzle.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eden Liang",
    description: 'Builder and student based in Vancouver',
    images: ['/puzzle.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ConstellationBg />
          <div className="relative z-10 pointer-events-auto">
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
