import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'AI Solutions Pro - Build Smarter, Work Faster',
    template: '%s | AI Solutions Pro'
  },
  description: 'We develop intelligent IT solutions powered by Generative AI to automate your operations, reduce costs, and scale effortlessly.',
  keywords: ['AI solutions', 'automation', 'generative AI', 'business tools', 'IT consulting', 'workflow automation'],
  authors: [{ name: 'Viraj Mane' }],
  creator: 'AI Solutions Pro',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aisolutionshub.com',
    title: 'AI Solutions Pro - Build Smarter, Work Faster',
    description: 'We develop intelligent IT solutions powered by Generative AI to automate your operations, reduce costs, and scale effortlessly.',
    siteName: 'AI Solutions Pro',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Solutions Pro - Generative AI for Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Solutions Pro - Build Smarter, Work Faster',
    description: 'We develop intelligent IT solutions powered by Generative AI to automate your operations, reduce costs, and scale effortlessly.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '3cITVPefT6brenajjZSzmliHWWBZPJK3zELuh3nf2f4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://aisolutionshub.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI Solutions Pro",
              "description": "We develop intelligent IT solutions powered by Generative AI to automate your operations, reduce costs, and scale effortlessly.",
              "url": "https://aisolutionshub.com",
              "founder": {
                "@type": "Person",
                "name": "Viraj Mane"
              },
              "sameAs": [
                "https://linkedin.com/in/virajmane"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}