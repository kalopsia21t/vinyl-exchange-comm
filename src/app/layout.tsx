import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "./home/header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinyl Exchange Community",
  description: "Portal for Ukranian vinyl community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col md:flex-col md:overflow-hidden">
          <div className="flex w-screen md:h-24">
            <Header />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
