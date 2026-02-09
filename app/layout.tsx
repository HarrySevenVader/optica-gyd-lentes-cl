import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Óptica GYD | Lentes con Receta, Sol y Más en Santiago, Chile",
  description: "Óptica GYD — Lentes ópticos, de sol, blue block y más a precios justos. Envíos a todo Chile. Atención personalizada en Santiago. Desde 2020.",
  keywords: ["óptica", "lentes", "lentes de sol", "lentes con receta", "lentes blue block", "Santiago", "Chile", "envío a todo Chile", "Óptica GYD"],
  icons: {
    icon: "/images/logo-gyd.png",
  },
  openGraph: {
    title: "Óptica GYD | Lentes de Calidad a Precios Justos",
    description: "Lentes ópticos, de sol, blue block y más. Envíos a todo Chile. Atención personalizada en Santiago.",
    url: "https://opticagyd.cl",
    siteName: "Óptica GYD",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Óptica GYD | Lentes de Calidad a Precios Justos",
    description: "Lentes ópticos, de sol, blue block y más. Envíos a todo Chile desde Santiago.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
