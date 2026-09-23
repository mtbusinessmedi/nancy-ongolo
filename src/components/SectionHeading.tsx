import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  center?: boolean;
  tone?: "dark" | "light";
};

export default function SectionHeading({ eyebrow, title, intro, center, tone = "dark" }: Props) {
  const muted = tone === "dark" ? "text-ivory/65" : "text-ink/65";
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.26em] ${
          tone === "dark" ? "text-gold" : "text-gold-deep"
        }`}
      >
        <span className="h-px w-8 bg-current" />
        {eyebrow}
        {center && <span className="h-px w-8 bg-current" />}
      </p>
      <h2 className="mt-5 font-display text-[36px] leading-[1.08] tracking-tight sm:text-[48px]">{title}</h2>
      {intro && <p className={`mt-5 text-[17px] leading-relaxed ${muted}`}>{intro}</p>}
    </Reveal>
  );
}
