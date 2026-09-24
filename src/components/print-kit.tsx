import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Листовка A5 — «без очереди»",
    format: "A5, 148×210 мм, 2 стороны",
    use: "A5 для раздачи: фасад, доверенности и согласия, бесплатный разбор документов по телефону.",
    href: "/print/listovka-a5-semya.pdf",
    pages: [
      { src: "/print/previews/listovka-a5-semya-1.png", alt: "Лицевая сторона листовки про запись без очереди" },
      { src: "/print/previews/listovka-a5-semya-2.png", alt: "Оборот с тремя поводами позвонить" },
    ],
  },
  {
    title: "Листовка A5 — доли ООО",
    format: "A5, 148×210 мм, 2 стороны",
    use: "A5 для компаний: доли ООО, ФНС, опционы и список бумаг до визита.",
    href: "/print/listovka-a5-biznes.pdf",
    pages: [
      { src: "/print/previews/listovka-a5-biznes-1.png", alt: "Лицевая сторона деловой листовки" },
      { src: "/print/previews/listovka-a5-biznes-2.png", alt: "Оборот деловой листовки" },
    ],
  },
  {
    title: "Афиша A4",
    format: "A4, 210×297 мм, 1 сторона",
    use: "A4 в лифт и на стойку: крупный телефон, три направления и QR.",
    href: "/print/listovka-a4.pdf",
    pages: [
      { src: "/print/previews/listovka-a4-1.png", alt: "Афиша A4 с призывом записаться" },
    ],
  },
  {
    title: "Буклет — три фальца",
    format: "A4 альбом, 297×210 мм. Снаружи: о нотариусе · контакты · обложка. Внутри: оффер и четыре услуги.",
    use: "Та же раскладка, что в макете-примере: светлые полосы, предметные фото, обложка справа.",
    href: "/print/buklet-a4.pdf",
    pages: [
      { src: "/print/previews/buklet-a4-1.png", alt: "Наружная сторона буклета" },
      { src: "/print/previews/buklet-a4-2.png", alt: "Внутренняя сторона буклета" },
    ],
  },
];

export function PrintKit() {
  return (
    <article className="mx-auto max-w-6xl px-4 pb-[calc(7rem+env(safe-area-inset-bottom))] pt-[calc(5.5rem+env(safe-area-inset-top))] sm:px-6 md:pb-24 md:pt-32">
      <p className="text-[11px] tracking-[0.16em] text-muted-foreground uppercase sm:tracking-[0.24em]">
        Печатные макеты
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-3xl leading-tight sm:text-4xl md:text-5xl">
        Листовки, которые просят позвонить
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
        Буклет в цветах сайта: эспрессо, золото и кремовая бумага. Ниже мокап,
        как его увидит клиент, и PDF для типографии.
      </p>

      <figure className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-[0_24px_60px_rgb(23_18_16_/_0.12)]">
        <Image
          src="/print/buklet-mockup.png"
          alt="Мокап буклета на ткани: наружная и внутренняя стороны"
          width={1080}
          height={1620}
          className="h-auto w-full"
          priority
        />
      </figure>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <a
          href="/print/buklet-mockup.pdf"
          download
          className={cn(
            buttonVariants(),
            "h-11 rounded-full bg-espresso px-5 text-gold hover:bg-espresso/90"
          )}
        >
          <Download className="size-4" />
          Скачать мокап PDF
        </a>
        <a
          href="/print/buklet-a4.pdf"
          download
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 rounded-full px-5"
          )}
        >
          <Download className="size-4" />
          PDF для печати
        </a>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            download
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 justify-between rounded-full border-border bg-card px-4 text-[13px]"
            )}
          >
            <span className="truncate">{item.title}</span>
            <Download className="size-4 shrink-0" />
          </a>
        ))}
      </div>

      <div className="mt-12 space-y-14">
        {items.map((item) => (
          <section key={item.title} className="scroll-mt-24">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl">{item.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{item.format}</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {item.use}
                </p>
              </div>
              <a
                href={item.href}
                download
                className={cn(
                  buttonVariants(),
                  "h-11 rounded-full bg-espresso px-5 text-gold hover:bg-espresso/90"
                )}
              >
                <Download className="size-4" />
                Скачать PDF
              </a>
            </div>
            <div
              className={`mt-6 grid gap-4 ${
                item.pages.length > 1 ? "md:grid-cols-2" : "max-w-xl"
              }`}
            >
              {item.pages.map((page) => (
                <figure
                  key={page.src}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_40px_rgb(23_18_16_/_0.08)]"
                >
                  <Image
                    src={page.src}
                    alt={page.alt}
                    width={1200}
                    height={840}
                    className="h-auto w-full"
                  />
                </figure>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <h2 className="font-heading text-2xl">Как печатать</h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>Бумага: 170–200 г/м² матовая кремовая или тёплый белый картон.</li>
          <li>Цвет: RGB-макеты. В типографии переведут в CMYK; золото — смесь, не фольга.</li>
          <li>Буклет: три полосы по 99 мм, фальцовка гармошкой.</li>
          <li>QR ведёт на davydova-notarius.ru. На тёмной плашке он светлый — сделайте пробный оттиск.</li>
        </ul>
        <p className="mt-6 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            ← На главную
          </Link>
        </p>
      </div>
    </article>
  );
}
