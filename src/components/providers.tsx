"use client";

import { ThemeProvider } from "next-themes";
import { AppointmentProvider } from "@/lib/appointment-context";
import { Toaster } from "@/components/ui/sonner";
import { LoadingScreen } from "@/components/loading-screen";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppointmentDialog } from "@/components/appointment-dialog";
import { MobileBar } from "@/components/mobile-bar";
import { RevealObserver } from "@/components/reveal-observer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      enableSystem={false}
    >
      <AppointmentProvider>
        <LoadingScreen />
        <RevealObserver />
        <Header />
        {children}
        <Footer />
        <MobileBar />
        <AppointmentDialog />
        <Toaster position="top-center" />
      </AppointmentProvider>
    </ThemeProvider>
  );
}
