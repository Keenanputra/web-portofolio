import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p>
          {siteConfig.name}, pelajar SMK TKJ dan web developer enthusiast
        </p>
        <div className="flex items-center gap-5">
          <Link href="/blog" className="hover:text-zinc-300 transition-colors">
            Catatan
          </Link>
          <Link
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
