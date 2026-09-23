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
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/office-portrait.jpg"
          alt="Евгения Петровна Давыдова в кабинете нотариуса"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[58%_30%]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-espresso via-espresso/70 to-espresso/25" />
      </div>

      <div className="absolute inset-y-0 right-0 hidden w-[54%] lg:block">
        <Image
          src="/office-portrait.jpg"
          alt="Евгения Петровна Давыдова в кабинете нотариуса"
          fill
          priority
          quality={90}
          sizes="54vw"
          className="object-cover object-[62%_36%]"
        />
        <div className="absolute inset-y-0 left-0 w-40 bg-linear-to-r from-espresso to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-espresso/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-24 pt-32 sm:px-6 lg:justify-center lg:pb-20 lg:pt-28">
        <div className="max-w-xl">
          <p
            className="text-[11px] tracking-[0.32em] text-gold uppercase sm:text-xs"
            data-reveal
          >
            Нотариус города Москвы · реестр {site.registryNumber}
          </p>
          <h1
            className="mt-5 font-heading text-[2.6rem] leading-[1.05] text-gold-soft sm:text-6xl lg:text-[4.4rem]"
            data-reveal
          >
            Давыдова
            <span className="block italic text-gold">Евгения Петровна</span>
          </h1>
          <div className="gold-line mt-6 h-px w-24" data-reveal />
          <p
            className="mt-6 text-base leading-relaxed text-gold-soft/80 sm:text-lg"
            data-reveal
          >
            Сделки, доверенности, наследство и корпоративные действия — в кабинете
            на 29 этаже БЦ «Монарх», у метро Динамо. Запишитесь заранее и
            приезжайте без очереди.
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
      </div>
    </section>
  );
}
