"use client";

import { createContext, useCallback, useContext, useState } from "react";
import BookingModal from "./BookingModal";

type BookingContextValue = {
  open: (offer?: string) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking doit être utilisé dans <BookingProvider>");
  return ctx;
}

export default function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [offer, setOffer] = useState<string | undefined>();

  const open = useCallback((selected?: string) => {
    setOffer(selected);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      <BookingModal isOpen={isOpen} offer={offer} onClose={close} />
    </BookingContext.Provider>
  );
}
