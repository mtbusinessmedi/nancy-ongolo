import { Logo } from "../Navbar";
import { navLinks, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-ivory/55">
            Entrepreneure, éditrice, consultante et business coach en cosmétique capillaire. Fondatrice de
            The Queen&apos;s Secret et de Seng&apos;a Éditions.
          </p>
          <p className="mt-5 font-display text-[16px] italic text-gold-light">
            Femme d&apos;affaires. Femme authentique. Femme LIBRE. 👑
          </p>
        </div>
        <nav aria-label="Liens du pied de page">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">Navigation</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[14.5px] text-ivory/65 transition hover:text-gold-light">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <address className="not-italic">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
          <ul className="mt-5 space-y-3 text-[14.5px] text-ivory/65">
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-light">
                WhatsApp · {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="break-all transition hover:text-gold-light">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-light">
                Instagram · {site.instagramHandle}
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div className="border-t border-hairline">
        <p className="mx-auto max-w-7xl px-5 py-6 text-[12.5px] text-ivory/40 sm:px-8">
          © {new Date().getFullYear()} Nancy Ongolo · The Queen&apos;s Secret. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
