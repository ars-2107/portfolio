import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import { format } from 'date-fns';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const currentDate = new Date();
currentDate.setHours(12, 0, 0, 0);
const formattedDate = format(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

export const metadata: Metadata = {
  title: 'Portfolio | ARS',
  description: 'I&apos;m a detail-oriented Full Stack Developer with a creative approach and a strong problem-solving ability. My expertise spans a wide range of technologies, allowing me to build innovative solutions across web applications, mobile applications, and the fields of data science and machine learning. I enjoy tackling challenges head-on and turning ideas into practical, user-friendly solutions. Committed to continuous learning and collaboration, I bring a results-oriented approach to every project.',
  keywords: ["Portfolio", "ARS", "Apoorv", "Sharma", "Apoorv Sharma", "Apoorv Sharma Space", "Full Stack Developer", "Web Applications", "Mobile Applications", "Data Science", "Machine Learning", "Innovative Products"],
  viewport: 'width=device-width, initial-scale=1',
  applicationName: 'ARS Portfolio',
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  openGraph: {
    title: 'Portfolio | ARS',
    description: 'I&apos;m a detail-oriented Full Stack Developer with a creative approach and a strong problem-solving ability. My expertise spans a wide range of technologies, allowing me to build innovative solutions across web applications, mobile applications, and the fields of data science and machine learning. I enjoy tackling challenges head-on and turning ideas into practical, user-friendly solutions. Committed to continuous learning and collaboration, I bring a results-oriented approach to every project.',
    url: 'https://apoorvsharma.space',
    siteName: 'ARS',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/ss/portfolio-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'ARS Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | ARS',
    description: 'I&apos;m a detail-oriented Full Stack Developer with a creative approach and a strong problem-solving ability. My expertise spans a wide range of technologies, allowing me to build innovative solutions across web applications, mobile applications, and the fields of data science and machine learning. I enjoy tackling challenges head-on and turning ideas into practical, user-friendly solutions. Committed to continuous learning and collaboration, I bring a results-oriented approach to every project.',
    images: ['/images/ss/portfolio-preview.jpg'],
    creator: '@ars2107_',
    site: '@ars2107_',
  },
  metadataBase: new URL('https://apoorvsharma.space'),
  authors: [{ name: 'ARS', url: 'https://apoorvsharma.space' }],
  other: {
    'article:published_time': '2024-02-09T12:00:00.000Z',
    'article:modified_time': formattedDate,
    'article:author': 'https://apoorvsharma.space/',
    charset: 'utf-8',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ARS Portfolio',
    startupImage: [
      {
        url: '/images/ss/portfolio-preview.jpg',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/images/favicon/favicon.ico",
        type: "image/x-icon"
      },
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/images/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        url: "/images/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    shortcut: [
      {
        url: "/images/favicon/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        url: "/images/favicon/apple-touch-icon-57x57.png",
        sizes: "57x57",
        type: "image/png"
      },
      {
        url: "/images/favicon/apple-touch-icon-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        url: "/images/favicon/apple-touch-icon-76x76.png",
        sizes: "76x76",
        type: "image/png"
      },
      {
        url: "/images/favicon/apple-touch-icon-114x114.png",
        sizes: "114x114",
        type: "image/png"
      },
      {
        url: "/images/favicon/apple-touch-icon-120x120.png",
        sizes: "120x120",
        type: "image/png"
      },
      {
        url: "/images/favicon/apple-touch-icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        url: "/images/favicon/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png"
      },
      {
        url: "/images/favicon/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-MFTM9B1DE8" />
    </html>
  )
}
