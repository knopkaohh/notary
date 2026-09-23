import { advantages, site } from "@/lib/site";

export function TrustBar() {
  const items = [
    { label: "Реестр ФНП", value: site.registryNumber },
    { label: "Метро", value: "Динамо · Беговая" },
    { label: "Приём", value: "10:00–18:00 без перерыва" },
    { label: "Офис", value: "БЦ «Монарх», 29 этаж" },
  ];

  return (
    <section className="relative z-10 px-4 pt-2 md:-mt-6 md:px-6 md:pt-0">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-gold/25 bg-gold/20 shadow-[0_24px_60px_rgb(23_18_16_/_0.18)] grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-card px-3 py-4 sm:px-6 sm:py-5"
            data-reveal
          >
            <p className="text-[10px] tracking-[0.14em] text-muted-foreground uppercase sm:text-[11px] sm:tracking-[0.22em]">
              {item.label}
            </p>
            <p className="mt-1.5 font-heading text-base leading-snug text-foreground sm:mt-2 sm:text-xl">
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-6 grid max-w-6xl gap-3 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {advantages.map((item, index) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-card/70 p-5 md:p-6"
            data-reveal
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="mb-4 h-px w-10 bg-gold" />
            <h3 className="font-heading text-2xl leading-snug">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
