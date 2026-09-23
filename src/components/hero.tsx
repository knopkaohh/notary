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
    <section className="relative overflow-hidden bg-espresso text-gold-soft md:min-h-[100svh]">
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        <Image
          src="/notary-office.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_30%] opacity-45"
        />
        <div className="absolute inset-0 bg-linear-to-r from-espresso via-espresso/82 to-espresso/35" />
        <div className="absolute inset-0 bg-linear-to-t from-espresso via-transparent to-espresso/40" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-8 pt-[calc(4.35rem+env(safe-area-inset-top))] sm:px-6 md:min-h-[100svh] md:justify-center md:pb-16 md:pt-28">
        <div className="relative mb-5 aspect-[16/10] w-full overflow-hidden rounded-2xl sm:mb-6 sm:aspect-[16/9] md:hidden">
          <Image
            src="/notary-office.jpg"
            alt="Кабинет нотариуса Давыдовой Евгении Петровны"
            fill
            priority
          sizes="(max-width: 767px) 92vw, 100vw"
          className="object-cover object-[50%_30%]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-espresso/55 via-transparent to-espresso/15" />
        </div>

        <p className="text-[11px] leading-5 tracking-[0.08em] text-gold uppercase sm:tracking-[0.18em] md:text-xs md:tracking-[0.32em]">
          Нотариус города Москвы
          <span className="mt-1 block font-normal tracking-[0.04em] text-gold-soft/70 normal-case md:mt-0 md:inline md:tracking-[0.32em] md:text-gold md:uppercase">
            <span className="hidden md:inline"> · </span>
            реестр {site.registryNumber}
          </span>
        </p>
        <h1 className="mt-3 max-w-3xl font-heading text-[2.05rem] leading-[1.12] text-gold-soft sm:text-5xl md:mt-5 md:text-6xl lg:text-7xl">
          Давыдова
          <span className="block italic text-gold">Евгения Петровна</span>
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gold-soft/80 sm:text-base md:mt-6 md:text-lg">
          Сделки, доверенности, наследство и корпоративные действия — в БЦ
          «Монарх» у метро Динамо. Запишитесь заранее и приезжайте без очереди.
        </p>
        <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
          <Button
            onClick={() => openAppointment()}
            className="h-12 w-full rounded-full bg-gold px-7 text-[13px] tracking-[0.1em] text-espresso uppercase hover:bg-gold-soft sm:w-auto sm:tracking-[0.16em]"
          >
            Онлайн-запись
          </Button>
          <a
            href={site.phoneHref}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 w-full rounded-full border-gold/40 bg-transparent px-7 text-[13px] tracking-[0.06em] text-gold uppercase hover:bg-gold/10 hover:text-gold sm:w-auto sm:tracking-[0.16em]"
            )}
          >
            <Phone className="size-4" />
            {site.phone}
          </a>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-sm leading-snug text-gold-soft/70 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-gold" />
            {site.metro}
          </span>
          <span>{site.hours}</span>
          <span>29 этаж, офис 9</span>
        </div>
      </div>
    </section>
  );
}
