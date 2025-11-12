import Footer from "@/components/shared/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "../components/shared/Navbar";
import "./globals.css";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const clashDisplay = localFont({
  src: "../public/ClashDisplay/Fonts/WEB/fonts/ClashDisplay-Variable.woff2",
  display: "swap",
  variable: "--font-clash-display",
});

export const metadata: Metadata = {
  title: "Petgon - Pet Care Services",
  description: "Your one-stop solution for all pet care needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body
        className={`${inter.variable} ${clashDisplay.variable} antialiased bg-[#6148FB]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
