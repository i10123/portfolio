import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Денис Каракулько — разработчик", template: "%s | Денис Каракулько" },
  description: "Портфолио Дениса Каракулько: мобильная и веб-разработка, проекты и эксперименты.",
  keywords: ["Денис Каракулько", "portfolio", "developer", "Flutter", "Dart", "web development"],
  authors: [{ name: "Денис Каракулько" }],
  openGraph: {
    type: "website",
    locale: "ru_BY",
    siteName: "Денис Каракулько",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { color: "#0b0e14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
