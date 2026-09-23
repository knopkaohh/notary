import { advantages, site } from "@/lib/site";

export function TrustBar() {
  const items = [
    { label: "Реестр ФНП", value: site.registryNumber },
    { label: "Метро", value: "Динамо · Беговая" },
    { label: "Приём", value: "10:00–18:00 без перерыва" },
    { label: "Офис", value: "БЦ «Монарх», 29 этаж" },
  ];

  return (
    <section className="relative z-10 -mt-6 px-4 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-gold/30 bg-gold/25 shadow-[0_24px_60px_rgb(23_18_16_/_0.18)] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-card px-5 py-5 sm:px-6"
            data-reveal
          >
            <p className="text-[11px] tracking-[0.22em] text-muted-foreground uppercase">
              {item.label}
            </p>
            <p className="mt-2 font-heading text-xl text-foreground">
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {advantages.map((item, index) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-card/70 p-6"
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
