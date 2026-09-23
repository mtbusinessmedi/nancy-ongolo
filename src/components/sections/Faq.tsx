import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

export const faqs = [
  {
    q: "Je n'ai encore jamais fabriqué de produit. Est-ce que c'est pour moi ?",
    a: "Oui, si tu es vraiment décidée à te lancer. Nous commençons alors par le pilier « Fondation » : clarifier ta cible, ton positionnement et ton premier produit, avant d'investir le moindre franc dans le packaging.",
  },
  {
    q: "L'appel stratégique est-il vraiment gratuit ?",
    a: "Oui. C'est un échange de 30 minutes pour comprendre ton projet et voir si nous pouvons travailler ensemble. Si ce n'est pas le cas, tu repars quand même avec des conseils concrets.",
  },
  {
    q: "Comment se déroulent les séances ?",
    a: "Les séances se font en visio ou sur WhatsApp, selon ce qui te convient. Tu peux donc être accompagnée où que tu sois : Cameroun, Afrique centrale et de l'Ouest, Europe ou ailleurs.",
  },
  {
    q: "Combien coûte l'accompagnement ?",
    a: "Le tarif dépend de la formule et de l'avancement de ton projet. Nancy te présente les options adaptées à ton budget lors de l'appel stratégique, sans pression.",
  },
  {
    q: "Vais-je apprendre à formuler mes propres produits ?",
    a: "Tu apprendras à construire une gamme cohérente, à choisir tes actifs et à respecter les bonnes pratiques de fabrication et de conservation. L'objectif est que tu gardes la maîtrise de ta marque.",
  },
  {
    q: "Que se passe-t-il après avoir rempli le formulaire ?",
    a: "Ta demande s'ouvre directement dans WhatsApp, déjà rédigée. Tu l'envoies, et Nancy (ou son équipe) te recontacte sous 24 à 48 h pour fixer le créneau de ton appel.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title={
            <>
              Tu te poses <span className="text-gold-gradient italic">encore</span> des questions ?
            </>
          }
          intro="Voici les réponses aux questions que l'on me pose le plus souvent. Pour tout le reste, l'appel stratégique est là pour ça."
        />
        <Reveal delay={100}>
          <div>
            {faqs.map((f) => (
              <details key={f.q} className="faq-item group border-b border-hairline first:border-t">
                <summary className="flex items-center justify-between gap-6 py-6 font-display text-[19px] leading-snug transition group-hover:text-gold-light sm:text-[21px]">
                  {f.q}
                  <span className="faq-icon grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/40 text-gold transition-transform duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <p className="pr-12 pb-7 text-[15.5px] leading-relaxed text-ivory/65">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
