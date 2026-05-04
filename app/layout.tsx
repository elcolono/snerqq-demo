import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "snërqq — A safe digital space for children",
  description:
    "snërqq is a child-friendly digital platform with no endless feed, no influencers, no advertising, and no public visibility.",
  openGraph: {
    title: "snërqq — A safe digital space for children",
    description:
      "A playful digital space where children chat, play and create with real friends.",
    images: ["https://snerqq.ch/images/baners/playground-baner.webp"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
