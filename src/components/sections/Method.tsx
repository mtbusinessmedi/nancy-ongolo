import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const pillars = [
  {
    n: "I",
    t: "La Fondation",
    s: "Clarifier ta vision",
    points: [
      "Définir ta cliente idéale et son problème capillaire",
      "Positionner ta marque face à la concurrence",
      "Fixer tes objectifs de chiffre d'affaires réalistes",
    ],
  },
  {
    n: "II",
    t: "Le Produit",
    s: "Formuler avec sérieux",
    points: [
      "Choisir les bons actifs selon les types de cheveux",
      "Stabilité, conservation et bonnes pratiques de fabrication",
      "Construire une gamme cohérente au lieu d'empiler les produits",
    ],
  },
  {
    n: "III",
    t: "La Couronne",
    s: "Créer une image premium",
    points: [
      "Nom, logo et univers de marque qui inspirent confiance",
      "Packaging et étiquetage professionnels et conformes",
      "Calcul de tes prix de revient et de tes marges",
    ],
  },
  {
    n: "IV",
    t: "Le Royaume",
    s: "Vendre et grandir",
    points: [
      "Stratégie de lancement et contenus qui vendent sur les réseaux",
      "Revendeuses, salons de coiffure, boutiques : ta distribution",
      "Organisation, trésorerie et passage à l'échelle",
    ],
  },
];

export default function Method() {
  return (
    <section id="methode" className="relative overflow-hidden bg-ink-2 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          center
          eyebrow="La méthode Queen's Secret"
          title={
            <>
              4 piliers pour passer de la recette{" "}
              <span className="text-gold-gradient italic">au royaume</span>
            </>
          }
          intro="Un chemin clair, dans le bon ordre. Parce que lancer un packaging avant d'avoir validé ta formule, ou faire de la publicité avant de connaître tes marges, c'est perdre de l'argent."
        />

        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div aria-hidden className="absolute top-[52px] right-[12%] left-[12%] hidden h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 lg:block" />
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 120} as="article">
              <div className="group relative h-full rounded-[28px] border border-hairline bg-ink p-7 transition duration-500 hover:-translate-y-2 hover:border-gold/60 hover:shadow-[0_30px_80px_-30px_rgba(212,174,98,0.35)]">
                <div className="relative grid h-[58px] w-[58px] place-items-center rounded-full border border-gold/50 bg-ink-2 font-display text-[20px] text-gold transition duration-500 group-hover:bg-gold group-hover:text-ink">
                  {p.n}
                </div>
                <p className="mt-7 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-wine-light">{p.s}</p>
                <h3 className="mt-2 font-display text-[26px]">{p.t}</h3>
                <ul className="mt-5 space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[14.5px] leading-relaxed text-ivory/65">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
