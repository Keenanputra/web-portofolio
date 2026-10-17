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
    <section id="skills" className="py-16 border-t border-zinc-900 scroll-mt-20">
      <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-8">
        Yang Sedang Dipelajari
      </h2>
      <div className="space-y-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium text-zinc-300 mb-3">{group.label}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1.5 rounded-md text-sm text-zinc-300 bg-zinc-900 border border-zinc-800"
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
