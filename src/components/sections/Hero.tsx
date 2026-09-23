import Image from "next/image";
import BookButton from "../BookButton";
import Counter from "../Counter";
import { Crown } from "../Navbar";
import { WhatsappIcon } from "../BookingModal";
import { whatsappLink } from "@/lib/site";
import heroImg from "../../../public/images/nancy-hero.webp";

export default function Hero() {
  return (
    <section id="top" className="grain relative isolate overflow-hidden pt-[76px]">
      {/* Décor d'arrière-plan */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] right-[-10%] h-[70vh] w-[70vh] rounded-full bg-wine/30 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(212,174,98,0.09)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        {/* Faisceaux lumineux inspirés de la bannière */}
        <div className="absolute top-[38%] left-0 h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute top-[40%] left-[10%] h-px w-[60%] bg-gradient-to-r from-transparent via-wine-light/50 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-10 pb-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:pt-12 lg:pb-28">
        {/* Texte */}
        <div className="relative z-10 order-2 lg:order-1">
          <div className="reveal is-visible inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white/[0.03] py-2 pr-4 pl-2.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-ink">
              <Crown className="h-3.5 w-3.5" />
            </span>
            Business coach en cosmétique capillaire
          </div>

          <h1 className="mt-7 font-display text-[42px] leading-[1.04] tracking-tight sm:text-[56px] lg:text-[58px] xl:text-[62px]">
            Ta passion pour les cheveux mérite une{" "}
            <span className="text-gold-gradient italic">vraie marque</span>{" "}
            — rentable, crédible, royale.
          </h1>

          <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-ivory/70 sm:text-[18px]">
            Je t&apos;aide à passer des mélanges faits dans ta cuisine à une marque de cosmétiques
            capillaires <strong className="font-semibold text-ivory">structurée, conforme et qui vend</strong>.
            La méthode que j&apos;ai appliquée pour bâtir <em className="text-gold-light">The Queen&apos;s Secret</em>, enfin transmise étape par étape.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <BookButton>Réserver mon appel offert</BookButton>
            <a
              href={whatsappLink("Bonjour Nancy 👑, je souhaite en savoir plus sur ton accompagnement.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border border-hairline px-7 py-4 text-[14.5px] font-semibold text-ivory/85 transition hover:border-[#25D366] hover:text-[#25D366]"
            >
              <WhatsappIcon /> Écrire sur WhatsApp
            </a>
          </div>
          <p className="mt-4 text-[13px] tracking-wide text-ivory/45">
            Gratuit · 30 minutes · Sans engagement · Places limitées chaque mois
          </p>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-hairline pt-8">
            <div>
              <dt className="sr-only">Communauté</dt>
              <dd className="font-display text-[34px] leading-none text-gold-light">
                <Counter value={262} suffix="K" />
              </dd>
              <p className="mt-2 text-[11.5px] uppercase tracking-[0.14em] text-ivory/50">Personnes qui me suivent</p>
            </div>
            <div>
              <dt className="sr-only">Marques fondées</dt>
              <dd className="font-display text-[34px] leading-none text-gold-light">
                <Counter value={2} />
              </dd>
              <p className="mt-2 text-[11.5px] uppercase tracking-[0.14em] text-ivory/50">Marques fondées</p>
            </div>
            <div>
              <dt className="sr-only">Étapes de la méthode</dt>
              <dd className="font-display text-[34px] leading-none text-gold-light">
                <Counter value={4} />
              </dd>
              <p className="mt-2 text-[11.5px] uppercase tracking-[0.14em] text-ivory/50">Piliers de la méthode</p>
            </div>
          </dl>
        </div>

        {/* Visuel de la coach encadré */}
        <div className="relative order-1 mx-auto w-full max-w-[600px] lg:order-2">
          <div className="relative aspect-square w-full">
            {/* Fondu bas : le cercle et la photo se fondent dans le fond */}
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_72%,transparent_98%)]">
            {/* Anneaux animés */}
            <div aria-hidden className="absolute inset-[2%] animate-spin-slow rounded-full border border-dashed border-gold/35" />
            <div aria-hidden className="absolute inset-[7%] animate-spin-reverse rounded-full">
              <span className="absolute top-1/2 -left-1.5 h-3 w-3 -translate-y-1/2 rounded-full bg-gold shadow-[0_0_18px_4px_rgba(212,174,98,0.8)]" />
              <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-wine-light shadow-[0_0_14px_3px_rgba(179,31,59,0.8)]" />
            </div>
            <div aria-hidden className="absolute inset-[7%] rounded-full border border-gold/20" />

            {/* Cercle principal (esprit de la référence) */}
            <div
              aria-hidden
              className="absolute inset-x-[12%] top-[20%] bottom-[4%] rounded-full bg-[radial-gradient(circle_at_30%_25%,#c42443_0%,#7d1428_45%,#3a0913_100%)] shadow-[0_0_0_6px_rgba(212,174,98,0.15),0_0_0_1px_rgba(241,215,154,0.6)_inset,0_40px_120px_-20px_rgba(179,31,59,0.6)]"
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_80%,rgba(212,174,98,0.35),transparent_55%)]" />
              <div className="absolute inset-[6%] rounded-full border border-gold/25" />
            </div>

            {/* Photo détourée */}
            <div className="absolute inset-x-0 bottom-0 animate-float">
              <Image
                src={heroImg}
                alt="Nancy Ongolo, business coach en cosmétique capillaire"
                priority
                quality={90}
                sizes="(max-width: 1024px) 92vw, 600px"
                className="relative w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
              />
            </div>
            </div>

            {/* Badges flottants */}
            <div className="absolute bottom-[8%] left-0 animate-float-delayed rounded-2xl border border-hairline bg-ink-2/80 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl sm:top-[24%] sm:bottom-auto sm:left-[-4%] sm:px-4 sm:py-3">
              <p className="text-[10.5px] uppercase tracking-[0.18em] text-ivory/50">Fondatrice</p>
              <p className="mt-0.5 font-display text-[16px] text-gold-light">The Queen&apos;s Secret</p>
            </div>
            <div className="absolute right-0 bottom-[26%] hidden animate-float rounded-2xl sm:block border border-hairline bg-ink-2/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:right-[-3%]">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/15 text-gold">
                  <Crown className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-[18px] leading-none text-ivory">262K+</p>
                  <p className="mt-1 text-[10.5px] uppercase tracking-[0.16em] text-ivory/50">Communauté</p>
                </div>
              </div>
            </div>
            <div className="absolute top-[6%] right-[8%] hidden animate-float rounded-full border border-hairline bg-ink-2/80 px-4 py-2 text-[12px] font-semibold text-ivory/80 backdrop-blur-xl sm:block">
              ✦ Éditrice · Seng&apos;a Éditions
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
