import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
        <Script id="meta-pixel" strategy="afterInteractive">
{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];
t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}
(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1838701963917339');
fbq('track', 'PageView');
`}
</Script>
<noscript>
<img
height="1"
width="1"
style={{ display: "none" }}
src="https://www.facebook.com/tr?id=1838701963917339&ev=PageView&noscript=1"
alt=""
/>
</noscript>


        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
