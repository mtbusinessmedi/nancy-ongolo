import Reveal from "../Reveal";
import BookButton from "../BookButton";
import { Crown } from "../Navbar";
import { WhatsappIcon } from "../BookingModal";
import { whatsappLink } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[radial-gradient(circle_at_20%_20%,#b31f3b,#7d1428_40%,#2a0a12_100%)] px-7 py-16 text-center shadow-[0_50px_120px_-40px_rgba(179,31,59,0.7)] sm:px-16 sm:py-24">
        <div aria-hidden className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 animate-spin-slow rounded-full border border-dashed border-gold/30" />
        <div aria-hidden className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div aria-hidden className="absolute inset-4 rounded-[30px] border border-gold/20" />

        <Crown className="relative mx-auto h-10 w-10 text-gold-light" />
        <h2 className="relative mx-auto mt-6 max-w-3xl font-display text-[38px] leading-[1.08] sm:text-[56px]">
          Ta couronne t&apos;attend. <span className="italic text-gold-light">Il est temps de la porter.</span>
        </h2>
        <p className="relative mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-ivory/80">
          Dans 6 mois, tu peux encore te demander « et si… ». Ou tu peux avoir une marque qui te ressemble,
          des clientes fidèles et un business qui tourne. Tout commence par 30 minutes.
        </p>
        <div className="relative mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BookButton>Réserver mon appel offert</BookButton>
          <a
            href={whatsappLink("Bonjour Nancy 👑, j'aimerais échanger sur mon projet de marque capillaire.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-ivory/30 px-7 py-4 text-[14.5px] font-semibold transition hover:border-ivory hover:bg-ivory/10"
          >
            <WhatsappIcon /> WhatsApp direct
          </a>
        </div>
        <p className="relative mt-6 text-[13px] tracking-wide text-ivory/55">
          Places limitées chaque mois pour garantir un suivi de qualité.
        </p>
      </Reveal>
    </section>
  );
}
