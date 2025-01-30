import type { Metadata } from "next";
import { Fira_Sans } from 'next/font/google';
import "./globals.css";
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

const firaSans = Fira_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin', 'cyrillic'],
  variable: '--font-fira',
  preload: true,
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "BugHunter",
  description: "BugHunter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
