import type { MDXComponents } from 'mdx/types';

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="mt-10 mb-4 text-2xl font-bold text-zinc-100" {...props} />
  ),
  h2: (props) => (
    <h2 className="mt-10 mb-4 text-xl font-semibold text-zinc-100" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 text-lg font-semibold text-zinc-200" {...props} />
  ),
  p: (props) => (
    <p className="my-4 text-zinc-400 leading-relaxed" {...props} />
  ),
  ul: (props) => (
    <ul className="my-4 list-disc list-inside space-y-1 text-zinc-400" {...props} />
  ),
  ol: (props) => (
    <ol className="my-4 list-decimal list-inside space-y-1 text-zinc-400" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => <strong className="font-semibold text-zinc-200" {...props} />,
  a: (props) => (
    <a
      className="text-zinc-200 underline underline-offset-4 hover:text-white"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 text-sm leading-relaxed"
      {...props}
    />
  ),
  code: ({ className, ...props }) => {
    const isBlock = typeof className === 'string' && className.includes('language-');
    if (isBlock) {
      return <code className="font-mono text-zinc-200" {...props} />;
    }
    return (
      <code
        className="font-mono text-[0.85em] text-zinc-200 bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5"
        {...props}
      />
    );
  },
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-2 border-zinc-700 pl-4 text-zinc-400 italic"
      {...props}
    />
  ),
};
