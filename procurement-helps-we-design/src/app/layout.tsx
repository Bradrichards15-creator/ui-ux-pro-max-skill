import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Procurement Helps - Tender & Procurement Support",
  description:
    "Tender review, mock scoring and response writing from someone who has scored thousands of tenders - plus procurement support that's delivered millions in supplier savings and helped businesses tighten up how they buy. No agency fees, just me.",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
