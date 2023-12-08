import { Metadata } from 'next';
import data from '@/data/meta.json';

const { title, description, keywords, locale, images } = data;

const { BASE_URL } = process.env;

const meta: Metadata = {
  title: title,
  description: description,
  keywords: keywords,
  other: {
    facebookDomainVerification: 'onwgvsjpfq2q0r4y1k8tjjhojkpya9',
  },
  metadataBase: new URL(BASE_URL as string),
  alternates: {
    canonical: BASE_URL as string,
  },
  manifest: '/meta/site.webmanifest',
  openGraph: {
    title: title,
    description: description,
    url: BASE_URL as string,
    siteName: title,
    locale: locale,
    type: 'website',
    images: images,
  },
  twitter: {
    title: title,
    description: description,
    card: 'summary_large_image',
    images: images,
  },
  icons: {
    icon: [
      {
        url: '/meta/favicon.ico',
      },
      {
        url: '/meta/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/meta/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/meta/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/meta/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: '/meta/favicon.ico',
    apple: '/meta/apple-touch-icon.png',
    other: {
      rel: '/meta/apple-touch-icon.png',
      url: '/meta/apple-touch-icon.png',
    },
  },
};

export default meta;
