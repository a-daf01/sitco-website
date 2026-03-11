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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F0F9FF' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://sitco.sa'),
  title: {
    default: "SITCO | Empowering Your Business with IT Solutions & Artificial Intelligence",
    template: "%s | SITCO"
  },
  description: "Secure, Compliant, and AI-Driven ERP & Cyber-Defense Ecosystem. Empowering the region with sovereign technology.",
  keywords: ["SITCO", "ERP", "Cybersecurity", "Saudi Arabia", "Vision 2030", "AI", "ZATCA", "Business Intelligence", "Riyadh"],
  authors: [{ name: "SITCO" }],
  creator: "SITCO",
  publisher: "SITCO",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sitco.sa",
    title: "SITCO | Empowering Your Business with IT Solutions & Artificial Intelligence",
    description: "Secure, Compliant, and AI-Driven ERP & Cyber-Defense Ecosystem.",
    siteName: "SITCO",
    images: [
      {
        url: "/og-image.jpg", // Need to ensure this exists or use logo
        width: 1200,
        height: 630,
        alt: "SITCO - Sovereign Intelligent Technology"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SITCO | Empowering Your Business with IT Solutions & Artificial Intelligence",
    description: "Secure, Compliant, and AI-Driven ERP & Cyber-Defense Ecosystem.",
    images: ["/og-image.jpg"],
    creator: "@sitco_sa"
  },
  icons: {
    icon: '/sitco_logo.png',
    apple: '/sitco_logo.png',
  },
  manifest: '/site.webmanifest',
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MatrixProvider } from "@/context/MatrixContext";
import GlobalStickyCTA from "@/components/shared/GlobalStickyCTA";
import ExitIntentModal from "@/components/shared/ExitIntentModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${cairo.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased bg-page text-main font-sans transition-colors duration-300">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var lang = localStorage.getItem('matrix-lang') || 'en';
                var theme = localStorage.getItem('matrix-theme') || 'dark';
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
                if (theme === 'dark') document.documentElement.classList.add('dark');
                else document.documentElement.classList.remove('dark');
              } catch (e) {}
            `
          }}
        />
        <MatrixProvider>
          <Navbar />
          {children}
          <Footer />
          <GlobalStickyCTA />
          <ExitIntentModal />
        </MatrixProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["B2BBusiness", "Organization", "SoftwareApplication"],
              "name": "SITCO (Sovereign Intelligent Technology Co.)",
              "url": "https://sitco.sa",
              "logo": "https://sitco.sa/sitco_logo.png",
              "description": "Enterprise-grade AI Solutions, Sovereign Cloud, and ZATCA Phase 2 compliant ERP systems in Saudi Arabia.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Riyadh",
                "addressCountry": "SA"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+966-53-502-0099",
                "contactType": "sales",
                "email": "info@sitcotech.com",
                "areaServed": "SA",
                "availableLanguage": ["en", "ar"]
              },
              "sameAs": [
                "https://twitter.com/sitco_sa",
                "https://linkedin.com/company/sitco-sa"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
