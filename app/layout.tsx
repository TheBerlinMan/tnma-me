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
      <body className="bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/drawings/BluePurple.jpg')",
        backgroundSize: "200%"
      }}>
        <main>{children}</main>
      </body>
    </html>
  );
}


