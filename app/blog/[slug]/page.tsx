import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { mdxComponents } from '@/components/mdx-components';
import { formatDate } from '@/lib/formatDate';

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: 'Catatan tidak ditemukan' };
  }
  return {
    title: `${post.title}: Keenan`,
    description: post.description,
  };
}

export default function PostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-2xl px-4 sm:px-6 py-12">
      <header className="mb-10">
        <Link
          href="/blog"
          className="text-sm text-zinc-400 hover:text-zinc-300 transition-colors"
        >
          Kembali ke catatan
        </Link>
        <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 leading-snug">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
          <time className="font-mono text-xs text-zinc-400">{formatDate(post.date)}</time>
          {post.tags.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="text-xs font-mono text-zinc-400 border border-zinc-800 rounded px-2 py-0.5"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <div className="max-w-2xl">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
