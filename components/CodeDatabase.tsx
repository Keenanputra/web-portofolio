'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { Post } from '@/lib/mdx';

type CodeDatabaseProps = {
  posts: Post[];
};

const MAX_CARDS = 3;

// Tinggi header kartu (py-4 + text-sm) sekitar 53px.
// Offset disetel sedikit di atasnya supaya judul kartu belakang terbaca utuh.
const REST_OFFSET = 56;
const SPREAD_OFFSET = 84;

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

function NoteCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block text-left rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.95)] backdrop-blur transition-colors hover:border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
    >
      {/* Header: satu-satunya bagian yang terlihat saat kartu bertumpuk. */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-800/70">
        <Triangle />
        <span className="min-w-0 truncate text-sm font-semibold uppercase tracking-wide text-zinc-100">
          {post.title}
        </span>
      </div>

      {/* Body: hanya terlihat penuh pada kartu depan. */}
      <div className="px-6 py-5">
        {post.description && (
          <p className="text-sm leading-relaxed text-zinc-400 line-clamp-2">
            {post.description}
          </p>
        )}
        <div className="mt-5 flex items-end justify-between gap-4">
          <Sparkline />
          <span className="text-xs text-zinc-400 transition-colors group-hover:text-zinc-200">
            Baca
          </span>
        </div>
        <div className="mt-5 border-t border-dashed border-zinc-800" />
      </div>
    </Link>
  );
}

export default function CodeDatabase({ posts }: CodeDatabaseProps) {
  const [active, setActive] = useState(false);
  const reduceMotion = useReducedMotion();
  const cards = posts.slice(0, MAX_CARDS);

  if (cards.length === 0) {
    return (
      <div className="mx-auto mt-16 max-w-md">
        <p className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 px-6 py-10 text-center text-sm text-zinc-400">
          Belum ada catatan. Dokumentasi praktek akan muncul di sini.
        </p>
      </div>
    );
  }

  const state = active && !reduceMotion ? 'spread' : 'rest';

  const cardVariants = (index: number): Variants => ({
    rest: {
      y: -index * REST_OFFSET,
      scale: 1 - index * 0.045,
      rotateX: index === 0 ? 0 : 2,
      opacity: 1 - index * 0.1,
    },
    spread: {
      y: -index * SPREAD_OFFSET,
      scale: 1 - index * 0.015,
      rotateX: index === 0 ? 0 : 2,
      opacity: 1 - index * 0.03,
    },
  });

  return (
    <div className="relative mx-auto mt-16 md:mt-28 max-w-md [perspective:1400px]">
      {/* Deck untuk md ke atas: kartu bertumpuk dengan header terlihat. */}
      <ul
        className="relative hidden md:block md:mt-24"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onFocusCapture={() => setActive(true)}
        onBlurCapture={() => setActive(false)}
      >
        {cards.map((post, index) => (
          <motion.li
            key={post.slug}
            className={index === 0 ? 'relative' : 'absolute inset-x-0 top-0'}
            style={{
              zIndex: cards.length - index,
              transformOrigin: 'top center',
            }}
            initial="rest"
            animate={state}
            variants={cardVariants(index)}
            transition={{ type: 'spring', stiffness: 260, damping: 26, mass: 0.8 }}
          >
            <NoteCard post={post} />
          </motion.li>
        ))}
      </ul>

      {/* List sederhana untuk mobile, tanpa tumpukan. */}
      <ul className="space-y-3 md:hidden">
        {cards.map((post) => (
          <li key={post.slug}>
            <NoteCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
