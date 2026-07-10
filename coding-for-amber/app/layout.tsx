import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Words of Amber — Anxiety Coaching with Amber Perry",
  description:
    "You were never broken. Just never taught. Anxiety coaching and nervous system regulation with Amber Perry (@wordsofamber).",
  openGraph: {
    title: "Words of Amber — Anxiety Coaching",
    description:
      "You were never broken. Just never taught. Anxiety coaching and nervous system regulation with Amber Perry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body overflow-x-hidden">{children}</body>
    </html>
  );
}
