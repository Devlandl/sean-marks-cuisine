'use client';

import { ConvexProvider, ConvexReactClient } from 'convex/react';

const convex = process.env.NEXT_PUBLIC_CONVEX_URL
  ? new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL)
  : null;

export function Providers({ children }: { children: React.ReactNode }) {
  if (!convex) {
    return <>{children}</>;
  }
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
