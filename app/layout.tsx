import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// Load Jost font with all available weights
const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "TNMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jost.variable}>
      <body className={`min-h-screen font-sans ${jost.className}`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}


