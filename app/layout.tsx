import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TNMA",
  description: "Tnma's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col max-w-4xl mx-auto px-16 py-16">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
