import type { Metadata } from 'next';
import { Open_Sans, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';

import { Header } from '@/views/Header';
import { Footer } from '@/views/Footer';
import { FacebookPixel } from '@/components/FacebookPixel';

import meta from '@/data/meta';
import './globals.css';

const open_sans = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-inter',
});

const dela_gothic = localFont({
  src: './DelaGothicOne-Regular.woff2',
  variable: '--font-dela-gothic',
});

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${open_sans.variable} ${inter.variable} ${dela_gothic.variable} text-white`}
      >
        <Header />
        <main>
          {children}
          <FacebookPixel />
        </main>
        <Footer />
        <Toaster position="top-right" reverseOrder={true} />
        <div id="popup" />
      </body>
    </html>
  );
}
