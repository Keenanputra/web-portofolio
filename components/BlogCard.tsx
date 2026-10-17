import Link from 'next/link';
import type { Post } from '@/lib/mdx';
import { formatDate } from '@/lib/formatDate';

type BlogCardProps = {
  post: Post;
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block p-5 rounded-xl border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900 hover:border-zinc-700 transition-colors"
    >
      <div className="flex items-center justify-between gap-4 mb-2">
        <time className="font-mono text-xs text-zinc-400">{formatDate(post.date)}</time>
        <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
          Baca
        </span>
      </div>
      <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
        {post.title}
      </h3>
      {post.description && (
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {post.description}
        </p>
      )}
      {post.tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
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
    </Link>
  );
}
