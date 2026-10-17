import Link from 'next/link';
import type { Post } from '@/lib/mdx';

type CodeDatabaseProps = {
  posts: Post[];
};

function Triangle() {
  return (
    <span
      aria-hidden="true"
      className="inline-block w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-zinc-500"
    />
  );
}

function Sparkline() {
  return (
    <svg
      viewBox="0 0 120 32"
      className="h-8 w-28 text-zinc-600"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 24 L18 20 L34 26 L52 12 L70 18 L88 8 L104 14 L120 6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export default function CodeDatabase({ posts }: CodeDatabaseProps) {
  const [featured, ...rest] = posts;

  return (
    <div className="relative mx-auto mt-16 max-w-2xl">
      <div className="rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 p-4 shadow-[0_50px_140px_-50px_rgba(0,0,0,0.95)] backdrop-blur">
        <div className="flex items-center justify-between px-1 pb-4">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
            Catatan Terbaru
          </span>
          <Sparkline />
        </div>

        {posts.length === 0 ? (
          <p className="px-1 pb-2 text-sm text-zinc-400">
            Belum ada catatan. Dokumentasi praktek akan muncul di sini.
          </p>
        ) : (
          <>
            {rest.slice(0, 2).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200 transition-colors"
              >
                <Triangle />
                <span className="text-xs font-medium uppercase tracking-wide truncate">
                  {post.title}
                </span>
              </Link>
            ))}

            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="block mt-2 rounded-xl border border-zinc-800 bg-zinc-900/70 p-5 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Triangle />
                  <span className="text-sm font-semibold uppercase tracking-wide text-zinc-100">
                    {featured.title}
                  </span>
                </div>
                {featured.description && (
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {featured.description}
                  </p>
                )}
                <div className="mt-4 flex items-end justify-between gap-4">
                  <Sparkline />
                  <span className="text-xs text-zinc-400">Baca</span>
                </div>
                <div className="mt-4 border-t border-dashed border-zinc-800" />
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}
