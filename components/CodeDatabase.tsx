'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';
import type { Post } from '@/lib/mdx';

type CodeDatabaseProps = {
  posts: Post[];
};

const MAX_CARDS = 3;

// Tinggi header kartu (py-4 + text-sm) sekitar 53px.
// Offset disetel sedikit di atasnya supaya judul kartu belakang terbaca utuh.
const REST_OFFSET = 56;
const SPREAD_OFFSET = 84;

// Tilt maksimum (derajat) dan geser paralaks per lapisan (px).
const TILT_MAX = 9;
const PARALLAX_PER_LAYER = 6;

const TILT_SPRING = { stiffness: 150, damping: 20, mass: 0.6 };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

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

  const deckRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{
    left: number;
    top: number;
    width: number;
    height: number;
  } | null>(null);

  // Posisi kursor ternormalisasi (-1 sampai 1) terhadap area deck.
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const snx = useSpring(nx, TILT_SPRING);
  const sny = useSpring(ny, TILT_SPRING);

  // Seluruh tumpukan miring sebagai satu unit.
  const rotateY = useTransform(snx, (value) => value * TILT_MAX);
  const rotateX = useTransform(sny, (value) => -value * TILT_MAX);

  // Paralaks berlapis: makin ke belakang, geserannya makin besar.
  // Dibuat eksplisit (bukan di dalam loop) supaya aman terhadap rules-of-hooks.
  const layerX1 = useTransform(snx, (value) => value * PARALLAX_PER_LAYER);
  const layerX2 = useTransform(snx, (value) => value * PARALLAX_PER_LAYER * 2);
  const layerY1 = useTransform(sny, (value) => value * PARALLAX_PER_LAYER);
  const layerY2 = useTransform(sny, (value) => value * PARALLAX_PER_LAYER * 2);
  const layerX = [0, layerX1, layerX2];
  const layerY = [0, layerY1, layerY2];

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
      opacity: 1 - index * 0.1,
    },
    spread: {
      y: -index * SPREAD_OFFSET,
      scale: 1 - index * 0.015,
      opacity: 1 - index * 0.03,
    },
  });

  function measureDeck() {
    const element = deckRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    // Area mengintip kartu belakang berada di atas kartu depan, jadi
    // titik pusat tilt diperluas ke atas supaya terasa pas di tengah tumpukan.
    const peek = Math.max(0, cards.length - 1) * REST_OFFSET;
    rectRef.current = {
      left: rect.left,
      top: rect.top - peek,
      width: rect.width,
      height: rect.height + peek,
    };
  }

  function handleEnter() {
    measureDeck();
    setActive(true);
  }

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const rect = rectRef.current;
    if (!rect) return;
    const nextX = clamp(((event.clientX - rect.left) / rect.width - 0.5) * 2, -1, 1);
    const nextY = clamp(((event.clientY - rect.top) / rect.height - 0.5) * 2, -1, 1);
    nx.set(nextX);
    ny.set(nextY);
  }

  function handleLeave() {
    rectRef.current = null;
    setActive(false);
    // Spring akan meluncurkan tilt dan paralaks kembali ke datar.
    nx.set(0);
    ny.set(0);
  }

  return (
    <div className="relative mx-auto mt-16 md:mt-28 max-w-md [perspective:1200px]">
      <motion.div
        ref={deckRef}
        className="hidden md:block"
        style={{ rotateX, rotateY, transformOrigin: 'center' }}
        onMouseEnter={handleEnter}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onFocusCapture={() => setActive(true)}
        onBlurCapture={() => setActive(false)}
      >
        {/* Deck untuk md ke atas: kartu bertumpuk dengan header terlihat. */}
        <ul className="relative md:mt-24">
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
              <motion.div style={{ x: layerX[index], y: layerY[index] }}>
                <NoteCard post={post} />
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* List sederhana untuk mobile, tanpa tumpukan dan tanpa tilt. */}
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
