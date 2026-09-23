"use client";

import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { useAppointment } from "@/lib/appointment-context";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileBar() {
  const { openAppointment } = useAppointment();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-espresso/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={site.phoneHref}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 rounded-full border-gold/40 bg-transparent text-gold hover:bg-gold/10 hover:text-gold"
          )}
        >
          <Phone className="size-4" />
          Позвонить
        </a>
        <Button
          onClick={() => openAppointment()}
          className="h-11 rounded-full bg-gold text-espresso hover:bg-gold-soft"
        >
          Записаться
        </Button>
      </div>
    </div>
  );
}
