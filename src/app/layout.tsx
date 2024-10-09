import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ARS - Portfolio',
  description: 'I&apos;m a detail-oriented Full Stack Developer with a creative approach and a strong problem-solving ability. My expertise spans a wide range of technologies, allowing me to build innovative solutions across web applications, mobile applications, and the fields of data science and machine learning. I enjoy tackling challenges head-on and turning ideas into practical, user-friendly solutions. Committed to continuous learning and collaboration, I bring a results-oriented approach to every project.',
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
    </html>
  )
}
