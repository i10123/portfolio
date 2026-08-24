export type MediaType = "image" | "video";

export interface ProjectMedia {
  type: MediaType;
  src: string;
  alt?: string;
  poster?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  techStack: string[];
  media: ProjectMedia[];
  links: {
    github?: string;
    demo?: string;
    article?: string;
  };
  featured: boolean;
  startDate: string;
  endDate?: string;
  role: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard. Built with Next.js 14, PostgreSQL, Prisma, and Stripe.",
    shortDescription:
      "Full-stack e-commerce with real-time inventory and payments",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind"],
    media: [
      { type: "image", src: "/projects/ecommerce-1.jpg", alt: "Homepage" },
      { type: "image", src: "/projects/ecommerce-2.jpg", alt: "Product page" },
      { type: "video", src: "/projects/ecommerce-demo.mp4", poster: "/projects/ecommerce-poster.jpg", alt: "Demo walkthrough" },
    ],
    links: {
      github: "https://github.com/username/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
    },
    featured: true,
    startDate: "2024-01",
    endDate: "2024-06",
    role: "Lead Developer",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, drag-and-drop boards, and team workspaces. Uses WebSockets for live collaboration.",
    shortDescription: "Real-time collaborative task manager with drag-and-drop",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
    media: [
      { type: "image", src: "/projects/taskmanager-1.jpg", alt: "Dashboard view" },
      { type: "video", src: "/projects/taskmanager-demo.mp4", poster: "/projects/taskmanager-poster.jpg", alt: "Collaboration demo" },
    ],
    links: {
      github: "https://github.com/username/taskmanager",
    },
    featured: true,
    startDate: "2023-09",
    endDate: "2023-12",
    role: "Full Stack Developer",
  },
  {
    id: "project-3",
    title: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with location-based forecasts, historical data visualization, and severe weather alerts. Integrates multiple weather APIs.",
    shortDescription: "Weather dashboard with forecasts and data visualization",
    techStack: ["Vue.js", "Chart.js", "OpenWeather API", "Vite"],
    media: [
      { type: "image", src: "/projects/weather-1.jpg", alt: "Main dashboard" },
      { type: "image", src: "/projects/weather-2.jpg", alt: "Charts view" },
    ],
    links: {
      demo: "https://weather-dash.example.com",
      github: "https://github.com/username/weather-dashboard",
    },
    featured: false,
    startDate: "2023-03",
    endDate: "2023-06",
    role: "Frontend Developer",
  },
  {
    id: "project-4",
    title: "Open Source CLI Tool",
    description:
      "Command-line tool for automating repetitive development tasks. Supports plugins, configuration files, and cross-platform compatibility.",
    shortDescription: "Cross-platform CLI for dev automation with plugin system",
    techStack: ["TypeScript", "Node.js", "Commander.js", "ESLint"],
    media: [
      { type: "image", src: "/projects/cli-1.jpg", alt: "Terminal screenshot" },
    ],
    links: {
      github: "https://github.com/username/dev-cli",
    },
    featured: false,
    startDate: "2022-11",
    role: "Maintainer",
  },
];