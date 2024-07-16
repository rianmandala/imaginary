import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title:
    "Imaginary - Advanced Image Editing Services | Background Removal, Image Restoration & More",
  description:
    "Imaginary offers advanced image editing services including background removal, image restoration, image recoloring, object removal, and generative fill. Perfect your photos with our AI-powered tools. Try Imaginary today!",
  icons: {
    icon: "/assets/images/logo-icon.svg",
  },
  keywords:
    "image editing, background removal, image restoration, image recoloring, object removal, generative fill, photo editing, photo restoration, image enhancement",
  openGraph: {
    title: "Imaginary - Advanced Image Editing Services",
    description:
      "Transform your photos with Imaginary's AI-powered tools for background removal, image restoration, recoloring, and more.",
    url: "https://imaginary-od9j.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dgtcoctbo/image/upload/v1721170989/trfciocd8h34brsr6k4p.png",
        width: 800,
        height: 600,
        alt: "Imaginary Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imaginary - Advanced Image Editing Services",
    description:
      "Transform your photos with Imaginary's AI-powered tools for background removal, image restoration, recoloring, and more.",
    images: [
      {
        url: "https://res.cloudinary.com/dgtcoctbo/image/upload/v1721170989/trfciocd8h34brsr6k4p.png",
        alt: "Imaginary Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: { colorPrimary: "#624cf5" },
      }}
    >
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
