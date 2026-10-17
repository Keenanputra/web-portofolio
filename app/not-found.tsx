import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-24 text-center">
      <p className="font-mono text-sm text-zinc-400">404</p>
      <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-zinc-100">
        Halaman tidak ditemukan
      </h1>
      <p className="mt-3 text-zinc-400">
        Halaman yang kamu cari tidak ada atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-zinc-100 text-zinc-900 font-medium hover:bg-white transition-colors"
      >
        Kembali ke beranda
      </Link>
    </div>
  );
}
