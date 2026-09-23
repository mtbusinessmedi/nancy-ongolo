import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

// Exemples de témoignages : à remplacer par les retours réels des clientes de Nancy.
const items = [
  {
    q: "Je vendais mes huiles à mes collègues depuis deux ans sans jamais calculer mes marges. Avec Nancy, j'ai revu mes prix, mon étiquette et ma gamme. Aujourd'hui, deux salons de coiffure revendent mes produits.",
    n: "Carine M.",
    r: "Fondatrice d'une marque d'huiles capillaires · Douala",
  },
  {
    q: "J'avais peur de me lancer à cause de la formulation et des normes. Nancy m'a donné un cadre clair et rassurant. J'ai enfin lancé ma marque, avec un packaging dont je suis fière.",
    n: "Aïcha B.",
    r: "Créatrice de soins pour cheveux crépus · Yaoundé",
  },
  {
    q: "Ce qui change tout, c'est qu'elle est passée par là. Elle ne parle pas de théorie : elle sait exactement ce qui marche et ce qui fait perdre de l'argent.",
    n: "Estelle N.",
    r: "Gérante d'une boutique de cosmétiques · Libreville",
  },
];

export default function Testimonials() {
  return (
    <section id="temoignages" className="relative bg-ivory py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="light"
          center
          eyebrow="Elles ont osé"
          title={
            <>
              Des reines qui ont bâti <em className="text-wine">leur royaume</em>
            </>
          }
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.n} delay={i * 120} as="article">
              <figure className="flex h-full flex-col rounded-[28px] border border-ink/10 bg-white p-8 shadow-[0_25px_60px_-35px_rgba(11,9,8,0.4)] transition duration-500 hover:-translate-y-1.5">
                <div className="flex gap-1 text-gold" aria-label="5 étoiles sur 5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <svg key={k} width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 font-display text-[19px] leading-relaxed text-ink/85 italic">
                  « {t.q} »
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-[linear-gradient(135deg,#7d1428,#b31f3b)] font-display text-[18px] text-ivory">
                    {t.n[0]}
                  </span>
                  <span>
                    <span className="block font-semibold">{t.n}</span>
                    <span className="block text-[13px] text-ink/55">{t.r}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
