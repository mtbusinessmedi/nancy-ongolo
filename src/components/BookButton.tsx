"use client";

import { useBooking } from "./BookingProvider";

type Props = {
  children: React.ReactNode;
  offer?: string;
  variant?: "gold" | "outline" | "dark";
  className?: string;
};

const variants = {
  gold: "bg-[linear-gradient(110deg,#9c7a36,#f1d79a_45%,#d4ae62_60%,#9c7a36)] bg-[length:200%_100%] text-ink shadow-[0_10px_40px_-10px_rgba(212,174,98,0.65)] hover:bg-[position:100%_0] hover:shadow-[0_14px_50px_-8px_rgba(212,174,98,0.8)]",
  outline:
    "border border-gold/50 text-gold-light hover:border-gold hover:bg-gold/10",
  dark: "bg-ink text-ivory hover:bg-ink-3",
};

export default function BookButton({ children, offer, variant = "gold", className = "" }: Props) {
  const { open } = useBooking();
  return (
    <button
      type="button"
      onClick={() => open(offer)}
      className={`group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-4 text-center text-[14.5px] font-bold tracking-wide transition-all duration-500 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      <svg
        aria-hidden
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M5 12h14m-5-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
