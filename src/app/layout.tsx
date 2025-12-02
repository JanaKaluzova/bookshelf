import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { TopBar } from "@/components/TopBar";

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bookshelf",
  description:
    "Your personal digital bookshelf to track and organize your reading journey",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="cs">
      <body
        className={`${inter.variable} ${lora.variable} font-sans antialiased min-h-screen bg-gray-50`}
      >
        <TopBar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
