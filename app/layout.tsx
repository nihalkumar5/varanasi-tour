import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Namaste · Spiritual Travel & Local Experiences",
  description:
    "Discover, compare and book verified local experiences across India's spiritual and heritage destinations — Varanasi, Ayodhya, Prayagraj, Lucknow.",
  applicationName: "Namaste",
  openGraph: {
    title: "Namaste · Spiritual Travel & Local Experiences",
    description:
      "India's trusted marketplace for spiritual, cultural and local experiences with verified providers and transparent pricing.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#7A1F1F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
