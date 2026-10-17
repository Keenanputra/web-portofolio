import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-serif',
  display: 'swap',
});

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
    <html lang="id" className={`${inter.variable} ${instrumentSerif.variable} scroll-smooth`}>
      <body className="relative bg-zinc-950 text-zinc-100 antialiased min-h-screen flex flex-col">
        {/* Bidang grid teknis di belakang seluruh halaman. */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 bg-grid mask-fade"
        />
        <Navbar />
        <main className="relative flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
