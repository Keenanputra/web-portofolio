# PRD: Portfolio Keenan

## Objective

Website portfolio personal Keenan, pelajar SMK TKJ, sebagai perkenalan diri sekaligus living document untuk dokumentasi praktek & eksperimen coding.

**Target audiens:**
- Utama: Guru & temen deket — biar mereka tau Keenan serius di coding dan mau ngajarin lebih lanjut
- Secondary: Recruiter / senior dev yang nyasar

**Bukan** showcase karya komersial — ini "kenalan lebih dalam" yang tumbuh seiring waktu.

**Success criteria:**
- Tampil sempurna di mobile (375px ke atas)
- Semua section terbaca jelas di dark mode
- Blog post baru bisa dipublish hanya dengan push MDX file ke Git
- Vercel auto-deploy dalam < 2 menit setelah push
- Lighthouse score ≥ 85 di mobile

---

## Tech Stack

| Bagian | Pilihan |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS v3 |
| Konten blog | MDX via `contentlayer` atau `next-mdx-remote` |
| Bahasa | TypeScript |
| Deploy | Vercel |
| Font | Inter atau Geist |
| Animasi | Framer Motion (subtle) |

---

## Commands

```bash
Dev:   npm run dev
Build: npm run build
Lint:  npm run lint
```

---

## Project Structure

```
app/
  page.tsx              → Landing page (Hero, About, Skills, Blog preview, Contact)
  blog/
    page.tsx            → List semua post
    [slug]/
      page.tsx          → Detail post
components/
  Hero.tsx
  About.tsx
  Skills.tsx
  Contact.tsx
  BlogCard.tsx
  Navbar.tsx
content/
  blog/                 → File .mdx blog post
lib/
  mdx.ts                → Helper baca & parse MDX
public/
  og-image.png          → Open Graph image
```

---

## Code Style

```tsx
// Komponen: PascalCase, satu file satu komponen
// Props: selalu typed, tidak pakai any

type HeroProps = {
  name: string
  tagline: string
}

export default function Hero({ name, tagline }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6">
      <h1 className="text-4xl font-bold text-white">{name}</h1>
      <p className="text-zinc-400 mt-2">{tagline}</p>
    </section>
  )
}
```

- Tailwind utility classes — nggak pakai CSS custom kecuali terpaksa
- Tidak ada `any` di TypeScript
- Tidak ada emoji di seluruh konten
- Tone tulisan: semi-formal, santai tapi santun

---

## Visual Design

- **Mode:** Dark only (tidak perlu toggle light/dark)
- **Palet warna:**
  - Background: `zinc-950`
  - Teks utama: `zinc-100`
  - Teks sekunder/accent: `zinc-400`
- **Pendekatan:** Mobile-first — semua layout dimulai dari mobile (375px), baru scale ke desktop
- **Animasi:** Subtle — fade-in on scroll, hover state ringan. Tidak ada yang berlebihan atau "alay"
- **Tipografi:** Kontras besar antara heading & body text
- **Tidak ada:** Emoji, liquid glass effect (dihapus karena berat di mobile), warna mencolok

---

## Sections (Single Page)

1. **Hero** — Nama Keenan, tagline singkat, tombol CTA ke blog
2. **About** — Cerita singkat: siapa Keenan, SMK TKJ, fokus ke web dev
3. **Skills / Minat** — Badge atau list teknologi yang sedang dipelajari
4. **Blog Preview** — Tampilkan 2–3 post terbaru dari MDX
5. **Contact** — Link GitHub, Instagram, email

---

## Konten Blog / Dokumentasi

Blog berfungsi sebagai **digital garden** — living document yang terus diupdate.

Tipe konten yang akan dipost:
- Screenshot & catatan konfigurasi CLI dari praktek SMK
- Topologi jaringan dari lab TKJ
- Catatan troubleshoot & problem solving
- Eksperimen coding baru

**Workflow publish:**
1. Tulis file `.mdx` baru di `content/blog/`
2. `git push` ke GitHub
3. Vercel otomatis deploy — selesai

---

## Testing Strategy

- Tidak perlu unit test untuk portfolio statis
- Manual check: buka di HP asli, pastikan layout tidak patah di berbagai ukuran layar
- Lighthouse audit mobile sebelum launch (target ≥ 85)

---

## Boundaries

**Always:**
- Mobile-first di semua komponen
- Tidak ada emoji di konten maupun UI
- Tone semi-formal di semua tulisan
- Warna hanya dari Tailwind config

**Ask first:**
- Tambah dependency baru
- Ubah struktur folder utama
- Ubah skema MDX frontmatter

**Never:**
- Pakai `any` di TypeScript
- Hardcode warna di luar Tailwind config
- Commit API key / secret apapun
- Pakai liquid glass / efek berat yang merusak performa mobile

---

## Open Questions

Tidak ada — semua sudah dijawab dalam sesi diskusi.

---

*Dibuat: 17 Oktober 2026*
*Penulis: Keenan*
