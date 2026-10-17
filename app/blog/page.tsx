import Link from 'next/link';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/lib/mdx';

export const metadata = {
  title: 'Catatan Praktek: Keenan',
  description: 'Dokumentasi praktek jaringan, eksperimen kode, dan catatan belajar.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <header className="mb-10">
        <Link
          href="/"
          className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
        >
          Kembali ke beranda
        </Link>
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100">
          Catatan Praktek
        </h1>
        <p className="mt-3 text-zinc-400 max-w-2xl leading-relaxed">
          Dokumentasi proses belajar: konfigurasi jaringan, problem solving,
          dan eksperimen kode.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-zinc-400 text-sm">
          Belum ada catatan. Dokumentasi praktek akan muncul di sini.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
