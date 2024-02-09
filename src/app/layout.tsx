import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ARS - Profile',
  description: 'I am a passionate Full Stack Developer and Machine Learning Engineer, bringing a unique blend of technical expertise and creativity to the table. Proficient in Python, Java, R, and JavaScript, I specialise in software development, data analysis, model training, and deploying innovative solutions for real-world challenges. Bridging the gap between front-end and back-end development, I leverage machine learning techniques to enhance software functionality. Committed to continuous learning and collaboration, I bring a results-oriented approach to every project.',
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
