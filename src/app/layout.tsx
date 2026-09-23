import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Providers } from "@/components/providers";
import { site } from "@/lib/site";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#171210",
};

const heading = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const sans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davydova-notarius.ru"),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Нотариус города Москвы. БЦ «Монарх», Ленинградский проспект, 31А. Доверенности, сделки с недвижимостью, доли ООО, наследство. Запись онлайн и по телефону +7 (495) 690-96-00.",
  keywords: [
    "нотариус",
    "нотариус Москвы",
    "нотариус Давыдова",
    "нотариус Динамо",
    "нотариус Ленинградский проспект",
    "нотариальные услуги",
  ],
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description:
      "Современная нотариальная контора в БЦ «Монарх» у метро Динамо. Запись на приём онлайн.",
    locale: "ru_RU",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${heading.variable} ${sans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
