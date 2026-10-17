# Portfolio Keenan Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a clean, mobile-first Next.js 14 personal portfolio and digital garden for Keenan (SMK TKJ student).

**Architecture:** Next.js 14 App Router with Tailwind CSS, dark mode by default (`zinc-950` bg), local MDX content processing via `next-mdx-remote` or `gray-matter`, and Framer Motion subtle animations.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion, gray-matter, next-mdx-remote, Lucide React (subtle icons).

**Spec:** `D:\Document\Web\Portofolio\PRD.md`

## Global Constraints

- Mobile-first design (fully responsive starting at 375px)
- Dark mode only (`zinc-950` background, `zinc-100` primary text, `zinc-400` muted text)
- No emojis anywhere in copy or UI
- No `any` type in TypeScript
- Semi-formal, polite Indonesian language
- Zero hardcoded custom colors outside Tailwind `zinc` scale

## Review Focus

1. Mobile viewport overflow on 375px screens -> Ensure containers have `px-4 sm:px-6` and `max-w-4xl mx-auto`.
2. Dead links/controls -> Ensure all buttons/nav items have real anchors (`#about`, `#skills`, `#blog`, `#contact`, `/blog`).
3. MDX parsing errors on invalid frontmatter -> Fallback gracefully or handle missing date/tags cleanly in `lib/mdx.ts`.
4. Slow initial page render -> Keep Framer Motion variants lightweight (`initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}`).
5. Empty blog state -> Show a helpful empty state when no MDX files exist or fail to parse.

---

### Task 1: Next.js Project Scaffolding & Dependencies

**Files:**
- Create/Initialize: Next.js project root files (`package.json`, `tsconfig.json`, `tailwind.config.ts`, `app/layout.tsx`, `app/page.tsx`, `app/globals.css`)

**Interfaces:**
- Produces: Runnable Next.js 14 app with Tailwind CSS, Framer Motion, gray-matter, next-mdx-remote installed.

- [ ] **Step 1: Scaffolding project files**

Initialize Next.js 14 App Router project with TypeScript, Tailwind CSS, ESLint, App Router, and `@` import alias in the workspace root.

Run: `npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm` (or manual initialization if files exist).

- [ ] **Step 2: Install dependencies**

Install required packages: `framer-motion`, `lucide-react`, `gray-matter`, `next-mdx-remote`.

Run: `npm install framer-motion lucide-react gray-matter next-mdx-remote`

- [ ] **Step 3: Setup Tailwind CSS & Dark Theme**

Configure `tailwind.config.ts` and `app/globals.css` to enforce `zinc-950` background and `zinc-100` text as default dark theme.

- [ ] **Step 4: Verify build and dev command**

Run: `npm run build`
Expected: PASS with 0 errors.

- [ ] **Step 5: Commit scaffolding**

```bash
git init
git add .
git commit -m "chore: setup nextjs 14 project with tailwind and mdx deps"
```

---

### Task 2: MDX Content Pipeline & Sample Post

**Files:**
- Create: `lib/mdx.ts`
- Create: `content/blog/konfigurasi-router-mikrotik.mdx`
- Create: `content/blog/troubleshoot-vlan-smk.mdx`

**Interfaces:**
- Produces: `getPostBySlug(slug: string)` and `getAllPosts()` helper functions in `lib/mdx.ts` returning typed post objects (`title`, `description`, `date`, `tags`, `slug`, `content`).

- [ ] **Step 1: Create sample MDX blog files**

Create `content/blog/konfigurasi-router-mikrotik.mdx` with valid YAML frontmatter (`title`, `date`, `description`, `tags`) documenting a TKJ CLI config practice.

- [ ] **Step 2: Implement `lib/mdx.ts`**

Write typed helpers using `fs`, `path`, and `gray-matter` to read posts from `content/blog/`, sort by date descending, and extract frontmatter.

- [ ] **Step 3: Verify MDX parsing**

Create a simple test script or call `getAllPosts()` in `app/page.tsx` to verify posts are parsed without errors.

- [ ] **Step 4: Commit MDX pipeline**

```bash
git add lib/mdx.ts content/blog/
git commit -m "feat: add mdx helper and initial sample documentation posts"
```

---

### Task 3: Navbar & Layout Component

**Files:**
- Create: `components/Navbar.tsx`
- Create: `components/Footer.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: None
- Produces: Sticky/clean navbar with smooth scroll links (`#about`, `#skills`, `#blog`, `#contact`) and `/blog` link, footer with copyright and status.

- [ ] **Step 1: Create `Navbar.tsx`**

Build clean mobile-friendly navbar with active link indicator, blur/border `border-zinc-800 bg-zinc-950/80 backdrop-blur-md`, and zero emojis.

- [ ] **Step 2: Create `Footer.tsx`**

Build minimal footer showing copyright, SMK TKJ status, and quick links.

- [ ] **Step 3: Update `app/layout.tsx`**

Set root layout font (Inter/Geist), dark background class `bg-zinc-950 text-zinc-100 antialiased`, include Navbar and Footer.

- [ ] **Step 4: Verify layout rendering**

Run: `npm run build`
Expected: PASS.

- [ ] **Step 5: Commit Navbar & Layout**

```bash
git add components/ app/layout.tsx
git commit -m "feat: add navbar and footer components in layout"
```

---

### Task 4: Landing Page Sections (Hero, About, Skills, Blog Preview, Contact)

**Files:**
- Create: `components/Hero.tsx`
- Create: `components/About.tsx`
- Create: `components/Skills.tsx`
- Create: `components/BlogCard.tsx`
- Create: `components/Contact.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `getAllPosts()` from `lib/mdx.ts`
- Produces: Fully functional single-page landing UI.

- [ ] **Step 1: Create `Hero.tsx`**

Heading with name Keenan, tagline about Web Dev & TKJ, subtle CTA button "Lihat Catatan Praktek" (`#blog`) and "Hubungi Saya" (`#contact`).

- [ ] **Step 2: Create `About.tsx`**

Section explaining Keenan's background in SMK TKJ, passion for web development, and willingness to learn more from mentors/teachers.

- [ ] **Step 3: Create `Skills.tsx`**

Structured badge grid listing HTML/CSS, JavaScript, TypeScript, Next.js, Tailwind CSS, Mikrotik/Networking.

- [ ] **Step 4: Create `BlogCard.tsx` & Blog Preview Section**

Card component for MDX posts showing date, title, description, tags, and link to `/blog/[slug]`.

- [ ] **Step 5: Create `Contact.tsx`**

Links to GitHub, Instagram, and Email with Lucide icons (no fake form, no emojis).

- [ ] **Step 6: Assemble `app/page.tsx`**

Combine all sections with Framer Motion fade-in wrappers.

- [ ] **Step 7: Verify Landing Page**

Run: `npm run dev` / `npm run build`
Check mobile view at 375px width.
Expected: Clean rendering, zero overflow, zero warnings.

- [ ] **Step 8: Commit Landing Page**

```bash
git add components/ app/page.tsx
git commit -m "feat: complete single-page landing UI with hero, about, skills, blog preview, contact"
```

---

### Task 5: Blog Index & Post Detail Pages

**Files:**
- Create: `app/blog/page.tsx`
- Create: `app/blog/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getAllPosts()` and `getPostBySlug(slug)` from `lib/mdx.ts`, `MDXRemote` from `next-mdx-remote/rsc`.
- Produces: List page at `/blog` and dynamic post detail at `/blog/[slug]`.

- [ ] **Step 1: Create `app/blog/page.tsx`**

Index listing all documentation posts with search or tag filters if needed, sorted by date.

- [ ] **Step 2: Create `app/blog/[slug]/page.tsx`**

Dynamic route using `generateStaticParams` for static site generation (SSG) on Vercel, rendering MDX content with clean typography styling (prose-like styling via Tailwind).

- [ ] **Step 3: Verify SSG build and route rendering**

Run: `npm run build`
Expected: Static page generation for `/blog` and `/blog/konfigurasi-router-mikrotik` etc. with 0 errors.

- [ ] **Step 4: Commit Blog Pages**

```bash
git add app/blog/
git commit -m "feat: add blog index and static MDX detail pages"
```

---

### Task 6: Final Audit, Verification & Build Check

**Files:**
- Modify: any components needing mobile layout or contrast tweaks
- Check: `PRD.md` compliance

- [ ] **Step 1: Check mobile responsive layout**

Verify all containers use responsive classes (`px-4 sm:px-6`, `text-3xl sm:text-5xl`).

- [ ] **Step 2: Check boundaries compliance**

Confirm: 0 emojis in content/UI, 0 `any` in TypeScript, 0 dead links.

- [ ] **Step 3: Run full production build**

Run: `npm run build`
Expected: Successful build with 100% static routes.

- [ ] **Step 4: Commit final verification**

```bash
git add .
git commit -m "chore: final audit pass and verification"
```
