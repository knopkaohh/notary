import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6">
      <p className="text-[11px] tracking-[0.24em] text-muted-foreground uppercase">
        {site.title}
      </p>
      <h1 className="mt-3 font-heading text-4xl leading-tight sm:text-5xl">
        {title}
      </h1>
      {updated ? (
        <p className="mt-3 text-sm text-muted-foreground">{updated}</p>
      ) : null}
      <div className="prose-legal mt-10 space-y-4 text-[15px] leading-relaxed text-foreground/85">
        {children}
      </div>
      <p className="mt-12 text-sm">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          ← На главную
        </Link>
      </p>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3 pt-4">
      <h2 className="font-heading text-2xl">{title}</h2>
      {children}
    </section>
  );
}
