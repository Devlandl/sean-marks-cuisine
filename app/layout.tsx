import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import './globals.css';

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
      <html lang="en">
        <body className="min-h-full flex flex-col bg-brand-cream text-brand-text">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
