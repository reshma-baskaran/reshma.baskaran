import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  "https://reshma-baskaran.github.io/reshma.baskaran";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Reshma Baskaran — GTM + Growth Systems",
  description:
    "GTM systems, growth experiments, practical agents, prompts, and personal projects by Reshma Baskaran.",
  openGraph: {
    title: "Reshma Baskaran — GTM + Growth Systems",
    description:
      "Building practical systems for demand generation, content, experimentation, and growth.",
    url: siteUrl,
    siteName: "Reshma Baskaran",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1536,
        height: 1024,
        alt: "Reshma Baskaran — GTM and Growth Systems",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reshma Baskaran — GTM + Growth Systems",
    description:
      "Building practical systems for demand generation, content, experimentation, and growth.",
    images: [`${siteUrl}/og.png`],
  },
  icons: {
    icon: `${siteUrl}/og.png`,
    shortcut: `${siteUrl}/og.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
