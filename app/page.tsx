import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Nosotros from "./components/nosotros/Nosotros"
import Demostraciones from "./components/demostraciones/Demostraciones"
import Lentes from "./components/lentes/Lentes"
import Compra from "./components/compra/Compra"
import Resenas from "./components/resenas/Resenas"
import Ubicacion from "./components/ubicacion/Ubicacion"
import Footer from "./components/footer/Footer"
import Flotantes from "./components/flotantes/Flotantes"
import { businessConfig, contactConfig, siteConfig } from "./lib/siteConfig"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Optician",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/images/logo-gyd.png`,
  telephone: contactConfig.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Agustinas 681, Oficina 1205",
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: businessConfig.geo.latitude,
    longitude: businessConfig.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:30",
      closes: "17:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:30",
      closes: "16:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: businessConfig.reviewSummary.ratingValue,
    reviewCount: businessConfig.reviewSummary.reviewCount,
  },
  sameAs: businessConfig.sameAs,
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hacen envios a todo Chile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, realizamos envios a todo Chile con despacho a domicilio o retiro segun disponibilidad.",
      },
    },
    {
      "@type": "Question",
      name: "Puedo comprar con mi receta optica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, puedes enviarnos tu receta optica actualizada y te guiamos en la eleccion del lente ideal.",
      },
    },
    {
      "@type": "Question",
      name: "Tienen garantia en los lentes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si, todos nuestros productos cuentan con garantia y apoyo postventa.",
      },
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main className="min-h-screen bg-gray-100">
        <Hero />
        <Nosotros />
        <Lentes />
        <Demostraciones />
        <Compra />
        <Resenas />
        <Ubicacion />
      </main>
      <Footer />
      <Flotantes />
    </>
  )
}