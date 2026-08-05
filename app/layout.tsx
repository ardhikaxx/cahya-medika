import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rscahyamedika.com"),
  title: {
    default: "RS Cahya Medika Bondowoso — Pelayanan Kesehatan Modern & Terpercaya",
    template: "%s | RS Cahya Medika Bondowoso",
  },
  description:
    "Rumah Sakit Cahya Medika Bondowoso menyediakan pelayanan kesehatan modern dengan standar tinggi. IGD 24 Jam, Klinik Spesialis, Program Hamil, Ruang Operasi, Laboratorium, dan fasilitas lengkap di Bondowoso, Jawa Timur.",
  keywords: [
    "rumah sakit Bondowoso",
    "RS Cahya Medika",
    "dokter spesialis Bondowoso",
    "IGD 24 jam Bondowoso",
    "program hamil Bondowoso",
    "klinik Bondowoso",
    "pelayanan kesehatan Bondowoso",
  ],
  authors: [{ name: "RS Cahya Medika Bondowoso" }],
  creator: "RS Cahya Medika Bondowoso",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rscahyamedika.com",
    siteName: "RS Cahya Medika Bondowoso",
    title: "RS Cahya Medika Bondowoso — Pelayanan Kesehatan Modern & Terpercaya",
    description:
      "Rumah Sakit Cahya Medika Bondowoso menyediakan pelayanan kesehatan modern dengan standar tinggi. IGD 24 Jam, Klinik Spesialis, Program Hamil, dan fasilitas lengkap.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "RS Cahya Medika Bondowoso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RS Cahya Medika Bondowoso — Pelayanan Kesehatan Modern & Terpercaya",
    description: "Rumah Sakit Cahya Medika Bondowoso menyediakan pelayanan kesehatan modern dengan standar tinggi.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "Rumah Sakit Cahya Medika Bondowoso",
  alternateName: "RS Cahya Medika",
  url: "https://rscahyamedika.com",
  logo: "https://rscahyamedika.com/images/logo.png",
  image: "https://rscahyamedika.com/images/hero.jpg",
  description:
    "Rumah Sakit Cahya Medika Bondowoso menyediakan layanan kesehatan modern dengan tenaga medis profesional dan fasilitas lengkap.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Raya Pakisan No.24, Lumbung II, Bataan",
    addressLocality: "Tenggarang",
    addressRegion: "Jawa Timur",
    postalCode: "68281",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-7.9254",
    longitude: "113.8175",
  },
  telephone: "+62332-5557554",
  openingHours: "Mo-Su 00:00-23:59",
  hasMap: "https://maps.google.com",
  sameAs: ["https://instagram.com/rscahyamedika"],
  medicalSpecialty: [
    "Cardiology",
    "Pediatrics",
    "Obstetrics",
    "Internal Medicine",
    "Surgery",
    "Ophthalmology",
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "IGD 24 Jam",
    },
    {
      "@type": "MedicalProcedure",
      name: "Klinik Spesialis",
    },
    {
      "@type": "MedicalProcedure",
      name: "Program Hamil Terpadu",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-foreground font-sans antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <EmergencyButton />
      </body>
    </html>
  );
}
