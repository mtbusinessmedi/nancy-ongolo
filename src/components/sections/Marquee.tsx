const items = [
  "Formulation",
  "Choix des actifs",
  "Packaging",
  "Identité de marque",
  "Normes & conformité",
  "Prix & marges",
  "Vente sur les réseaux",
  "Distribution",
  "Stratégie de lancement",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-hairline bg-[linear-gradient(90deg,#3a0913,#7d1428_50%,#3a0913)] py-5" aria-label="Domaines d'accompagnement">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-[22px] italic text-ivory/90">
            {t}
            <span className="text-[14px] not-italic text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
