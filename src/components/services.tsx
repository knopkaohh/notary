"use client";

import {
  Building2,
  FilePenLine,
  Landmark,
  Heart,
  Stamp,
  Handshake,
  ScrollText,
} from "lucide-react";
import { serviceCategories } from "@/lib/site";
import { useAppointment } from "@/lib/appointment-context";
import { Button } from "@/components/ui/button";

const icons = {
  legal: Building2,
  poa: FilePenLine,
  realty: Landmark,
  family: Heart,
  consent: Stamp,
  options: Handshake,
  other: ScrollText,
};

export function Services() {
  const { openAppointment } = useAppointment();

  return (
    <section id="services" className="scroll-mt-24 bg-espresso py-14 text-gold-soft md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl" data-reveal>
          <p className="text-[11px] tracking-[0.16em] text-gold uppercase sm:tracking-[0.28em]">
            Услуги нотариуса
          </p>
          <h2 className="mt-3 font-heading text-[1.85rem] leading-tight sm:text-4xl md:text-5xl">
            Всё, что удостоверяют в конторе
          </h2>
          <p className="mt-4 text-gold-soft/70">
            Выберите направление — подскажем список документов и запишем на
            удобный час.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
          {serviceCategories.map((category, index) => {
            const Icon = icons[category.id];
            return (
              <article
                key={category.id}
                className="group flex flex-col rounded-2xl border border-gold/20 bg-white/5 p-5 transition duration-500 hover:border-gold/50 hover:bg-white/10 md:p-6 md:hover:-translate-y-1"
                data-reveal
                style={{ transitionDelay: `${(index % 2) * 90}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-heading text-2xl text-gold">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-sm text-gold-soft/70">
                      {category.pitch}
                    </p>
                  </div>
                  <Icon className="size-6 shrink-0 text-gold" />
                </div>
                <ul className="mt-5 flex-1 space-y-2 text-sm leading-relaxed text-gold-soft/80">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => openAppointment(category.title)}
                  className="mt-6 h-11 w-full rounded-full bg-gold px-5 text-[12px] tracking-[0.1em] text-espresso uppercase hover:bg-gold-soft sm:w-auto sm:self-start sm:tracking-[0.14em]"
                >
                  Записаться по этой услуге
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
