"use client";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowRight, Database, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import Cubes from "@/components/ui/Cubes";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];

  return (
    <div className="flex min-h-screen flex-col bg-background overflow-hidden">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Database className="h-6 w-6 text-primary" />
              </motion.div>
              <span className="hidden font-bold sm:inline-block">বঙ্গডিবি</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/docs"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {t.nav.docs}
              </Link>
              <Link
                href="/pricing"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {t.nav.pricing}
              </Link>
              <Link
                href="/blog"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {t.nav.blog}
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center space-x-2">
              <LanguageSwitcher />
              <Button variant="ghost" className="h-8 w-8 px-0" asChild>
                <Link
                  href="https://github.com/bongodb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">{t.nav.github}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div style={{ height: '600px', width: '100%', maxWidth: '800px', position: 'relative' }}>
              <Cubes
                gridSize={8}
                maxAngle={60}
                radius={4}
                borderStyle="2px dashed #0ba5e9"
                faceColor="#transparent"
                rippleColor="#0ba5e9"
                rippleSpeed={1.5}
                autoAnimate={true}
                rippleOnClick={true}
              />
            </div>
          </div>
          <motion.div
            className="container relative z-10 mx-auto flex flex-col items-center gap-4 text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Link
                href="https://github.com/bongodb"
                className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium text-primary hover:bg-muted/80 transition-colors"
                target="_blank"
              >
                {t.hero.follow_github}
              </Link>
            </motion.div>
            <motion.h1
              className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              variants={fadeIn}
            >
              {t.hero.title_prefix}{" "}
              <span className="text-primary bg-clip-text">{t.hero.title_highlight}</span>
            </motion.h1>
            <motion.p
              className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
              variants={fadeIn}
            >
              {t.hero.description}
            </motion.p>
            <motion.div className="space-x-4" variants={fadeIn}>
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform hover:scale-105"
              >
                <Link href="/login">{t.hero.get_started}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-transform hover:scale-105"
              >
                <Link href="/docs">{t.hero.docs}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>

        <section
          id="features"
          className="container mx-auto space-y-6 bg-slate-50/50 py-8 dark:bg-transparent md:py-12 lg:py-16"
        >
          <motion.div
            className="mx-auto flex flex-col items-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
              {t.features.title}
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {t.features.description}
            </p>
          </motion.div>
          <motion.div
            className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Zap,
                title: t.features.speed.title,
                desc: t.features.speed.desc,
              },
              {
                icon: Database,
                title: t.features.flexible.title,
                desc: t.features.flexible.desc,
              },
              {
                icon: Shield,
                title: t.features.secure.title,
                desc: t.features.secure.desc,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden rounded-lg border bg-background p-2 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-[180px] flex-col justify-between rounded-md p-6 items-center text-center">
                  <feature.icon className="h-12 w-12 text-secondary" />
                  <div className="space-y-2">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Pagination Demo Section */}
        <section id="updates" className="container mx-auto py-8 md:py-12 lg:py-16">
          <motion.div
            className="mx-auto flex flex-col items-center justify-center gap-4 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl font-bold">{t.updates.title}</h2>
            <p className="text-muted-foreground">
              {t.updates.description}
            </p>

            <div className="w-full max-w-3xl space-y-4 my-8">
              {/* Mock List Items */}
              <div className="flex flex-col gap-4">
                {[1, 2, 3].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: item * 0.1 }}
                    whileHover={{ scale: 1.01 }}
                    className="flex border rounded-lg p-4 items-center justify-between text-left hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div>
                      <h3 className="font-semibold text-primary">
                        {t.updates.update_prefix}{item}.০
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t.updates.published_prefix} {10 + item} জানুয়ারী, ২০২৬
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      {t.updates.read_more} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Pagination Component */}
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      ১
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">২</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">৩</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </motion.div>
        </section>

        <section
          id="open-source"
          className="container mx-auto py-8 md:py-12 lg:py-24"
        >
          <motion.div
            className="mx-auto flex flex-col items-center justify-center gap-4 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
              {t.footer.newsletter_title}
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              {t.footer.newsletter_desc}
            </p>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="flex-1"
                  placeholder={t.footer.newsletter_placeholder}
                  type="email"
                />
                <Button type="submit">{t.footer.subscribe}</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                {t.footer.newsletter_subtext}
              </p>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="py-6 md:py-0 border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            {t.footer.built_by}{" "}
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {t.footer.inc}
            </a>
            । {t.footer.source_code}{" "}
            <a
              href="https://github.com/bongodb/bongodb"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {t.nav.github}
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
