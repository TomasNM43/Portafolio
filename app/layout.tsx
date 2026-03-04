import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import BackgroundShader from "@/components/ui/BackgroundShader";

const nohemi = localFont({
  src: [
    {
      path: "../public/fonts/nohemi/Nohemi-Light-BF6438cc5702321.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-Regular-BF6438cc579d934.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-Medium-BF6438cc57ddecd.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-SemiBold-BF6438cc57db2ff.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-Bold-BF6438cc577b524.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/nohemi/Nohemi-ExtraBold-BF6438cc5761ae2.woff",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
});

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-BlackItalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Mi Portafolio | Desarrollador Full Stack",
  description: "Portafolio profesional de desarrollo web. Especializado en React, Next.js, TypeScript y más.",
  keywords: ["portafolio", "desarrollador", "web", "react", "nextjs", "typescript"],
  authors: [{ name: "Tu Nombre" }],
  icons: {
    icon: [
      { url: '/isotipo.png' },
      { url: '/isotipo.png', sizes: '32x32', type: 'image/png' },
      { url: '/isotipo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/isotipo.png',
    apple: '/isotipo.png',
  },
  openGraph: {
    title: "Mi Portafolio | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollo web",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/isotipo.png" />
      </head>
      <body
        className={`${satoshi.variable} ${nohemi.variable} antialiased relative`}
      >
        <BackgroundShader />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
