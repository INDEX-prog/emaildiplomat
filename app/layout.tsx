import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Manrope } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'EmailDiplomat - Transform Conflict into Collaboration',
  description: 'Transform your passive-aggressive emails into diplomatic messages. AI-powered email transformation for better workplace communication.',
  keywords: ['email', 'communication', 'AI', 'workplace', 'HR', 'team communication'],
  openGraph: {
    title: 'EmailDiplomat - Transform Conflict into Collaboration',
    description: 'Transform your passive-aggressive emails into diplomatic messages.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${plusJakartaSans.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  )
}
