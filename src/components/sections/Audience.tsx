import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const yes = [
  "Tu fabriques déjà des produits capillaires (ou tu en rêves) et tu veux en faire une vraie marque",
  "Tu es prête à investir du temps et un minimum d'argent dans ton projet",
  "Tu veux des résultats concrets : des ventes, des marges, une image professionnelle",
  "Tu acceptes d'être challengée et de passer à l'action entre les séances",
];

const no = [
  "Tu cherches une formule magique pour devenir riche en un mois",
  "Tu veux juste « des recettes » sans construire d'entreprise",
  "Tu n'es pas prête à te remettre en question",
];

export default function Audience() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          center
          eyebrow="Pour qui ?"
          title={
            <>
              Cet accompagnement est fait pour toi <em className="text-gold-gradient">si…</em>
            </>
          }
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <div className="h-full rounded-[28px] border border-gold/40 bg-[linear-gradient(150deg,rgba(212,174,98,0.12),rgba(212,174,98,0.02))] p-8 sm:p-10">
              <p className="font-display text-[24px] text-gold-light">C&apos;est pour toi</p>
              <ul className="mt-7 space-y-5">
                {yes.map((t) => (
                  <li key={t} className="flex gap-4 text-[16px] leading-relaxed text-ivory/85">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold text-ink">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="h-full rounded-[28px] border border-hairline bg-white/[0.02] p-8 sm:p-10">
              <p className="font-display text-[24px] text-ivory/80">Ce n&apos;est pas pour toi si…</p>
              <ul className="mt-7 space-y-5">
                {no.map((t) => (
                  <li key={t} className="flex gap-4 text-[16px] leading-relaxed text-ivory/55">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-wine-light/60 text-wine-light">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
