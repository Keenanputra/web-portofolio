import Hero from '@/components/Hero';
import NotesSection from '@/components/NotesSection';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import FadeIn from '@/components/FadeIn';
import { getAllPosts } from '@/lib/mdx';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <Hero />
      <FadeIn>
        <NotesSection posts={posts} />
      </FadeIn>
      <FadeIn>
        <Skills />
      </FadeIn>
      <FadeIn>
        <Contact />
      </FadeIn>
    </div>
  );
}
