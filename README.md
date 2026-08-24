# Portfolio Website

A modern, responsive portfolio website built with **Next.js 16**, **Tailwind CSS**, and **shadcn/ui**. Designed for GitHub Pages deployment with static export.

## Features

- 🎨 **Modern UI** - Built with shadcn/ui components and Tailwind CSS
- 📱 **Responsive** - Works on all device sizes
- 🖼️ **Media Support** - Images and videos for project showcases
- ⚡ **Static Export** - Optimized for GitHub Pages
- 🔍 **SEO Ready** - Proper metadata and Open Graph tags
- 🌙 **Dark Mode** - Automatic dark/light theme support
- 📝 **Easy Content Management** - Projects defined in TypeScript data file

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production (static export to /out)
npm run build

# Preview production build
npx serve out
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with featured projects
│   ├── projects/
│   │   ├── page.tsx       # All projects listing
│   │   └── [id]/
│   │       └── page.tsx   # Individual project detail
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── ui/                # shadcn/ui components
│   │   ├── media.tsx      # Image/video component
│   │   └── media-gallery.tsx # Carousel for multiple media
│   └── project-card.tsx   # Project card component
├── lib/
│   ├── projects.ts        # Project data (edit this to add projects)
│   └── utils.ts           # Utility functions
├── public/
│   └── projects/          # Project images/videos go here
├── .github/workflows/
│   └── deploy.yml         # GitHub Pages deployment
├── next.config.ts         # Static export config
└── package.json
```

## Adding Projects

Edit `lib/projects.ts` to add, modify, or remove projects. Each project supports:

- **Images** - JPG, PNG, WebP, etc.
- **Videos** - MP4, WebM (with poster image)
- **Multiple media items** - Carousel gallery
- **Tech stack tags**
- **Links** (GitHub, Demo, Article)
- **Featured flag** for homepage highlight

Example project structure:

```typescript
{
  id: "unique-id",
  title: "Project Name",
  description: "Full description...",
  shortDescription: "Brief summary for cards",
  techStack: ["React", "TypeScript", "Next.js"],
  media: [
    { type: "image", src: "/projects/image.jpg", alt: "Screenshot" },
    { type: "video", src: "/projects/demo.mp4", poster: "/projects/poster.jpg", alt: "Demo" }
  ],
  links: {
    github: "https://github.com/...",
    demo: "https://demo.example.com",
    article: "https://blog.example.com/..."
  },
  featured: true,
  startDate: "2024-01",
  endDate: "2024-06",
  role: "Lead Developer"
}
```

Add your media files to `public/projects/`.

## GitHub Pages Deployment

1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in repository settings (source: GitHub Actions)

The workflow (`.github/workflows/deploy.yml`) handles:
- Node.js setup and dependency caching
- Static build (`npm run build`)
- Upload to GitHub Pages artifact
- Deployment to `gh-pages` environment

## Customization

- **Colors/Theming**: Edit CSS variables in `app/globals.css`
- **Fonts**: Modify `app/layout.tsx` (uses Geist by default)
- **Components**: Add more shadcn/ui components with `npx shadcn@latest add <component>`
- **Metadata**: Update `app/layout.tsx` and page-specific metadata

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: lucide-react
- **Carousel**: embla-carousel-react
- **TypeScript**: Strict mode
- **Deployment**: GitHub Pages + Actions

## License

MIT