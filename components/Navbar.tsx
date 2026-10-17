'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Dokumentasi', href: '#blog' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 font-mono font-semibold text-zinc-100 hover:text-zinc-300 transition-colors"
        >
          <Terminal className="w-5 h-5 text-zinc-400" />
          <span>keenan.dev</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="/blog"
            className="text-sm font-medium px-3 py-1.5 rounded-md bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white transition-colors"
          >
            Blog
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-3 -mr-3 text-zinc-400 hover:text-zinc-100 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          aria-label="Buka menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div id="mobile-menu" className="sm:hidden border-b border-zinc-800 bg-zinc-950 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-zinc-400 hover:text-zinc-100 py-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="/blog"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center text-sm font-medium px-3 py-3 rounded-md bg-zinc-800 text-zinc-200 hover:bg-zinc-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            Blog & Catatan
          </Link>
        </div>
      )}
    </header>
  );
}
