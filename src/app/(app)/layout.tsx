import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000"),
  ),
  title: {
    default: "E Truck Dispatching | Professional Truck Dispatch Services",
    template: "%s | E Truck Dispatching",
  },
  description:
    "Professional truck dispatching and back-office support for owner-operators and small fleets across the United States.",
  applicationName: "E Truck Dispatching",
  authors: [{ name: "E Truck Dispatching" }],
  creator: "E Truck Dispatching",
  publisher: "E Truck Dispatching",
  keywords: [
    "truck dispatch services",
    "freight dispatch services",
    "dispatch services for owner operators",
    "truck load booking",
    "back office support for trucking",
    "E Truck Dispatching",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-zinc-900">
  <div className="relative min-h-full overflow-x-hidden">
    <Navbar />
    {children}
  </div>

  <Footer />
</body>
    </html>
  );
}
