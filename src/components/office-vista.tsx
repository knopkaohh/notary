import Image from "next/image";
import { site } from "@/lib/site";

export function OfficeVista() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative min-h-[520px] md:min-h-[640px]">
        <Image
          src="/office-view.jpg"
          alt="Вид на Москву из кабинета нотариуса на 29 этаже БЦ Монарх"
          fill
          quality={88}
          sizes="100vw"
          className="object-cover object-[62%_42%]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-espresso/82 via-espresso/28 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-linear-to-t from-espresso/45 to-transparent" />

        <div className="relative mx-auto flex min-h-[520px] max-w-6xl flex-col justify-end px-4 py-16 sm:px-6 md:min-h-[640px] md:py-20">
          <div className="max-w-xl text-gold-soft" data-reveal>
            <p className="text-[11px] tracking-[0.28em] text-gold uppercase">
              Кабинет на 29 этаже
            </p>
            <h2 className="mt-3 font-heading text-4xl leading-tight sm:text-5xl">
              Панорама Москвы из окна приёмной
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-gold-soft/78">
              БЦ «Монарх» на Ленинградском проспекте: удобно от метро Динамо,
              спокойный этаж, светлый кабинет. Сюда приезжают за документом, а не
              за ожиданием в коридоре.
            </p>
            <p className="mt-6 text-sm tracking-[0.16em] text-gold/90 uppercase">
              {site.building} · офис 9
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
