import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/lib/projects";
import { ExternalLink, GitBranch } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.shortDescription}</p>
          </div>
          {project.featured && (
            <Badge variant="secondary" className="ml-2 shrink-0">
              Featured
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 5 && (
            <Badge variant="outline" className="text-xs">
              +{project.techStack.length - 5}
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{project.role} • {project.startDate}{project.endDate ? ` – ${project.endDate}` : " – Present"}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-4 border-t">
        <div className="flex gap-2">
          {project.links.github && (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <GitBranch className="h-4 w-4" />
            </Link>
          )}
          {project.links.demo && (
            <Link
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          View Details →
        </Link>
      </CardFooter>
    </Card>
  );
}