import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NSN Events Hub | Sự kiện & Tài liệu chuyên ngành',
  description: 'Khám phá các sự kiện, webinar và tài liệu chuyên ngành từ NSN dành cho cộng đồng xây dựng, MEP và HVACR Việt Nam.',
  generator: 'NSN Events Hub',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head>
        {/* Mã tracking BowNow: nằm trong HTML gốc để hệ thống nhận diện được */}
        <script
          src="https://contents.bownow.jp/js/UTC_0bfb421534fb83195d08/trace.js"
          charSet="UTF-8"
          async
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}