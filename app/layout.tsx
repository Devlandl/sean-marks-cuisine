import { ClerkProvider } from '@clerk/nextjs';
import { ConvexProvider, ConvexReactClient } from 'convex/react';
import type { Metadata } from 'next';
import './globals.css';

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL || '');

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
      <ConvexProvider client={convex}>
        <html lang="en">
          <body className="min-h-full flex flex-col bg-brand-cream text-brand-text">
            {children}
          </body>
        </html>
      </ConvexProvider>
    </ClerkProvider>
  );
}
