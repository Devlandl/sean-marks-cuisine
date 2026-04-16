'use client';

import { useAuth, useUser } from '@clerk/nextjs';

export default function AdminPage() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();

  if (!isSignedIn) {
    return <div>Redirecting to login...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome, {user?.emailAddresses[0]?.emailAddress}</p>
      <p className="mt-4 text-gray-600">Admin page is protected by Clerk.</p>
    </div>
  );
}
