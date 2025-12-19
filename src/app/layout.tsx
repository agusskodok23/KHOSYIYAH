import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KHOSYIYAH - Solusi Bisnis Profesional Terpercaya",
  description: "KHOSYIYAH adalah mitra bisnis terpercaya yang menyediakan layanan konsultasi dan solusi bisnis berkualitas tinggi. Berlokasi di Surabaya, kami berkomitmen untuk kesuksesan bisnis Anda.",
  keywords: ["KHOSYIYAH", "konsultasi bisnis", "solusi bisnis", "Surabaya", "profesional", "terpercaya", "layanan berkualitas"],
  authors: [{ name: "KHOSYIYAH Team" }],
  icons: {
    icon: "/khosyiyah-logo.png",
  },
  openGraph: {
    title: "KHOSYIYAH - Solusi Bisnis Profesional Terpercaya",
    description: "Mitra bisnis terpercaya untuk solusi berkualitas tinggi di Surabaya",
    url: "https://khosyiyah.com",
    siteName: "KHOSYIYAH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KHOSYIYAH - Solusi Bisnis Profesional",
    description: "Mitra bisnis terpercaya untuk solusi berkualitas tinggi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
