export default function MockWindow() {
  return (
    <div aria-hidden="true" className="relative mx-auto mt-16 max-w-3xl select-none">
      {/* Glow lembut di belakang panel */}
      <div className="absolute inset-x-8 -top-6 bottom-0 rounded-[2rem] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.06),transparent_70%)] blur-2xl" />

      {/* Window kecil di belakang kiri */}
      <div className="hidden sm:block absolute -left-4 lg:-left-12 bottom-12 w-52 rounded-xl border border-zinc-800/70 bg-zinc-900/70 p-3 shadow-2xl backdrop-blur">
        <div className="flex gap-1.5 mb-4">
          <span className="w-2 h-2 rounded-full bg-zinc-700" />
          <span className="w-2 h-2 rounded-full bg-zinc-700" />
          <span className="w-2 h-2 rounded-full bg-zinc-700" />
        </div>
        <div className="space-y-2">
          <div className="h-2 w-28 rounded bg-zinc-700/60" />
          <div className="h-2 w-20 rounded bg-zinc-800" />
          <div className="h-2 w-24 rounded bg-zinc-800/70" />
        </div>
      </div>

      {/* Window utama */}
      <div className="relative rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/80 to-zinc-950/90 p-3 shadow-[0_50px_140px_-50px_rgba(0,0,0,0.95)] backdrop-blur">
        {/* Bar atas */}
        <div className="flex items-center gap-3 pb-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          </div>
          <div className="flex-1 h-7 rounded-md border border-zinc-800 bg-zinc-900/70" />
        </div>

        {/* Isi: grid tabel bergaris putus-putus */}
        <div className="border-t border-zinc-800/70 pt-4">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-px overflow-hidden rounded-lg border border-dashed border-zinc-800">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="h-10 sm:h-14 border border-dashed border-zinc-800/70 bg-zinc-900/30 p-2"
              >
                <div
                  className={`h-1.5 rounded ${
                    index % 3 === 0 ? 'w-3/4 bg-zinc-700/60' : 'w-1/2 bg-zinc-800'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
