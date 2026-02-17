import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SITCO | Future of Business Intelligence",
  description: "Secure, Compliant, and AI-Driven ERP & Cyber-Defense Ecosystem for Saudi Arabia.",
  icons: {
    icon: '/sitco_logo.png',
    apple: '/sitco_logo.png',
  },
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MatrixProvider } from "@/context/MatrixContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cairo.variable} scroll-smooth`}>
      <body className="antialiased bg-page text-main font-sans transition-colors duration-300">
        <MatrixProvider>
          <Navbar />
          {children}
          <Footer />
        </MatrixProvider>
      </body>
    </html>
  );
}
