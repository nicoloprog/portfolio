import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${inter.variable} ${space.variable} font-body text-white overflow-x-hidden selection:bg-primary selection:text-background-dark`}
        style={{ backgroundColor: "transparent" }}
      >
        {children}
      </body>
    </html>
  );
}
