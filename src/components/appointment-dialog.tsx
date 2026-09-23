"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { serviceCategories, site } from "@/lib/site";
import { useAppointment } from "@/lib/appointment-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const times = [
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];

export function AppointmentDialog() {
  const { open, setOpen, service, setService } = useAppointment();
  const [agree, setAgree] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!agree) {
      toast.error("Нужно согласие на обработку персональных данных");
      return;
    }

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setPending(true);

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, service, agree }),
      });

      if (!response.ok) {
        throw new Error("fail");
      }

      toast.success("Заявка отправлена. Мы перезвоним для подтверждения.");
      form.reset();
      setAgree(false);
      setOpen(false);
    } catch {
      toast.error("Не удалось отправить заявку. Позвоните нам, пожалуйста.");
    } finally {
      setPending(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="top-[max(0.75rem,env(safe-area-inset-top))] left-1/2 max-h-[calc(100dvh-1.5rem-env(safe-area-inset-bottom))] w-[calc(100%-1.25rem)] max-w-none translate-x-[-50%] translate-y-0 overflow-y-auto rounded-2xl p-5 sm:top-1/2 sm:max-h-[90vh] sm:max-w-lg sm:-translate-y-1/2">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">
            Запишитесь на приём
          </DialogTitle>
          <DialogDescription>
            Укажите удобное время — подтвердим запись по телефону. Срочно? Звоните{"\u00a0"}
            <a href={site.phoneHref} className="text-foreground underline">
              {site.phone}
            </a>
            .
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="День *" htmlFor="date">
              <Input
                id="date"
                name="date"
                type="date"
                required
                lang="ru"
                className="h-12 text-base sm:h-10 sm:text-sm"
              />
            </Field>
            <Field label="Удобное время *" htmlFor="time">
              <select
                id="time"
                name="time"
                required
                className="h-12 w-full rounded-lg border border-input bg-transparent px-2.5 text-base sm:h-10 sm:text-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Выберите время
                </option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label="ФИО *" htmlFor="fio">
            <Input id="fio" name="fio" required className="h-12 text-base sm:h-10 sm:text-sm" />
          </Field>
          <Field label="Телефон *" htmlFor="phone">
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+7"
              className="h-12 text-base sm:h-10 sm:text-sm"
            />
          </Field>
          <Field label="E-mail *" htmlFor="email">
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="h-12 text-base sm:h-10 sm:text-sm"
            />
          </Field>
          <Field label="Услуга *" htmlFor="service">
            <select
              id="service"
              name="service"
              required
              value={service}
              onChange={(event) => setService(event.target.value)}
              className="h-12 w-full rounded-lg border border-input bg-transparent px-2.5 text-base sm:h-10 sm:text-sm"
            >
              {serviceCategories.map((item) => (
                <option key={item.id} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </Field>
          <label className="flex items-start gap-3 pt-1 text-sm leading-snug text-muted-foreground">
            <Checkbox
              checked={agree}
              onCheckedChange={(value) => setAgree(Boolean(value))}
              className="mt-0.5"
            />
            <span>
              Я ознакомлен и даю согласие на обработку{" "}
              <Link
                href="/soglasiye-na-obrabotku-personalnykh-dannykh"
                className="text-foreground underline underline-offset-2"
                target="_blank"
              >
                персональных данных
              </Link>
              .
            </span>
          </label>
          <Button
            type="submit"
            disabled={pending}
            className="mt-2 h-12 rounded-full bg-espresso text-gold hover:bg-espresso/90"
          >
            {pending ? "Отправляем…" : "Отправить заявку"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
