"use client";

import { useEffect, useState } from "react";
import { useBooking } from "./BookingProvider";
import { WhatsappIcon } from "./BookingModal";
import { whatsappLink } from "@/lib/site";

export default function FloatingCta() {
  const [show, setShow] = useState(false);
  const { open } = useBooking();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Bouton WhatsApp flottant (desktop) */}
      <a
        href={whatsappLink("Bonjour Nancy 👑")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Écrire à Nancy sur WhatsApp"
        className={`fixed right-6 bottom-6 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.7)] transition-all duration-500 hover:scale-110 sm:grid ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full border-2 border-[#25D366]" />
        <WhatsappIcon className="h-7 w-7" />
      </a>

      {/* Barre d'action (mobile) */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-ink/90 p-3 backdrop-blur-xl transition-transform duration-500 sm:hidden ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => open()}
            className="flex-1 cursor-pointer rounded-full bg-gold py-3.5 text-[14px] font-bold text-ink"
          >
            Réserver mon appel offert
          </button>
          <a
            href={whatsappLink("Bonjour Nancy 👑")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="grid w-[52px] place-items-center rounded-full bg-[#25D366] text-white"
          >
            <WhatsappIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </>
  );
}
