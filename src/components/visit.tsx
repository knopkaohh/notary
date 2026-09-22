import { steps } from "@/lib/site";

export function Visit() {
  return (
    <section id="visit" className="scroll-mt-24 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl" data-reveal>
          <p className="text-[11px] tracking-[0.28em] text-muted-foreground uppercase">
            Как попасть на приём
          </p>
          <h2 className="mt-3 font-heading text-4xl leading-tight sm:text-5xl">
            Три шага — и документ на руках
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.n}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8"
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="font-heading text-6xl text-gold/35">{step.n}</span>
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
