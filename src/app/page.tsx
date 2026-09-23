import BookingProvider from "@/components/BookingProvider";
import Navbar from "@/components/Navbar";
import FloatingCta from "@/components/FloatingCta";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Problem from "@/components/sections/Problem";
import About from "@/components/sections/About";
import Method from "@/components/sections/Method";
import Audience from "@/components/sections/Audience";
import Offers from "@/components/sections/Offers";
import Testimonials from "@/components/sections/Testimonials";
import Faq, { faqs } from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: site.name,
      url: site.url,
      image: `${site.url}/images/nancy-hero.webp`,
      jobTitle: "Business coach en cosmétique capillaire",
      email: site.email,
      telephone: site.phoneDisplay,
      sameAs: [site.instagram],
      worksFor: { "@type": "Organization", name: "The Queen's Secret" },
    },
    {
      "@type": "ProfessionalService",
      name: `${site.name} — Coaching business en cosmétique capillaire`,
      url: site.url,
      telephone: site.phoneDisplay,
      areaServed: ["Cameroun", "Afrique", "Europe"],
      description: site.description,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <BookingProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <About />
        <Method />
        <Audience />
        <Offers />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingCta />
    </BookingProvider>
  );
}
