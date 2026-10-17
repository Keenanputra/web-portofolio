import { siteConfig } from '@/lib/site';

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">
        {siteConfig.role}
      </p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100 leading-tight">
        {siteConfig.name}
      </h1>
      <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
        Saya belajar membangun web, dan saya menuliskan setiap prosesnya di sini.
        Ini tempat saya mendokumentasikan praktek jaringan, eksperimen kode,
        dan hal-hal yang sedang saya pelajari.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <a
          href="#blog"
          className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-zinc-100 text-zinc-900 font-medium hover:bg-white transition-colors"
        >
          Lihat Catatan Praktek
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
        >
          Hubungi Saya
        </a>
      </div>
    </section>
  );
}
