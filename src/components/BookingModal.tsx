"use client";

import { useEffect, useRef, useState } from "react";
import { bookingOffers as offers, site, whatsappLink } from "@/lib/site";

type Props = {
  isOpen: boolean;
  offer?: string;
  onClose: () => void;
};

const situations = [
  "Je n'ai pas encore lancé, j'ai juste l'idée",
  "Je fabrique déjà mes produits, mais sans marque structurée",
  "Ma marque existe, mais les ventes ne décollent pas",
  "Mon activité tourne, je veux passer un cap (distribution, équipe…)",
];

const products = [
  "Huiles & sérums capillaires",
  "Beurres, crèmes & laits hydratants",
  "Shampoings & après-shampoings",
  "Masques & soins profonds",
  "Gamme complète / plusieurs produits",
  "Pas encore défini",
];

const budgets = [
  "Moins de 100 000 FCFA",
  "100 000 – 300 000 FCFA",
  "300 000 – 700 000 FCFA",
  "700 000 – 1 500 000 FCFA",
  "Plus de 1 500 000 FCFA",
];

const labelCls =
  "mb-2 block text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ivory/55";

export default function BookingModal({ isOpen, offer, onClose }: Props) {
  const [sent, setSent] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Verrouille le scroll, gère Échap et le focus
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstFieldRef.current?.focus(), 250);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        setTimeout(() => setSent(null), 500);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [isOpen, onClose]);

  // Ferme puis réinitialise l'état « envoyé » une fois l'animation terminée
  const close = () => {
    onClose();
    setTimeout(() => setSent(null), 500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();

    const lines = [
      "👑 *Nouvelle demande d'appel stratégique*",
      "",
      `*Nom :* ${get("nom")}`,
      `*WhatsApp :* ${get("tel")}`,
      get("pays") ? `*Pays / ville :* ${get("pays")}` : null,
      "",
      `*Accompagnement souhaité :* ${get("offre")}`,
      `*Situation actuelle :* ${get("situation")}`,
      `*Produits :* ${get("produits")}`,
      get("marque") ? `*Nom de la marque :* ${get("marque")}` : null,
      get("budget") ? `*Budget pour démarrer / investir :* ${get("budget")}` : null,
      `*Disponibilité pour l'appel :* ${get("dispo")}`,
      "",
      get("message") ? `*Mon objectif :* ${get("message")}` : null,
      "",
      "Envoyé depuis le site de Nancy Ongolo.",
    ];

    const text = lines
      .filter((l): l is string => typeof l === "string")
      .join("\n")
      .replace(/\n{3,}/g, "\n\n");
    const url = whatsappLink(text);
    setSent(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      {/* Fond */}
      <div
        onClick={close}
        className={`absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className={`relative flex max-h-[94dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[28px] border border-hairline bg-ink-2 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] sm:rounded-[28px] ${
          isOpen ? "translate-y-0 opacity-100 sm:scale-100" : "translate-y-10 opacity-0 sm:scale-95"
        }`}
      >
        {/* En-tête */}
        <div className="relative overflow-hidden border-b border-hairline px-6 pt-7 pb-6 sm:px-9">
          <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-wine/40 blur-3xl" />
          <div className="absolute -top-20 left-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl" />
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute top-5 right-5 z-10 grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-hairline text-ivory/70 transition hover:border-gold hover:text-gold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <p className="relative text-[11.5px] font-semibold uppercase tracking-[0.24em] text-gold">
            👑 Appel stratégique · Gratuit · 30 min
          </p>
          <h2 id="booking-title" className="relative mt-3 pr-10 font-display text-[28px] leading-tight sm:text-[34px]">
            Réserve ton appel avec <em className="text-gold-gradient not-italic">Nancy</em>
          </h2>
          <p className="relative mt-2 max-w-md text-[14.5px] leading-relaxed text-ivory/60">
            Réponds à ces quelques questions : ta demande arrive directement sur le WhatsApp de Nancy,
            déjà prête. Elle pourra préparer l&apos;appel avant de te contacter.
          </p>
        </div>

        {sent ? (
          <div className="flex flex-col items-center px-6 py-14 text-center sm:px-10">
            <div className="relative grid h-20 w-20 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366]">
              <span className="absolute inset-0 animate-pulse-ring rounded-full border border-[#25D366]" />
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-2xl">Presque terminé !</h3>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ivory/65">
              WhatsApp s&apos;est ouvert avec ton message pré-rempli. Il ne te reste plus qu&apos;à appuyer
              sur <strong className="text-ivory">Envoyer</strong>. Nancy te répond sous 24 à 48 h.
            </p>
            <a
              href={sent}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-[14.5px] font-bold text-ink transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <WhatsappIcon /> WhatsApp ne s&apos;est pas ouvert ? Clique ici
            </a>
            <button
              type="button"
              onClick={close}
              className="mt-5 cursor-pointer text-[13.5px] text-ivory/50 underline-offset-4 hover:text-gold hover:underline"
            >
              Retourner sur le site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5 overflow-y-auto px-6 py-7 sm:px-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="f-nom">Nom et prénom *</label>
                <input ref={firstFieldRef} id="f-nom" name="nom" required autoComplete="name" placeholder="Ton nom complet" className="field" />
              </div>
              <div>
                <label className={labelCls} htmlFor="f-tel">Numéro WhatsApp *</label>
                <input id="f-tel" name="tel" required type="tel" autoComplete="tel" placeholder="+237 6 …" className="field" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="f-pays">Pays / ville</label>
                <input id="f-pays" name="pays" placeholder="Ex. Douala, Cameroun" className="field" />
              </div>
              <div>
                <label className={labelCls} htmlFor="f-marque">Nom de ta marque</label>
                <input id="f-marque" name="marque" placeholder="Si tu en as déjà un" className="field" />
              </div>
            </div>

            <div>
              <label className={labelCls} htmlFor="f-offre">Accompagnement qui t&apos;intéresse *</label>
              <select id="f-offre" name="offre" required className="field" key={offer ?? "none"} defaultValue={offer ?? offers[0]}>
                {offers.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelCls} htmlFor="f-situation">Où en es-tu aujourd&apos;hui ? *</label>
              <select id="f-situation" name="situation" required className="field" defaultValue="">
                <option value="" disabled>Choisir…</option>
                {situations.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="f-produits">Tes produits *</label>
                <select id="f-produits" name="produits" required className="field" defaultValue="">
                  <option value="" disabled>Choisir…</option>
                  {products.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls} htmlFor="f-budget">Budget pour investir</label>
                <select id="f-budget" name="budget" className="field" defaultValue="">
                  <option value="">Je préfère en parler à l&apos;appel</option>
                  {budgets.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className={labelCls} htmlFor="f-dispo">Tes disponibilités pour l&apos;appel *</label>
              <input id="f-dispo" name="dispo" required placeholder="Ex. en semaine après 18 h, ou samedi matin" className="field" />
            </div>

            <div>
              <label className={labelCls} htmlFor="f-msg">Ton objectif en une phrase</label>
              <textarea
                id="f-msg"
                name="message"
                rows={3}
                placeholder="Ce que tu veux avoir accompli avec ta marque dans les 6 prochains mois…"
                className="field min-h-[92px] resize-y"
              />
            </div>

            <label className="flex items-start gap-3 text-[13.5px] leading-relaxed text-ivory/55" htmlFor="f-ok">
              <input id="f-ok" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[#d4ae62]" />
              J&apos;accepte d&apos;être recontactée par Nancy Ongolo sur WhatsApp au sujet de ma demande.
            </label>

            <button
              type="submit"
              className="mt-1 inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#25D366] px-7 py-[18px] text-[15px] font-extrabold text-ink shadow-[0_14px_40px_-12px_rgba(37,211,102,0.7)] transition hover:-translate-y-0.5 hover:brightness-110"
            >
              <WhatsappIcon /> Envoyer ma demande sur WhatsApp
            </button>
            <p className="-mt-1 text-center text-[12.5px] text-ivory/40">
              Réponse sous 24 à 48 h · Tes informations restent confidentielles · {site.phoneDisplay}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export function WhatsappIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.37 9.37 0 0 1-1.44-5c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.87.98 6.65 2.76a9.34 9.34 0 0 1 2.75 6.65c0 5.19-4.22 9.4-9.4 9.4m8-17.4A11.25 11.25 0 0 0 12.05.75C5.82.75.75 5.82.75 12.05c0 1.99.52 3.94 1.51 5.65L.65 23.25l5.68-1.49a11.3 11.3 0 0 0 5.4 1.38h.01c6.22 0 11.3-5.07 11.3-11.3 0-3.02-1.18-5.86-3.3-7.99" />
    </svg>
  );
}
