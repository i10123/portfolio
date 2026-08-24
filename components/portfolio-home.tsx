"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Download, MapPin, Send, Sparkles } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Language = "ru" | "en";
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const copy = {
  ru: {
    navProjects: "Проекты",
    navAbout: "Обо мне",
    contact: "Написать в Telegram",
    eyebrow: "Портфолио · 2026",
    availability: "Открыт к предложениям и стажировкам",
    title: "Денис\nКаракулько",
    lead: "Разработчик из Гродно, который превращает идеи в работающие цифровые продукты.",
    description: "Учусь в ГрГУ, развиваюсь в мобильной и веб-разработке. Использую ИИ как осмысленный инструмент: для исследования, быстрых прототипов и качественной реализации.",
    viewProjects: "Смотреть проекты",
    telegram: "Telegram",
    location: "Гродно, Беларусь",
    projectLabel: "Избранный проект · 01",
    projectTitle: "Личные финансы —\nпод контролем.",
    projectText: "Coinly — локальное мобильное приложение для учёта личных финансов. Счета, операции, накопления и понятная аналитика — без регистрации, рекламы и отправки данных на сервер.",
    projectCta: "Материалы проекта",
    projectNote: "Android APK · 51 МБ",
    downloadApk: "Скачать APK",
    capabilities: "Возможности",
    capabilitiesItems: ["Счета и операции", "Категории и накопления", "Аналитика расходов", "PIN и биометрия", "Импорт и экспорт"],
    stack: "Стек",
    stackText: "Flutter / Dart · Material Design · Local storage · Secure storage · Biometrics",
    galleryLabel: "Интерфейс Coinly",
    aboutLabel: "Обо мне",
    aboutTitle: "Люблю момент,\nкогда идея становится\nнастоящим продуктом.",
    aboutText: "Мне 19 лет. Сейчас я расширяю инженерную базу через практику: проектирую интерфейсы, пишу код и постоянно ищу способы делать продукты понятнее и полезнее.",
    skills: ["Dart", "Веб-разработка", "Python", "UI/UX", "AI-инструменты", "C#", "Java"],
    getInTouch: "Есть идея или вакансия?\nДавайте поговорим.",
    footer: "Создано Денисом Каракулько",
  },
  en: {
    navProjects: "Projects",
    navAbout: "About",
    contact: "Message on Telegram",
    eyebrow: "Portfolio · 2026",
    availability: "Open to opportunities and internships",
    title: "Denis\nKarakulko",
    lead: "A developer from Grodno turning ideas into working digital products.",
    description: "I study at Yanka Kupala State University of Grodno and grow through mobile and web development. I use AI thoughtfully for research, rapid prototyping, and high-quality implementation.",
    viewProjects: "View projects",
    telegram: "Telegram",
    location: "Grodno, Belarus",
    projectLabel: "Featured project · 01",
    projectTitle: "Personal finance,\nunder control.",
    projectText: "Coinly is a local-first mobile app for personal finance. Accounts, transactions, savings, and clear insights — without sign-ups, advertising, or sending data to a server.",
    projectCta: "Project materials",
    projectNote: "Android APK · 51 MB",
    downloadApk: "Download APK",
    capabilities: "What it does",
    capabilitiesItems: ["Accounts and transactions", "Categories and savings", "Spending analytics", "PIN and biometrics", "Import and export"],
    stack: "Stack",
    stackText: "Flutter / Dart · Material Design · Local storage · Secure storage · Biometrics",
    galleryLabel: "Coinly interface",
    aboutLabel: "About me",
    aboutTitle: "I love the moment\nwhen an idea becomes\na real product.",
    aboutText: "I am 19. I build my engineering foundation through hands-on practice: designing interfaces, writing code, and constantly looking for ways to make products clearer and more useful.",
    skills: ["Dart", "Web development", "Python", "UI/UX", "AI tools", "C#", "Java"],
    getInTouch: "Have an idea or an opening?\nLet’s talk.",
    footer: "Made by Denis Karakulko",
  },
} as const;

export function PortfolioHome() {
  const [language, setLanguage] = useState<Language>("ru");
  const t = copy[language];

  function changeLanguage(nextLanguage: Language) {
    setLanguage(nextLanguage);
  }

  return (
    <main id="main-content" className="overflow-hidden bg-[#0b0e14] text-[#f4f2eb] selection:bg-[#ffbd45] selection:text-[#10131a]">
      <a href="#top" className="sr-only fixed left-4 top-4 z-50 rounded-md bg-[#ffbd45] px-4 py-2 text-sm font-semibold text-[#11151d] focus:not-sr-only">Skip to content</a>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
        <a href="#top" className="text-sm font-semibold tracking-[-0.02em] transition-opacity hover:opacity-70">DK.</a>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-[#a6adba] md:flex">
          <a href="#projects" className="transition-colors hover:text-[#f4f2eb]">{t.navProjects}</a>
          <a href="#about" className="transition-colors hover:text-[#f4f2eb]">{t.navAbout}</a>
          <a href="https://t.me/i10123" target="_blank" rel="noreferrer" className="transition-colors hover:text-[#f4f2eb]">{t.contact}</a>
        </nav>
        <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-medium">
          {(["ru", "en"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => changeLanguage(item)}
              aria-pressed={language === item}
              className={`rounded-full px-3 py-1.5 uppercase transition-colors ${language === item ? "bg-[#f4f2eb] text-[#11151d]" : "text-[#98a1af] hover:text-white"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </header>

      <section id="top" className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.1fr_.9fr] md:px-8 md:pb-32 md:pt-24">
        <div className="relative z-10 flex flex-col items-start">
          <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#9ba5b5]">
            <span className="size-2 rounded-full bg-[#66d0aa] shadow-[0_0_18px_#66d0aa]" />
            {t.availability}
          </div>
          <p className="mb-5 text-sm text-[#a6adba]">{t.eyebrow}</p>
          <h1 className="whitespace-pre-line text-balance text-[clamp(3.8rem,9vw,8rem)] font-semibold leading-[.84] tracking-[-0.075em]">{t.title}</h1>
          <p className="mt-9 max-w-md text-xl leading-relaxed text-[#d4d7dd]">{t.lead}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#9099a8]">{t.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#ffbd45] px-5 py-3 text-sm font-semibold text-[#131720] transition-transform duration-150 ease-out hover:bg-[#ffc85e] active:scale-[.97]">
              {t.viewProjects}<ArrowDownRight className="size-4" />
            </a>
            <a href="https://t.me/i10123" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium transition-colors hover:border-white/35 hover:bg-white/[.05] active:scale-[.97]">
              <Send className="size-4" />{t.telegram}
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md md:ml-auto md:max-w-none">
          <div className="absolute -inset-10 rounded-full bg-[#ffbd45]/10 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#171c27]">
            <Image src="/images/denis-karakulko.jpg" alt="Денис Каракулько" fill priority sizes="(min-width: 768px) 40vw, 90vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#161b25]/90 px-4 py-3 shadow-xl backdrop-blur md:-left-9">
            <Avatar className="size-10">
              <AvatarImage src="/images/denis-karakulko.jpg" alt="" />
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
            <div><p className="text-sm font-semibold">Denis Karakulko</p><p className="mt-0.5 flex items-center gap-1 text-xs text-[#a6adba]"><MapPin className="size-3" />{t.location}</p></div>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-[#10151f] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-5 md:mb-14"><div><p className="text-xs uppercase tracking-[.16em] text-[#ffbd45]">{t.projectLabel}</p><h2 className="mt-3 text-3xl font-semibold tracking-[-.05em] md:text-5xl">Coinly</h2></div><p className="hidden max-w-xs text-right text-sm leading-relaxed text-[#8e98a8] md:block">{t.projectNote}</p></div>
          <Card className="border-white/10 bg-[#151b27] py-0 shadow-none">
            <CardContent className="grid gap-0 px-0 lg:grid-cols-[1.02fr_.98fr]">
              <div className="relative min-h-[360px] overflow-hidden bg-[#0e1420] lg:min-h-[600px]">
                <Image src="/images/coinly/hero.png" alt="Coinly — personal finance app" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
              </div>
              <div className="flex flex-col p-6 md:p-10 lg:p-12">
                <CardHeader className="px-0"><CardTitle className="whitespace-pre-line text-3xl leading-[.95] tracking-[-.05em] md:text-5xl">{t.projectTitle}</CardTitle><CardDescription className="mt-7 max-w-xl text-base leading-relaxed text-[#aeb6c2]">{t.projectText}</CardDescription></CardHeader>
                <div className="mt-9 grid gap-8 border-y border-white/10 py-8 sm:grid-cols-2"><div><p className="text-xs font-medium uppercase tracking-[.14em] text-[#ffbd45]">{t.capabilities}</p><ul className="mt-4 flex flex-col gap-2.5 text-sm text-[#d5d9e0]">{t.capabilitiesItems.map((item) => <li key={item} className="flex items-center gap-2"><Sparkles className="size-3 text-[#66d0aa]" />{item}</li>)}</ul></div><div><p className="text-xs font-medium uppercase tracking-[.14em] text-[#ffbd45]">{t.stack}</p><p className="mt-4 text-sm leading-relaxed text-[#d5d9e0]">{t.stackText}</p></div></div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4"><a href="#coinly-gallery" className="inline-flex items-center gap-2 text-sm font-semibold text-[#ffbd45] transition-colors hover:text-[#ffd17a]">{t.projectCta}<ArrowDownRight className="size-4" /></a><a href={`${basePath}/downloads/coinly.apk`} download className="inline-flex items-center gap-2 text-xs text-[#d7dce4] transition-colors hover:text-[#ffbd45]"><Download className="size-3.5" />{t.downloadApk} · {t.projectNote}</a></div>
              </div>
            </CardContent>
          </Card>
          <div id="coinly-gallery" className="mt-5 grid gap-5 md:grid-cols-2"><div className="overflow-hidden rounded-2xl border border-white/10 bg-[#151b27]"><Image src="/images/coinly/accounts.jpg" alt={t.galleryLabel} width={1280} height={2772} className="h-auto w-full" /></div><div className="overflow-hidden rounded-2xl border border-white/10 bg-[#151b27]"><Image src="/images/coinly/analytics.jpg" alt={t.galleryLabel} width={1280} height={2772} className="h-auto w-full" /></div></div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[.9fr_1.1fr] md:px-8 md:py-32">
        <p className="text-xs uppercase tracking-[.16em] text-[#ffbd45]">{t.aboutLabel}</p>
        <div><h2 className="whitespace-pre-line text-balance text-4xl font-semibold leading-[.95] tracking-[-.055em] md:text-6xl">{t.aboutTitle}</h2><p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#aeb6c2]">{t.aboutText}</p><div className="mt-9 flex flex-wrap gap-2">{t.skills.map((skill) => <Badge key={skill} variant="outline" className="h-auto rounded-full border-white/15 px-3 py-1.5 text-[#dbe0e8]">{skill}</Badge>)}</div></div>
      </section>

      <section className="border-t border-white/10 bg-[#ffbd45] text-[#11151d]"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 py-16 md:flex-row md:items-end md:px-8 md:py-20"><h2 className="whitespace-pre-line text-balance text-4xl font-semibold leading-[.94] tracking-[-.06em] md:text-6xl">{t.getInTouch}</h2><a href="https://t.me/i10123" target="_blank" rel="noreferrer" className="inline-flex size-16 items-center justify-center rounded-full bg-[#11151d] text-white transition-transform duration-150 ease-out hover:scale-105 active:scale-95" aria-label={t.telegram}><ArrowUpRight className="size-6" /></a></div></section>
      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-[#7c8695] md:flex-row md:items-center md:justify-between md:px-8"><span>© {new Date().getFullYear()} {t.footer}</span><a href="https://t.me/i10123" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">@i10123</a></footer>
    </main>
  );
}
