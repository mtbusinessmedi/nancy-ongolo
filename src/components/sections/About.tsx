import Image from "next/image";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";
import BookButton from "../BookButton";
import portrait from "../../../public/images/nancy-portrait.jpg";

const roles = [
  { k: "Entrepreneure", v: "Fondatrice de The Queen's Secret, marque de soins capillaires" },
  { k: "Éditrice", v: "Fondatrice de Seng'a Éditions" },
  { k: "Consultante", v: "Stratégie et structuration de marques beauté" },
  { k: "Business coach", v: "Spécialisée en cosmétique capillaire" },
];

export default function About() {
  return (
    <section id="apropos" className="grain relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute top-1/3 -left-40 h-[500px] w-[500px] rounded-full bg-wine/25 blur-[140px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <Reveal className="relative mx-auto w-full max-w-[460px]">
          <div className="absolute -inset-4 rounded-[40px] border border-gold/25" aria-hidden />
          <div className="absolute -inset-4 translate-x-6 translate-y-6 rounded-[40px] bg-wine/40" aria-hidden />
          <div className="relative overflow-hidden rounded-[32px]">
            <Image
              src={portrait}
              alt="Portrait de Nancy Ongolo"
              sizes="(max-width: 1024px) 90vw, 460px"
              className="aspect-[4/5] w-full object-cover transition duration-[1.5s] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="font-display text-[30px] leading-tight italic">
                Nancy <span className="text-gold-gradient">Ongolo</span>
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.22em] text-gold-light">The Queen</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Qui suis-je ?"
            title={
              <>
                Femme d&apos;affaires. Femme authentique.{" "}
                <span className="text-gold-gradient italic">Femme libre.</span>
              </>
            }
          />
          <Reveal delay={100}>
            <div className="mt-7 space-y-5 text-[16.5px] leading-relaxed text-ivory/70">
              <p>
                Je m&apos;appelle <strong className="text-ivory">Nancy Ongolo</strong>. Avant de coacher, j&apos;ai fait ce
                que tu t&apos;apprêtes à faire : j&apos;ai créé ma propre marque de cosmétiques capillaires,{" "}
                <strong className="text-gold-light">The Queen&apos;s Secret</strong>, et je l&apos;ai construite de mes
                mains, produit après produit, cliente après cliente.
              </p>
              <p>
                J&apos;ai connu les formules ratées, les pots qui ne se vendent pas, les prix mal calculés et les nuits
                à tout remettre en question. C&apos;est justement ce chemin qui me permet aujourd&apos;hui de t&apos;éviter
                les erreurs qui coûtent cher.
              </p>
              <p>
                Aujourd&apos;hui, plus de <strong className="text-ivory">262 000 personnes</strong> me suivent, et
                j&apos;accompagne les femmes qui veulent faire de leur passion pour le cheveu une{" "}
                <strong className="text-ivory">vraie entreprise</strong>, avec une vision, une image et des chiffres
                solides.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {roles.map((r) => (
                <li key={r.k} className="rounded-2xl border border-hairline bg-white/[0.025] p-5 transition hover:border-gold/50 hover:bg-gold/[0.04]">
                  <p className="font-display text-[19px] text-gold-light">{r.k}</p>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-ivory/55">{r.v}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300} className="mt-10">
            <BookButton>Parler de mon projet avec Nancy</BookButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
