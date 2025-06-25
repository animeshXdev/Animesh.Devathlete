import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Animesh.Devathlete",
  description: "Developed by Animesh Prakash",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavbarDemo />
          <Toaster position="top-right" />

          {children}
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>

      </body>
    </html>
  );
}
