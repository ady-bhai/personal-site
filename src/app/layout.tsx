import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./page.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer component
import MusicPlayer from "./components/MusicPlayer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
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
      <body className={`${geistSans.variable} antialiased`}>
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
