import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TNMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col max-w-6xl mx-auto p-6 sm:p-16">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
