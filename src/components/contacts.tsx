"use client";

import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { hoursRows, site } from "@/lib/site";
import { useAppointment } from "@/lib/appointment-context";
import { Button } from "@/components/ui/button";

export function Contacts() {
  const { openAppointment } = useAppointment();
  const mapSrc = `https://yandex.ru/map-widget/v1/?ll=${site.map.lng}%2C${site.map.lat}&z=16&pt=${site.map.lng}%2C${site.map.lat}&l=map`;

  return (
    <section id="contacts" className="scroll-mt-24 px-4 pb-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl" data-reveal>
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            Контактная информация
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight sm:text-5xl">
            БЦ «Монарх», 29 этаж
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6" data-reveal="left">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/bc-monarch.png"
                alt="Бизнес-центр Монарх на Ленинградском проспекте"
                width={668}
                height={500}
                className="h-52 w-full object-cover"
              />
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <ul className="space-y-4 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 text-gold" />
                  <span>
                    {site.addressFull}
                    <br />
                    {site.building}, {site.metro}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 text-gold" />
                  <span>
                    <a className="hover:underline" href={site.phoneHref}>
                      {site.phone}
                    </a>
                    <span className="text-muted-foreground"> · </span>
                    <a className="hover:underline" href={site.phoneAltHref}>
                      {site.phoneAlt}
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 text-gold" />
                  <a className="hover:underline" href={site.emailHref}>
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 text-gold" />
                  <span>
                    {site.hours}
                    <br />
                    {site.weekends}
                  </span>
                </li>
              </ul>
              <Button
                onClick={() => openAppointment()}
                className="mt-6 h-11 w-full rounded-full bg-espresso text-gold hover:bg-espresso/90"
              >
                Записаться на приём
              </Button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full text-sm">
                <tbody>
                  {hoursRows.map((row) => (
                    <tr key={row.day} className="border-b border-border last:border-0">
                      <td className="px-5 py-3 font-heading text-base">{row.day}</td>
                      <td
                        className={`px-5 py-3 text-right ${
                          row.open ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="min-h-[520px] overflow-hidden rounded-2xl border border-border shadow-[0_24px_60px_rgb(23_18_16_/_0.12)]"
            data-reveal="right"
          >
            <iframe
              title="Карта: нотариус Давыдова, БЦ Монарх"
              src={mapSrc}
              className="h-full min-h-[520px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
