import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Sanjith B — AI Backend & Mobile Developer",
  description:
    "Sanjith B builds AI document-processing backends with Claude and Gemini, and Android apps with React Native, Expo and Kotlin.",
  openGraph: {
    title: "Sanjith B — AI Backend & Mobile Developer",
    description: "AI document-processing backends and Android apps.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07080b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
