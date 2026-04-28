import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "New Strategy Institute | by DCXforce",
  description:
    "事業価値を蓄積するための戦略を再設計する。ファイナンスからナラティブまで、我々はその全体を構想します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter bg-white text-navy antialiased">{children}</body>
    </html>
  );
}
