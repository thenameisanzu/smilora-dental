import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Figtree({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smiloradental.com"),
  title: "Smilora Dental Care | Best Dentist in Edappally, Kochi",
  description:
    "Gentle, painless dental care in Edappally, Kochi. Specializing in single-sitting laser teeth whitening, painless root canals, dental implants, and clear aligners.",
  keywords: [
    "Dentist in Kochi",
    "Dental clinic Edappally",
    "Teeth whitening Kochi",
    "Painless root canal Kochi",
    "Dental implants Ernakulam",
    "Clear aligners Kerala",
    "Best dental hospital Kochi",
  ],
  authors: [{ name: "Smilora Dental Care" }],
  creator: "Smilora Dental Care",
  publisher: "Smilora Dental Care",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://smiloradental.com",
    title: "Smilora Dental Care | Gentle, Modern Dental Care in Kochi",
    description:
      "Award-winning dental care in Edappally, Kochi. Laser teeth whitening, dental implants, painless RCT & clear aligners.",
    siteName: "Smilora Dental Care",
    images: [
      {
        url: "/images/whitening-after.jpg",
        width: 1200,
        height: 900,
        alt: "Smilora Dental Care Teeth Whitening Results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smilora Dental Care | Dentist in Kochi",
    description: "Laser teeth whitening, dental implants & painless dentistry in Kochi.",
    images: ["/images/whitening-after.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0E9AA7",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
