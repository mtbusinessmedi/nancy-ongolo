import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const pains = [
  {
    t: "Tes clientes adorent tes produits… mais elles sont toujours les mêmes.",
    d: "Tes proches, tes collègues, quelques abonnées fidèles. Tu sens que ton produit vaut plus, mais tu ne sais pas comment toucher plus loin.",
  },
  {
    t: "Tu ne sais pas vraiment combien tu gagnes.",
    d: "Beurre, huiles, pots, étiquettes, livraison… Tu fixes tes prix « au feeling » et à la fin du mois, il ne reste presque rien.",
  },
  {
    t: "Tes étiquettes font « fait maison ».",
    d: "Et c'est exactement ce qui empêche les boutiques, les salons et les clientes exigeantes de te prendre au sérieux.",
  },
  {
    t: "Les normes et la formulation te font peur.",
    d: "Conservation, dosages, conformité, stabilité : tu as peur de mal faire, alors tu repousses le lancement depuis des mois.",
  },
];

export default function Problem() {
  return (
    <section className="relative bg-ivory py-24 text-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              tone="light"
              eyebrow="Est-ce que tu te reconnais ?"
              title={
                <>
                  Faire de bons produits ne suffit pas à bâtir{" "}
                  <em className="text-wine">une marque</em>.
                </>
              }
              intro="La plupart des femmes qui se lancent dans la cosmétique capillaire ont le talent. Ce qui leur manque, c'est la structure : une méthode claire pour transformer une recette qui marche en entreprise qui dure."
            />
            <Reveal delay={150}>
              <blockquote className="mt-10 border-l-2 border-gold pl-6 font-display text-[22px] leading-snug italic text-ink/85">
                « Une reine ne compte pas sur la chance. Elle construit son royaume, pierre après pierre. »
                <footer className="mt-3 font-sans text-[13px] not-italic tracking-[0.14em] text-ink/50 uppercase">
                  — Nancy Ongolo
                </footer>
              </blockquote>
            </Reveal>
          </div>

          <ol className="grid gap-5">
            {pains.map((p, i) => (
              <Reveal as="li" key={p.t} delay={i * 90}>
                <div className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 shadow-[0_20px_50px_-30px_rgba(11,9,8,0.35)] transition duration-500 hover:-translate-y-1 hover:border-gold/60 sm:p-9">
                  <span className="absolute -top-4 right-6 font-display text-[92px] leading-none text-cream transition group-hover:text-gold/25">
                    0{i + 1}
                  </span>
                  <h3 className="relative max-w-md font-display text-[23px] leading-snug">{p.t}</h3>
                  <p className="relative mt-3 max-w-lg text-[15.5px] leading-relaxed text-ink/65">{p.d}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={400}>
              <p className="rounded-3xl bg-ink p-7 text-[17px] leading-relaxed text-ivory sm:p-9">
                <strong className="text-gold-light">Bonne nouvelle :</strong> ce n&apos;est pas un problème de talent.
                C&apos;est un problème de méthode. Et une méthode, ça se transmet.
              </p>
            </Reveal>
          </ol>
        </div>
      </div>
    </section>
  );
}
