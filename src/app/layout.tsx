import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"
import Clarity from '@microsoft/clarity';
import { format } from 'date-fns';
import './globals.css'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

const currentDate = new Date();
currentDate.setHours(12, 0, 0, 0);
const formattedDate = format(currentDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

const clarityProjectId = "r9c9leskum"
Clarity.init(clarityProjectId);

export const metadata: Metadata = {
  title: 'Portfolio | ARS (Apoorv Sharma), Software Developer',
  description: 'I&apos;m a detail-oriented developer with expertise in web and mobile apps, data science, and machine learning, focused on building creative and innovative products.',
  keywords: ["Portfolio", "ARS", "ARS Space", "ARS Portfolio", "Apoorv", "Sharma", "Apoorv Sharma", "Apoorv Sharma Space", "ARS Portfolio", "Dev", "Apps", "Developer", "Software Developer", "Full Stack Developer", "Web Applications", "Mobile Applications", "Data Science", "Machine Learning", "Innovative Products"],
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
    title: 'Portfolio | ARS (Apoorv Sharma), Software Developer',
    description: 'I&apos;m a detail-oriented developer with expertise in web and mobile apps, data science, and machine learning, focused on building creative and innovative products.',
    url: 'https://www.apoorvsharma.space',
    siteName: 'ARS',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/ss/portfolio-preview.jpeg',
        width: 1200,
        height: 630,
        alt: 'ARS Portfolio',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | ARS (Apoorv Sharma), Software Developer',
    description: 'I&apos;m a detail-oriented developer with expertise in web and mobile apps, data science, and machine learning, focused on building creative and innovative products.',
    images: ['/images/ss/portfolio-preview.jpeg'],
    creator: '@ars2107_',
    site: '@ars2107_',
  },
  metadataBase: new URL('https://www.apoorvsharma.space'),
  authors: [{ name: 'ARS', url: 'https://www.apoorvsharma.space' }],
  other: {
    'article:published_time': '2024-02-09T12:00:00.000Z',
    'article:modified_time': formattedDate,
    'article:author': 'https://www.apoorvsharma.space/',
    charset: 'utf-8',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Portfolio | ARS (Apoorv Sharma), Software Developer',
    startupImage: [
      {
        url: '/images/ss/portfolio-preview.jpeg',
        media: '(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)',
      },
    ],
  },
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/images/favicon/favicon.ico",
        type: "image/x-icon"
      },
      {
        rel: "icon",
        url: "/images/favicon/favicon.svg",
        type: "image/svg+xml"
      },
      {
        rel: "icon",
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        rel: "icon",
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        rel: "icon",
        url: "/images/favicon/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        rel: "icon",
        url: "/images/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        rel: "icon",
        url: "/images/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        rel: "icon",
        url: "/images/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    shortcut: [
      {
        rel: "shortcut icon",
        url: "/images/favicon/favicon.ico",
        type: "image/x-icon"
      }
    ],
    apple: [
      {
        rel: "apple-icon",
        url: "/images/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      },
      {
        rel: "apple-icon",
        url: "/images/favicon/apple-touch-icon-57x57.png",
        sizes: "57x57",
        type: "image/png"
      },
      {
        rel: "apple-icon",
        url: "/images/favicon/apple-touch-icon-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        rel: "apple-icon",
        url: "/images/favicon/apple-touch-icon-76x76.png",
        sizes: "76x76",
        type: "image/png"
      },
      {
        rel: "apple-icon",
        url: "/images/favicon/apple-touch-icon-114x114.png",
        sizes: "114x114",
        type: "image/png"
      },
      {
        rel: "apple-icon",
        url: "/images/favicon/apple-touch-icon-120x120.png",
        sizes: "120x120",
        type: "image/png"
      },
      {
        rel: "apple-icon",
        url: "/images/favicon/apple-touch-icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        rel: "apple-icon",
        url: "/images/favicon/apple-touch-icon-152x152.png",
        sizes: "152x152",
        type: "image/png"
      },
      {
        rel: "apple-icon",
        url: "/images/favicon/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  },
  manifest: "/images/favicon/site.webmanifest",
  alternates: {
    canonical: "https://www.apoorvsharma.space"
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
        <link rel="icon" href="./images/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="./images/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="./images/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="./images/favicon/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="./images/favicon/favicon-96x96.png" sizes="96x96" type="image/png" />
        <link rel="icon" href="./images/favicon/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="./images/favicon/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon.png" type='image/png'/>
        <link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon-57x57.png" sizes="57x57" type="image/png" />
        <link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon-72x72.png" sizes="72x72" type="image/png" />
        <link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon-76x76.png" sizes="76x76" type="image/png" />
        <link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon-114x114.png" sizes="114x114" type="image/png" />
        <link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon-120x120.png" sizes="120x120" type="image/png" />
        <link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon-144x144.png" sizes="144x144" type="image/png" />
        <link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon-152x152.png" sizes="152x152" type="image/png" />
        <link rel="apple-touch-icon" href="./images/favicon/apple-touch-icon-180x180.png" sizes="180x180" type="image/png" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9493613665596791" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-MFTM9B1DE8" />
      <GoogleTagManager gtmId="GTM-T29D38NR" />
      <Analytics />
      <Script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "d8e1c6936bd4487bb49ab049cb88cd4f"}' />
      <Script id="clarity-script" type='text/javascript' dangerouslySetInnerHTML={{
        __html: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "r9c9leskum");`
      }} />
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Website",
          "name": "ars",
          "url": "https://www.apoorvsharma.space",
          "description": "I&apos;m a detail-oriented developer with expertise in web and mobile apps, data science, and machine learning, focused on building creative and innovative products.",
          "image": "https://www.apoorvsharma.space/images/hero.png",
          "author": [
            {
              "@type": "Person",
              "name": "Apoorv Sharma"
            },
          ],
          "publisher": {
            "@type": "Person",
            "name": "Apoorv Sharma"
          },
          "screenshot": "https://www.apoorvsharma.space/images/ss/portfolio-preview.jpeg"
        })
      }} />
    </html>
  )
}
