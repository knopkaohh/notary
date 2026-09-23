"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { useAppointment } from "@/lib/appointment-context";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const { openAppointment } = useAppointment();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 pt-[env(safe-area-inset-top)] transition-all duration-500 ${
        solid
          ? "bg-espresso/92 text-gold-soft shadow-[0_12px_40px_rgb(23_18_16_/_0.28)] backdrop-blur-md"
          : "bg-espresso/80 text-gold-soft backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 md:h-[76px]">
        <Link href="/" className="min-w-0 leading-tight">
          <span className="block font-heading text-[15px] tracking-[0.16em] text-gold uppercase sm:text-base">
            Давыдова Е. П.
          </span>
          <span className="block truncate text-[11px] tracking-[0.18em] text-gold-soft/70 uppercase">
            Нотариус Москвы
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[12px] tracking-[0.18em] text-gold-soft/80 uppercase transition-colors hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 pr-1 text-sm text-gold md:flex"
          >
            <Phone className="size-4" />
            <span className="tracking-wide">{site.phone}</span>
          </a>
          <Button
            onClick={() => openAppointment()}
            className="hidden h-10 rounded-full bg-gold px-4 text-[12px] tracking-[0.14em] text-espresso uppercase hover:bg-gold-soft md:inline-flex"
          >
            Записаться
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gold hover:bg-white/5 lg:hidden"
                />
              }
            >
              <Menu />
              <span className="sr-only">Открыть меню</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-gold/20 bg-espresso pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] text-gold-soft"
            >
              <SheetHeader>
                <SheetTitle className="font-heading tracking-[0.16em] text-gold uppercase">
                  Меню
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-5 px-4 pb-8">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-heading text-2xl text-gold-soft"
                  >
                    {item.label}
                  </Link>
                ))}
                <a href={site.phoneHref} className="pt-4 text-gold">
                  {site.phone}
                </a>
                <Button
                  onClick={() => {
                    setOpen(false);
                    openAppointment();
                  }}
                  className="h-11 rounded-full bg-gold text-espresso hover:bg-gold-soft"
                >
                  Онлайн-запись
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
