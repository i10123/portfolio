import { Metadata } from "next";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "Browse all projects I've worked on",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <nav className="flex items-center gap-6">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="/projects" className="text-sm font-medium text-primary" aria-current="page">
              Projects
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">All Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects I've built or contributed to. Each project
              showcases different technologies and problem-solving approaches.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>

      <footer id="contact" className="border-t py-12 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}