import { Github, Instagram, Mail } from 'lucide-react';
import { siteConfig } from '@/lib/site';

const contacts = [
  { label: 'GitHub', href: siteConfig.github, icon: Github },
  { label: 'Instagram', href: siteConfig.instagram, icon: Instagram },
  { label: 'Email', href: siteConfig.email, icon: Mail },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-zinc-900 scroll-mt-20">
      <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-6">
        Kontak
      </h2>
      <p className="text-zinc-400 leading-relaxed max-w-2xl mb-8">
        Terbuka untuk diskusi, masukan, atau tawaran belajar bersama.
        Silakan hubungi saya lewat salah satu kanal di bawah.
      </p>
      <ul className="flex flex-col sm:flex-row gap-3">
        {contacts.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
