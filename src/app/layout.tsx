import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BuyModalProvider } from "@/components/shared/BuyModalContext";
import Navbar from "@/components/shared/Navbar";
import FooterSection from "@/components/shared/Footer";
import BuyModal from "@/components/shared/BuyModal";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mybookzz.com'),
  title: "How to raise a genius child - Maruthi ram prasad pelluri",
  description: "How to raise a genius child - Maruthi ram prasad pelluri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mybookzz",
    url: "https://www.mybookzz.com",
    description: "Official website for 'How to Raise a Genius Child' by Maruthi Ram Prasad Pelluri",
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mybookzz",
    url: "https://www.mybookzz.com",
    logo: "https://www.mybookzz.com/logos.png",
    sameAs: ["https://www.facebook.com/share/1BV91CYb5h", "https://www.instagram.com/maruthi_ramprasad_pelluri", "https://www.linkedin.com/in/maruthipelluri"]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <BuyModalProvider>
          <Navbar />
          {children}
          <FooterSection />
          <BuyModal />
        </BuyModalProvider>
      </body>
    </html>
  );
}

