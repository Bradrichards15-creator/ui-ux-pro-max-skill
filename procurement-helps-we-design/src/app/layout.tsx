import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
import { SmoothScroll } from "@/components/smooth-scroll";
import { RouteTransition } from "@/components/route-transition";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  // TODO: swap for the real production domain once it's live
  metadataBase: new URL("https://procurementhelps.co.uk"),
  title: "Procurement Helps - Tender & Procurement Support",
  description:
    "Tender review, mock scoring and response writing from someone who has scored thousands of tenders - plus procurement support that's delivered millions in supplier savings and helped businesses tighten up how they buy. No agency fees, just me.",
};

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Procurement Helps",
  description:
    "Tender review, mock scoring and response writing from someone who has scored thousands of tenders - plus procurement support that's delivered millions in supplier savings.",
  url: "https://procurementhelps.co.uk",
  email: "brad@procurementhelps.co.uk",
  telephone: "+447958145110",
  founder: {
    "@type": "Person",
    name: "Brad Richards",
    jobTitle: "Owner, MCIPS",
  },
  areaServed: "GB",
  sameAs: [
    "https://www.linkedin.com/in/bradprocurementhelps/",
    "https://www.instagram.com/bradprcurementhelps/",
    "https://www.tiktok.com/@brad.procurementhelps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll />
        <Analytics />
        <RouteTransition>{children}</RouteTransition>
        <CookieBanner />
      </body>
    </html>
  );
}
