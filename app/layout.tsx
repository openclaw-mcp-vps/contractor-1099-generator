import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '1099 Generator — Automate Contractor Tax Forms',
  description: 'Generate 1099-NEC forms for freelancer payments. Handle state requirements and e-file with ease. Built for small businesses.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0f0b603f-d7be-4645-ad3f-72bb8b2f574d"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
