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
      <body className="fade-in m-7">
        <main>{children}</main>
      </body>
    </html>
  );
}


