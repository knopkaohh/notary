import { steps } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-24 px-4 py-14 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl" data-reveal>
          <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase sm:tracking-[0.28em]">
            Как попасть на приём
          </p>
          <h2 className="mt-3 font-heading text-[1.85rem] leading-tight sm:text-4xl md:text-5xl">
            Три шага — и документ на руках
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:mt-12 md:gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.n}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8"
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="font-heading text-5xl text-gold/35 md:text-6xl">{step.n}</span>
              <h3 className="mt-4 font-heading text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
