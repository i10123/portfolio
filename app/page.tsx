import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { ArrowRight, GitBranch, Link as LinkedInIcon, Mail, Code2 } from "lucide-react";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <nav className="flex items-center gap-6">
            <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 px-4" aria-labelledby="hero-heading">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center max-w-2xl mx-auto">
              <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Building{" "}
                <span className="text-primary">software</span> that matters
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                Full-stack developer crafting performant, accessible, and delightful
                digital experiences. Currently focused on React, TypeScript, and modern web platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-foreground font-medium hover:bg-accent transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30" aria-labelledby="featured-heading">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-10">
              <h2 id="featured-heading" className="text-3xl font-bold">
                Featured Projects
              </h2>
              <Link
                href="/projects"
                className="text-sm font-medium text-primary hover:underline flex items-center gap-1"
              >
                View All
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4" aria-labelledby="skills-heading">
          <div className="container mx-auto max-w-4xl">
            <h2 id="skills-heading" className="text-3xl font-bold text-center mb-12">
              Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-2xl mx-auto">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "PostgreSQL",
                "Tailwind CSS",
                "Prisma",
                "Docker",
                "Git",
                "AWS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-center text-sm font-medium bg-card border rounded-lg hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GitBranch className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
            <a
              href="mailto:hello@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://code.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Code"
            >
              <Code2 className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}