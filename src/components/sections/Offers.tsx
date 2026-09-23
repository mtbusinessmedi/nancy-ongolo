import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import BookButton from "../BookButton";
import { bookingOffers as offerLabels } from "@/lib/site";

const offers = [
  {
    name: "Appel stratégique",
    tag: "Offert",
    desc: "30 minutes pour faire le point sur ton projet et repartir avec une vision claire de tes prochaines étapes.",
    features: [
      "Diagnostic de ta situation actuelle",
      "Identification de tes 3 blocages principaux",
      "Recommandation de l'accompagnement adapté",
    ],
    cta: "Réserver mon appel",
    offer: offerLabels[0],
    featured: false,
  },
  {
    name: "Queen Business",
    tag: "Accompagnement premium",
    desc: "L'accompagnement complet sur les 4 piliers de la méthode, pour lancer ou relancer ta marque avec des bases solides.",
    features: [
      "Séances individuelles régulières avec Nancy",
      "Travail sur ta formulation, ta gamme et tes prix",
      "Identité de marque, packaging et étiquetage",
      "Plan de lancement et stratégie de vente",
      "Suivi WhatsApp entre les séances",
      "Modèles et outils prêts à l'emploi",
    ],
    cta: "Je veux cet accompagnement",
    offer: offerLabels[2],
    featured: true,
  },
  {
    name: "Queen Starter",
    tag: "Coaching individuel",
    desc: "Des séances ciblées pour débloquer un point précis de ton business : prix, gamme, image ou ventes.",
    features: [
      "Séances à la carte, sur ton sujet prioritaire",
      "Plan d'action concret après chaque séance",
      "Idéal si ta marque existe déjà",
    ],
    cta: "Réserver une séance",
    offer: offerLabels[1],
    featured: false,
  },
];

export default function Offers() {
  return (
    <section id="offres" className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
      <div aria-hidden className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wine/20 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          center
          eyebrow="Accompagnements"
          title={
            <>
              Choisis la façon de <span className="text-gold-gradient italic">régner</span>
            </>
          }
          intro="Chaque parcours commence par un appel stratégique offert. Nancy t'oriente ensuite vers la formule la plus adaptée à ton projet et à ton budget."
        />

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.name} delay={i * 120} className={o.featured ? "lg:order-2 lg:-my-4" : i === 0 ? "lg:order-1" : "lg:order-3"}>
              <div
                className={`relative flex h-full flex-col rounded-[30px] p-8 sm:p-10 ${
                  o.featured
                    ? "bg-[linear-gradient(160deg,#2a0a12,#14100e_60%)] shadow-[0_0_0_1px_rgba(212,174,98,0.7),0_40px_100px_-30px_rgba(212,174,98,0.45)]"
                    : "border border-hairline bg-ink"
                }`}
              >
                {o.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] whitespace-nowrap text-ink">
                    👑 Le plus choisi
                  </span>
                )}
                <p className={`text-[11.5px] font-semibold uppercase tracking-[0.2em] ${o.featured ? "text-gold" : "text-ivory/50"}`}>
                  {o.tag}
                </p>
                <h3 className="mt-3 font-display text-[32px]">{o.name}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ivory/65">{o.desc}</p>
                <div className="my-7 h-px bg-hairline" />
                <ul className="mb-9 flex-1 space-y-3.5">
                  {o.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[14.5px] leading-relaxed text-ivory/80">
                      <span className="mt-[3px] text-gold">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <BookButton offer={o.offer} variant={o.featured ? "gold" : "outline"} className="w-full">
                  {o.cta}
                </BookButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
