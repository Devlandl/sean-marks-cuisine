import { ClerkProvider } from '@clerk/nextjs';
import { Providers } from './providers';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import type { Metadata } from 'next';
import './globals.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Sean Mark\'s Cuisine',
  description: 'Crafting culinary experiences with heart and precision',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body className="min-h-full flex flex-col bg-brand-base text-brand-text">
            <Header />
            <main className="flex-1 pt-[73px]">{children}</main>
            <Footer />
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
