const skillGroups = [
  {
    label: 'Web Development',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Git'],
  },
  {
    label: 'Jaringan & Sistem',
    items: ['MikroTik', 'Cisco', 'VLAN & Routing', 'Linux Dasar'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 sm:px-6 pt-24 sm:pt-32 text-center scroll-mt-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-zinc-400">
        Skills
      </p>

      <h2 className="mx-auto mt-6 max-w-3xl text-3xl sm:text-5xl font-medium leading-[1.12] tracking-tight text-zinc-50">
        Yang Sedang <span className="font-display">Dipelajari</span>
      </h2>

      <div className="mx-auto mt-12 max-w-3xl space-y-10">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-5">
              {group.label}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 rounded-full text-sm text-zinc-300 border border-zinc-800 bg-zinc-900/50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
