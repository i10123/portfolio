"use client";

import { cn } from "@/lib/utils";
import { Media } from "./media";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectMedia } from "@/lib/projects";

interface MediaGalleryProps {
  media: ProjectMedia[];
  className?: string;
}

export function MediaGallery({ media, className }: MediaGalleryProps) {
  if (media.length === 0) return null;
  if (media.length === 1) {
    return (
      <div className={cn("relative aspect-video w-full", className)}>
        <Media
          src={media[0].src}
          alt={media[0].alt}
          type={media[0].type}
          poster={media[0].poster}
        />
      </div>
    );
  }

  return (
    <Carousel
      className={cn("relative w-full", className)}
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="relative h-[500px] w-full rounded-lg overflow-hidden">
        {media.map((item, index) => (
          <CarouselItem key={index} className="h-full w-full flex items-center justify-center bg-muted">
            <Media
              src={item.src}
              alt={item.alt}
              type={item.type}
              poster={item.poster}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" aria-label="Previous">
        <Button variant="outline" size="icon" aria-label="Previous">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
      </CarouselPrevious>
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" aria-label="Next">
        <Button variant="outline" size="icon" aria-label="Next">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </CarouselNext>
    </Carousel>
  );
}