import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/stores/StoreProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lumgoo - Portfolio',
  description: 'Personal portfolio website showcasing projects and skills',
  keywords: ['portfolio', 'developer', 'projects', 'skills'],
  authors: [{ name: 'Lumgoo' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Lumgoo - Portfolio',
    description: 'Personal portfolio website showcasing projects and skills',
    type: 'website',
    url: 'https://lumgoo.com',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
} 