import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EmailDiplomat | Transform Email Conflicts Into Collaboration",
  description:
    "AI-powered tool that transforms passive-aggressive workplace emails into diplomatic messages. Perfect for HR managers and team leaders.",
  keywords: [
    "email",
    "communication",
    "workplace",
    "HR",
    "diplomacy",
    "AI",
    "team management",
  ],
  openGraph: {
    title: "EmailDiplomat | Transform Email Conflicts Into Collaboration",
    description:
      "AI-powered tool that transforms passive-aggressive workplace emails into diplomatic messages.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakarta.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background text-foreground font-body antialiased">
        {children}
      </body>
    </html>
  );
}
