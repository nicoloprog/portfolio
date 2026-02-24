import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import LiquidBackground from "@/components/LiquidBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Nicolas Paquette – Portfolio",
  description:
    "Développeur full-stack. Je conçois des applications et des sites web avant-gardistes, performants et au pixel près",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#0f172a]">
      <body
        className={`${inter.variable} ${space.variable} font-body text-white bg-[#0f172a] overflow-x-hidden selection:bg-[#0f172a] selection:text-background-dark`}
      >
        <LiquidBackground />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
