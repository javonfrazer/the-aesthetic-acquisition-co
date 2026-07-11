import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://theaestheticacquisitionco.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Aesthetic Acquisition Co. | Med Spa Marketing & Meta Ads",
    template: "%s | The Aesthetic Acquisition Co.",
  },
  description:
    "The Aesthetic Acquisition Co. helps medical spas consistently generate consultation bookings through premium social media management and high-converting Meta advertising.",
  keywords: [
    "medical spa marketing",
    "med spa social media management",
    "med spa Meta ads",
    "aesthetic clinic marketing agency",
    "medspa consultation bookings",
    "med spa Facebook and Instagram ads",
  ],
  authors: [{ name: "The Aesthetic Acquisition Co." }],
  creator: "The Aesthetic Acquisition Co.",
  publisher: "The Aesthetic Acquisition Co.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "The Aesthetic Acquisition Co.",
    title: "The Aesthetic Acquisition Co. | Med Spa Marketing & Meta Ads",
    description:
      "Turn your medical spa into the go-to choice in your city. Premium social media management and Meta advertising built to fill your consultation calendar.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Aesthetic Acquisition Co.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aesthetic Acquisition Co. | Med Spa Marketing & Meta Ads",
    description:
      "Premium social media management and Meta advertising for medical spas that want a consistently full consultation calendar.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "The Aesthetic Acquisition Co.",
  url: siteUrl,
  description:
    "Premium social media management and Meta advertising agency exclusively for medical spas and aesthetic clinics.",
  areaServed: "US",
  serviceType: [
    "Social Media Management",
    "Meta Advertising",
    "Content Creation",
    "Brand Strategy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
