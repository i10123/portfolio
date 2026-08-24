import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, Project } from "@/lib/projects";
import { MediaGallery } from "@/components/ui/media-gallery";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch, Calendar, Briefcase, Tag } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Portfolio`,
    description: project.shortDescription,
  };
}

function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/projects" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-sm font-medium text-primary" aria-current="page">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <article>
            <header className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
            </header>

            {project.media.length > 0 && (
              <section className="mb-12" aria-labelledby="media-heading">
                <h2 id="media-heading" className="sr-only">
                  Project Media
                </h2>
                <MediaGallery media={project.media} />
              </section>
            )}

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <section aria-labelledby="overview-heading">
                  <h2 id="overview-heading" className="text-2xl font-bold mb-4">
                    Overview
                  </h2>
                  <div className="prose max-w-none">
                    <p className="text-lg text-muted-foreground mb-6">
                      {project.shortDescription}
                    </p>
                    <p>{project.description}</p>
                  </div>
                </section>

                <Separator />

                <section aria-labelledby="details-heading">
                  <h2 id="details-heading" className="text-2xl font-bold mb-4">
                    Project Details
                  </h2>
                  <dl className="grid gap-4 md:grid-cols-2">
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Timeline
                      </dt>
                      <dd className="mt-1 font-medium">
                        {project.startDate} – {project.endDate || "Present"}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        Role
                      </dt>
                      <dd className="mt-1 font-medium">{project.role}</dd>
                    </div>
                    <div className="md:col-span-2">
                      <dt className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        Technologies
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </section>
              </div>

              <aside className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        <GitBranch className="h-4 w-4" />
                        View Source Code
                      </Link>
                    )}
                    {project.links.demo && (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    )}
                    {project.links.article && (
                      <Link
                        href={project.links.article}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Read Article
                      </Link>
                    )}
                  </CardContent>
                </Card>

                {project.featured && (
                  <Card className="border-primary">
                    <CardContent className="pt-6">
                      <Badge variant="default" className="text-primary">
                        Featured Project
                      </Badge>
                    </CardContent>
                  </Card>
                )}
              </aside>
            </div>
          </article>
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