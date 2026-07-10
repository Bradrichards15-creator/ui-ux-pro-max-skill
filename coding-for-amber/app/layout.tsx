import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amber Perry — Anxiety Coach | @wordsofamber",
  description:
    "Anxiety coaching that meets you where you are. 1:1 programmes, practical tools built around how your anxiety actually works — with Amber Perry.",
  openGraph: {
    title: "Amber Perry — Anxiety Coach",
    description:
      "You're not broken. Your anxiety makes sense — and it can change. 1:1 anxiety coaching with Amber Perry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
