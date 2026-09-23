import Image from "next/image";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div data-reveal>
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            О нотариусе
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight sm:text-5xl">
            Спокойная сделка начинается с точного документа
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {site.name} — действующий нотариус города Москвы. В офисе на
            Ленинградском проспекте удостоверяют сделки с недвижимостью и
            долями ООО, оформляют доверенности, согласия, семейные соглашения,
            завещания и наследственные дела.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Мы не продаём «пакеты» и не обещаем невозможного: объясняем, какие
            бумаги нужны, сколько займёт визит и что будет в готовом акте. Если
            вопрос срочный — скажите об этом при записи.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-4">
              <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                Статус
              </dt>
              <dd className="mt-1 font-heading text-xl">Действующий нотариус</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <dt className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                Реестровый номер
              </dt>
              <dd className="mt-1 font-heading text-xl">{site.registryNumber}</dd>
            </div>
          </dl>
        </div>
        <div className="relative p-3" data-reveal>
          <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-gold/40" />
          <div className="relative overflow-hidden rounded-[22px] shadow-[0_30px_80px_rgb(23_18_16_/_0.22)]">
            <Image
              src="/notary-office.jpg"
              alt="Евгения Петровна Давыдова в нотариальной конторе"
              width={1200}
              height={900}
              className="h-[460px] w-full object-cover object-[55%_18%] sm:h-[520px]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-espresso/90 to-transparent p-6 text-gold-soft">
              <p className="font-heading text-2xl">{site.name}</p>
              <p className="text-sm text-gold">{site.title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
