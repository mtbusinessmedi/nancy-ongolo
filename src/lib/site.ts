export const site = {
  name: "Nancy Ongolo",
  title: "Nancy Ongolo — Business coach en cosmétique capillaire",
  description:
    "Crée, structure et fais grandir ta marque de cosmétiques capillaires avec Nancy Ongolo, fondatrice de The Queen's Secret. Accompagnement business, formulation, branding et vente. Réserve ton appel stratégique.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nancy-ongolo.vercel.app",
  whatsapp: "237675353237",
  phoneDisplay: "+237 6 75 35 32 37",
  email: "nancyongolo@thequeenafrica.com",
  instagram: "https://www.instagram.com/nancyongolo",
  instagramHandle: "@nancyongolo",
  followers: 262,
} as const;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navLinks = [
  { href: "#apropos", label: "À propos" },
  { href: "#methode", label: "La méthode" },
  { href: "#offres", label: "Accompagnements" },
  { href: "#temoignages", label: "Témoignages" },
  { href: "#faq", label: "FAQ" },
] as const;

export const bookingOffers = [
  "Appel stratégique offert (30 min)",
  "Coaching individuel « Queen Starter »",
  "Accompagnement premium « Queen Business »",
  "Je ne sais pas encore, j'ai besoin de conseils",
] as const;
