import Link from 'next/link';
import CodeDatabase from '@/components/CodeDatabase';
import type { Post } from '@/lib/mdx';

type NotesSectionProps = {
  posts: Post[];
};

export default function NotesSection({ posts }: NotesSectionProps) {
  return (
    <section id="catatan" className="relative px-4 sm:px-6 pt-24 sm:pt-32 text-center scroll-mt-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400">
        Catatan &amp; Dokumentasi
      </p>

      <h2 className="mx-auto mt-6 max-w-3xl text-3xl sm:text-5xl font-medium leading-[1.12] tracking-tight text-zinc-50">
        Catatan Praktek dan <span className="font-display">Eksperimen Kode</span>
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-400">
        Konfigurasi jaringan, catatan troubleshoot, dan eksperimen web yang saya
        kerjakan, ditulis rapi supaya bisa dipelajari ulang dan dibagikan.
      </p>

      <div className="mx-auto mt-9 flex max-w-md flex-col sm:max-w-none sm:flex-row items-stretch sm:items-center justify-center gap-3">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors"
        >
          Semua Catatan
        </Link>
        <a
          href="#skills"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-900 transition-colors"
        >
          Lihat Skills
        </a>
      </div>

      <CodeDatabase posts={posts} />
    </section>
  );
}
