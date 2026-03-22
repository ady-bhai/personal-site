import type { Metadata, Viewport } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";
import "./page.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer component
import MusicPlayer from "./components/MusicPlayer";

/** Webfont fallback so production matches the original Charter look everywhere. */
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body-serif",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Ady Mehta",
  description: "Ady's personal site",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} antialiased`}>
        <div className="flex flex-col min-h-screen items-center justify-center bg-background">
          <Navbar />
          <main className="flex-grow px-4 sm:px-6 md:px-8 max-w-[720px] mx-auto">
            {children}
          </main>
        </div>
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}
