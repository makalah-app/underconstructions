import './globals.css';
import { Inter, Roboto } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'Makalah AI - Dalam Pembangunan',
  description: 'Platform AI untuk penulisan paper akademik sedang dalam pembangunan. Fokus anda adalah berpikir, bukan berkutat dengan prompt.',
  keywords: ['AI', 'academic writing', 'research', 'Makalah', 'Indonesia', 'paper akademik'],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Makalah AI - Dalam Pembangunan',
    description: 'Platform AI untuk penulisan paper akademik',
    url: 'https://makalah.ai',
    siteName: 'Makalah AI',
    images: [
      {
        url: '/logo.png',
        width: 500,
        height: 500,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${roboto.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}