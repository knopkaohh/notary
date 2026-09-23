"use client";

import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { useAppointment } from "@/lib/appointment-context";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const { openAppointment } = useAppointment();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-espresso text-gold-soft">
      <div className="absolute inset-0">
        <Image
          src="/notary-office.jpg"
          alt="Кабинет нотариуса Давыдовой Евгении Петровны"
          fill
          priority
          className="object-cover object-[62%_30%] opacity-45"
        />
        <div className="absolute inset-0 bg-linear-to-r from-espresso via-espresso/82 to-espresso/35" />
        <div className="absolute inset-0 bg-linear-to-t from-espresso via-transparent to-espresso/40" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 md:justify-center md:pb-16 md:pt-28">
        <p
          className="text-[11px] tracking-[0.32em] text-gold uppercase sm:text-xs"
          data-reveal
        >
          Нотариус города Москвы · реестр {site.registryNumber}
        </p>
        <h1
          className="mt-5 max-w-3xl font-heading text-[2.6rem] leading-[1.05] text-gold-soft sm:text-6xl lg:text-7xl"
          data-reveal
        >
          Давыдова
          <span className="block italic text-gold">Евгения Петровна</span>
        </h1>
        <p
          className="mt-6 max-w-xl text-base leading-relaxed text-gold-soft/80 sm:text-lg"
          data-reveal
        >
          Сделки, доверенности, наследство и корпоративные действия — в БЦ
          «Монарх» у метро Динамо. Запишитесь заранее и приезжайте без очереди.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row" data-reveal>
          <Button
            onClick={() => openAppointment()}
            className="h-12 rounded-full bg-gold px-7 text-[13px] tracking-[0.16em] text-espresso uppercase hover:bg-gold-soft"
          >
            Онлайн-запись
          </Button>
          <a
            href={site.phoneHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 rounded-full border-gold/40 bg-transparent px-7 text-[13px] tracking-[0.16em] text-gold uppercase hover:bg-gold/10 hover:text-gold"
            )}
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
        </div>
        <div
          className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gold-soft/70"
          data-reveal
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-gold" />
            {site.metro}
          </span>
          <span>{site.hours}</span>
          <span>29 этаж, офис 9</span>
        </div>
      </div>
    </section>
  );
}
