import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const julyIctd = localFont({
  src: [
    {
      path: "../../public/fonts/JulyICTD/July-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/JulyICTD/July-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/JulyICTD/July-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/JulyICTD/July-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-july-ictd",
});

export const metadata: Metadata = {
  title: "বঙ্গডিবি - আধুনিক অ্যাপের জন্য ডেটাবেস",
  description: "আধুনিক ওয়েব অ্যাপ্লিকেশনের জন্য পরবর্তী প্রজন্মের ডেটাবেস।",
};

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body
        className={`${julyIctd.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
