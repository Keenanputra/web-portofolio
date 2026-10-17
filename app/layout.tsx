import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Keenan: Portfolio & Technical Documentation',
    template: '%s',
  },
  description:
    'Portfolio personal dan catatan dokumentasi praktek SMK TKJ & Web Development Keenan.',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Keenan: Portfolio & Technical Documentation',
    description:
      'Portfolio personal dan catatan dokumentasi praktek SMK TKJ & Web Development Keenan.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-100 antialiased min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow pt-20 px-4 sm:px-6 max-w-4xl w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
