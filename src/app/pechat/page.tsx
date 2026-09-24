import type { Metadata } from "next";
import { PrintKit } from "@/components/print-kit";

export const metadata: Metadata = {
  title: "Макеты листовок и буклета",
  description:
    "Рекламные макеты нотариуса Давыдовой Евгении Петровны: листовки A5, афиша A4 и буклет-раскладушка. Скачать PDF для печати.",
};

export default function PrintPage() {
  return <PrintKit />;
}
