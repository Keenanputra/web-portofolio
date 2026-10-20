import MockWindow from '@/components/MockWindow';

export default function Hero() {
  return (
    <section id="perkenalan" className="relative px-4 sm:px-6 pt-16 sm:pt-24 text-center">
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400">
        Perkenalan
      </p>

      <h1 className="mx-auto mt-6 max-w-3xl text-3xl sm:text-5xl font-medium leading-[1.12] tracking-tight text-zinc-50">
        Belajar Web dari <span className="font-display">Dasar Jaringan</span>
      </h1>

      <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-zinc-400">
        Saya Keenan, pelajar SMK Widya Karya Taman Sidoarjo. Saya
        membangun web pribadi sambil mendokumentasikan setiap praktek jaringan
        dan eksperimen kode yang saya kerjakan.
      </p>

      <div className="mx-auto mt-9 flex max-w-md flex-col sm:max-w-none sm:flex-row items-stretch sm:items-center justify-center gap-3">
        <a
          href="#catatan"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors"
        >
          Lihat Catatan Praktek
        </a>
        <a
          href="#kontak"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-900 transition-colors"
        >
          Hubungi Saya
        </a>
      </div>

      <MockWindow />
    </section>
  );
}
