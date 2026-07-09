import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import FooterSection from "@/components/shared/Footer";
import { BuyModalProvider } from "@/components/shared/BuyModalContext";
import BuyModal from "@/components/shared/BuyModal";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "How to raise a genius child - Maruthi ram prasad pelluri",
  description: "How to raise a genius child - Maruthi ram prasad pelluri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
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

