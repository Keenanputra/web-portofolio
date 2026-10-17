import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Slug yang aman: hanya huruf kecil, angka, dan tanda hubung.
const SLUG_PATTERN = /^[a-z0-9-]+$/;

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
};

function toIsoDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === 'string' && value.trim() !== '') {
    return value;
  }
  return '1970-01-01';
}

function buildPost(slug: string, data: Record<string, unknown>, content: string): Post {
  return {
    slug,
    title: typeof data.title === 'string' && data.title ? data.title : 'Untitled Post',
    date: toIsoDate(data.date),
    description: typeof data.description === 'string' ? data.description : '',
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .flatMap((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      if (!SLUG_PATTERN.test(slug)) {
        return [];
      }
      try {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return [buildPost(slug, data, content)];
      } catch {
        // Lewati file dengan frontmatter tidak valid agar build tidak gagal.
        return [];
      }
    });

  return allPostsData.sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): Post | null {
  if (!SLUG_PATTERN.test(slug)) {
    return null;
  }

  try {
    const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
    const mdPath = path.join(postsDirectory, `${slug}.md`);

    let fullPath = '';
    if (fs.existsSync(mdxPath)) {
      fullPath = mdxPath;
    } else if (fs.existsSync(mdPath)) {
      fullPath = mdPath;
    } else {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return buildPost(slug, data, content);
  } catch {
    return null;
  }
}
