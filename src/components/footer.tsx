import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-espresso pb-24 pt-16 text-gold-soft/80 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl tracking-[0.08em] text-gold">
            {site.name}
          </p>
          <p className="mt-2 text-sm tracking-[0.16em] uppercase">{site.title}</p>
          <p className="mt-4 text-sm text-gold-soft/55">
            Реестровый номер {site.registryNumber}
          </p>
        </div>
        <div className="space-y-2 text-sm leading-relaxed">
          <p>{site.addressFull}</p>
          <p>{site.building}</p>
          <p>{site.metro}</p>
          <p className="pt-2">
            <a className="text-gold hover:underline" href={site.phoneHref}>
              {site.phone}
            </a>
            <span className="px-2 text-gold-soft/40">/</span>
            <a className="text-gold hover:underline" href={site.emailHref}>
              {site.email}
            </a>
          </p>
        </div>
        <div className="space-y-3 text-sm">
          <Link
            href="/politika-konfidentsialnosti"
            className="block hover:text-gold"
          >
            Политика конфиденциальности
          </Link>
          <Link
            href="/soglasiye-na-obrabotku-personalnykh-dannykh"
            className="block hover:text-gold"
          >
            Согласие на обработку персональных данных
          </Link>
          <p className="pt-6 text-xs text-gold-soft/45">
            © {new Date().getFullYear()} Нотариус Давыдова. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
