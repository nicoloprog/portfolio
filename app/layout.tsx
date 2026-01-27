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
    "Full Stack Developer. Building accessible, pixel-perfect, and performant web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${space.variable} font-body text-white bg-background-dark overflow-x-hidden selection:bg-primary selection:text-background-dark`}
      >
        {children}
      </body>
    </html>
  );
}
