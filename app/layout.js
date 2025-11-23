import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://agentic-5ddc3e4b.vercel.app'),
  title: {
    default: 'Iceem.tn ? Engineering & Energy Management',
    template: '%s | Iceem.tn',
  },
  description:
    'Iceem.tn delivers modern engineering, energy efficiency, and industrial services with measurable impact.',
  openGraph: {
    title: 'Iceem.tn ? Engineering & Energy Management',
    description:
      'Modern engineering services, energy efficiency audits, industrial automation, and turnkey solutions.',
    url: 'https://agentic-5ddc3e4b.vercel.app',
    siteName: 'Iceem.tn',
    images: [
      {
        url: '/og-cover.png',
        width: 1200,
        height: 630,
        alt: 'Iceem ? Engineering & Energy Management',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iceem.tn ? Engineering & Energy Management',
    description:
      'Modern engineering services, energy efficiency audits, industrial automation, and turnkey solutions.',
    images: ['/og-cover.png'],
  },
  alternates: {
    canonical: 'https://agentic-5ddc3e4b.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full antialiased`}>{children}</body>
    </html>
  );
}
