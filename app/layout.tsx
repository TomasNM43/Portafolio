import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
