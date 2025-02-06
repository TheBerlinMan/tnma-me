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
      <body className="min-h-screen">
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}


