"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/site";
import { useBooking } from "./BookingProvider";

export function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="Nancy Ongolo — accueil">
      <Crown className="h-5 w-5 text-gold transition-transform duration-500 group-hover:-rotate-12" />
      <span className="font-display text-[21px] leading-none tracking-wide">
        Nancy <span className="italic text-gold">Ongolo</span>
      </span>
    </a>
  );
}

export function Crown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 7.5 7.5 11 12 4l4.5 7L21 7.5 19 18H5L3 7.5Zm2 12h14v1.5H5V19.5Z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const { open } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || menu ? "border-b border-hairline bg-ink/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Navigation principale">
        <Logo />
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-[14px] text-ivory/70 transition hover:text-ivory after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => open()}
            className="hidden cursor-pointer rounded-full border border-gold/60 px-5 py-2.5 text-[13.5px] font-semibold text-gold-light transition hover:bg-gold hover:text-ink sm:inline-flex"
          >
            Réserver un appel
          </button>
          <button
            type="button"
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-hairline lg:hidden"
            aria-label={menu ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menu}
            onClick={() => setMenu((m) => !m)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-ivory transition-all ${menu ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-5 bg-ivory transition-all ${menu ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </nav>

      <div className={`overflow-hidden transition-[max-height] duration-500 lg:hidden ${menu ? "max-h-[420px]" : "max-h-0"}`}>
        <ul className="flex flex-col gap-1 px-5 pb-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a onClick={() => setMenu(false)} href={l.href} className="block border-b border-hairline py-3.5 font-display text-xl">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <button
              type="button"
              onClick={() => {
                setMenu(false);
                open();
              }}
              className="w-full cursor-pointer rounded-full bg-gold py-4 text-[15px] font-bold text-ink"
            >
              Réserver mon appel offert
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
