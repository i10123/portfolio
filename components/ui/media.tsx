"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface MediaProps {
  src: string;
  alt?: string;
  type: "image" | "video";
  poster?: string;
  className?: string;
}

export function Media({ src, alt, type, poster, className }: MediaProps) {
  if (type === "video") {
    return (
      <video
        src={src}
        poster={poster}
        controls
        preload="metadata"
        className={cn("rounded-lg w-full max-h-[500px] object-contain bg-muted", className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt || ""}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={cn("object-cover rounded-lg", className)}
      style={{ objectFit: "cover" } as React.CSSProperties}
    />
  );
}