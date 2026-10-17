import { Github, Instagram, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site';

const contacts = [
  { label: 'GitHub', href: siteConfig.github, icon: Github },
  { label: 'Instagram', href: siteConfig.instagram, icon: Instagram },
  { label: 'Email', href: siteConfig.email, icon: Mail },
];

export default function Contact() {
  return (
    <section id="kontak" className="relative px-4 sm:px-6 py-24 sm:py-32 text-center scroll-mt-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400">
        Kontak
      </p>

      <h2 className="mx-auto mt-6 max-w-3xl text-3xl sm:text-5xl font-medium leading-[1.12] tracking-tight text-zinc-50">
        Terbuka untuk <span className="font-display">Belajar Bersama</span>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-400">
        Terbuka untuk diskusi, masukan, atau tawaran belajar bersama. Silakan
        hubungi saya lewat salah satu kanal di bawah.
      </p>

      <ul className="mx-auto mt-9 flex max-w-md flex-col sm:max-w-none sm:flex-row items-stretch sm:items-center justify-center gap-3">
        {contacts.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-900 transition-colors"
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
