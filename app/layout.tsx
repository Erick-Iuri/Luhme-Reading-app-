import type { Metadata } from "next";
import { Italianno, Itim, Intel_One_Mono } from "next/font/google";
import "./globals.css";

const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italianno",
});

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-itim",
});

const intelOneMono = Intel_One_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-intel-mono",
});

export const metadata: Metadata = {
  title: "Focus App - Luhme",
  description: "Focus on your story",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${italianno.variable} ${itim.variable} ${intelOneMono.variable}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
