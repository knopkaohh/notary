import { NextRequest, NextResponse } from "next/server";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const fio = String(body.fio ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim();
    const date = String(body.date ?? "").trim();
    const time = String(body.time ?? "").trim();
    const service = String(body.service ?? "").trim();
    const agree = Boolean(body.agree);

    if (!fio || !phone || !email || !date || !time || !service || !agree) {
      return NextResponse.json(
        { ok: false, error: "Заполните все обязательные поля" },
        { status: 400 }
      );
    }

    if (!emailRe.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Некорректный e-mail" },
        { status: 400 }
      );
    }

    console.info("[appointment]", { fio, phone, email, date, time, service });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
