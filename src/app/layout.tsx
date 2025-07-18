import type { Metadata } from "next";
import { Inter, Poppins, Manrope } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReviewButton from "@/components/common/ReviewButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Signs & Graphics Company - Professional Signage Solutions",
  description: "Professional design, manufacture, installation and repair of signs and graphic supports. Quality signage solutions for your business.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="fr">
      <body className={`${inter.variable} ${poppins.variable} ${manrope.variable} font-body antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ReviewButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
