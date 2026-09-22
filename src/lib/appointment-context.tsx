"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type AppointmentContextValue = {
  open: boolean;
  service: string;
  openAppointment: (service?: string) => void;
  closeAppointment: () => void;
  setOpen: (open: boolean) => void;
  setService: (service: string) => void;
};

const AppointmentContext = createContext<AppointmentContextValue | null>(null);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("Доверенности");

  const openAppointment = useCallback((nextService?: string) => {
    if (nextService) setService(nextService);
    setOpen(true);
  }, []);

  const closeAppointment = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({
      open,
      service,
      openAppointment,
      closeAppointment,
      setOpen,
      setService,
    }),
    [open, service, openAppointment, closeAppointment]
  );

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const ctx = useContext(AppointmentContext);
  if (!ctx) {
    throw new Error("useAppointment must be used within AppointmentProvider");
  }
  return ctx;
}
