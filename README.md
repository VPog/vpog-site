# V:POG — Vanderbilt Programmers of Gaming

Official website for Vanderbilt University's student game development organization.

**Discord:** https://discord.gg/sWJFdhaJW9 · **Instagram:** @vandy.pog

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

---

## Updating Content (no code knowledge needed)

All site content lives in `/data/`. Edit these files to update the site:

| File | Controls |
|------|----------|
| `data/projects.ts` | Games — title, description, screenshots, team, links |
| `data/exec.ts` | Exec board members + alumni |
| `data/outcomes.ts` | Alumni company placements |
| `data/site.ts` | Global links, SEO keywords, org name |

### Add a new game project

Open `data/projects.ts` and add to the `projects` array:

```ts
{
  id: "my-game",               // URL anchor slug (no spaces/caps)
  title: "My Game Title",
  tagline: "One punchy line.",
  description: "Short card description.",
  longDescription: "Full paragraph for the project page.",
  genre: "Puzzle Platformer",
  engine: "Unity",
  year: 2025,
  featured: false,             // true = shown on homepage
  images: ["/images/my-game-1.png"],
  githubUrl: "https://github.com/...",
  playUrl: "https://itch.io/...",
  contributors: [
    { name: "Jane Doe", role: "Programmer" },
    { name: "Alex Kim", role: "Artist" },
  ],
  tags: ["Unity", "C#", "2D", "Platformer"],
  color: "#ff6b6b",            // accent color for this project's cards
}
```

### Add an exec board member

Open `data/exec.ts` and add to `execBoard`:

```ts
{
  id: "unique-id",
  name: "Full Name",
  role: "President",
  bio: "One or two sentences about this person.",
  photo: "/images/exec/name.jpg",   // drop photo in public/images/exec/
  year: "Junior",
  major: "Computer Science",
  linkedinUrl: "https://linkedin.com/in/...",   // optional
  githubUrl: "https://github.com/...",          // optional
  current: true,   // false = alumni tab
}
```

### Add a company placement

Open `data/outcomes.ts` and add to `companies`:

```ts
{
  id: "company-slug",
  name: "Company Name",
  logo: "/images/logos/company.png",
  category: "AAA Studio",   // "AAA Studio" | "Indie Studio" | "Tech" | "Film/VFX" | "Other"
  members: [
    { name: "Alumni Name", role: "Software Engineer Intern", year: "'25" },
  ],
  color: "#ff0000",   // brand color for accent dot
}
```

---

## Adding Real Images

Drop images into `public/images/` and reference them by path:

| Use | Path | Size |
|-----|------|------|
| Project screenshots | `/images/project-name-1.png` | 1200×675 (16:9) |
| Exec headshots | `/images/exec/firstname.jpg` | 400×400 (square) |
| Company logos | `/images/logos/company.png` | 200×80 (horizontal) |

---

## Deploying to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your repo — Vercel auto-detects Next.js
4. Click Deploy

After deploy, update `data/site.ts`:
```ts
url: "https://your-site.vercel.app",
```

Re-deploy whenever you update content in `/data/`.

---

## Project Structure

```
vpog/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home / landing
│   ├── about/page.tsx      # About the org
│   ├── projects/page.tsx   # Games showcase
│   ├── exec/               # Exec board (server + client split)
│   ├── outcomes/           # Career outcomes carousel
│   ├── get-involved/       # Join links + FAQ
│   ├── sitemap.ts          # Auto-generated sitemap (SEO)
│   └── robots.ts           # Robots.txt (SEO)
├── components/
│   ├── Navbar.tsx          # Sticky nav + dark mode toggle
│   ├── Footer.tsx          # Footer with links
│   ├── ProjectCard.tsx     # Game card (featured + grid variants)
│   ├── ExecCard.tsx        # Exec member card
│   ├── ThemeProvider.tsx   # Dark/light theme context
│   └── ui/
│       ├── Button.tsx      # Reusable button (4 variants)
│       └── Section.tsx     # Section + SectionHeader wrappers
├── data/                   # ← EDIT THESE to update content
│   ├── projects.ts
│   ├── exec.ts
│   ├── outcomes.ts
│   └── site.ts
└── public/images/          # Static assets
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)  
- **Styling:** Tailwind CSS + CSS custom properties  
- **Icons:** Lucide React  
- **Fonts:** Syne (headings) · Instrument Sans (body) · JetBrains Mono (mono)  
- **Deployment:** Vercel  

---

Built by V:POG · Vanderbilt University · Nashville, TN · Make games. Build together. 🎮
