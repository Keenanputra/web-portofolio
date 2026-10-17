import Link from 'next/link';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import BlogCard from '@/components/BlogCard';
import FadeIn from '@/components/FadeIn';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-4">
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>

      <section id="blog" className="py-16 border-t border-zinc-900 scroll-mt-20">
        <FadeIn>
          <div className="flex items-end justify-between gap-4 mb-8">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Catatan Praktek
            </h2>
            <Link
              href="/blog"
              className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              Semua catatan
            </Link>
          </div>
        </FadeIn>

        {posts.length === 0 ? (
          <p className="text-zinc-500 text-sm">
            Belum ada catatan. Dokumentasi praktek akan muncul di sini.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {posts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.05}>
                <BlogCard post={post} />
              </FadeIn>
            ))}
          </div>
        )}
      </section>

      <FadeIn>
        <Contact />
      </FadeIn>
    </div>
  );
}
