'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/lib/site';

const navLinks = [
  { name: 'Perkenalan', href: '/#perkenalan' },
  { name: 'Catatan', href: '/#catatan' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Kontak', href: '/#kontak' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-zinc-50 font-semibold tracking-tight"
        >
          <span className="grid place-items-center w-7 h-7 rounded-md border border-zinc-700 bg-zinc-900 text-xs font-bold">
            K
          </span>
          <span>{siteConfig.name}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="/#kontak"
            className="px-4 py-2 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            Hubungi
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-3 -mr-3 text-zinc-300 hover:text-zinc-50 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          aria-label="Buka menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-zinc-800/60 bg-zinc-950 px-4 py-4 space-y-1"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-zinc-300 hover:text-zinc-50 py-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#kontak"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-3 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            Hubungi
          </Link>
        </div>
      )}
    </header>
  );
}
