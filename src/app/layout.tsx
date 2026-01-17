import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import "./globals.css";

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali"],
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
        className={`${anekBangla.variable} antialiased font-sans`}
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
