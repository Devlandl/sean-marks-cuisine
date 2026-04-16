'use client';

import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';
import { useState } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand-dark text-brand-cream sticky top-0 z-50 shadow-md">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="text-2xl font-bold font-display">
          Sean Mark&apos;s
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/menu"
            className="hover:text-brand-gold transition-colors"
          >
            Menu
          </Link>
          <Link
            href="/catering"
            className="hover:text-brand-gold transition-colors"
          >
            Catering
          </Link>
          <Link
            href="/events"
            className="hover:text-brand-gold transition-colors"
          >
            Events
          </Link>
          <Link
            href="/gallery"
            className="hover:text-brand-gold transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="/about"
            className="hover:text-brand-gold transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-brand-gold transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex gap-4 items-center">
          <Link
            href="/cart"
            className="hover:text-brand-gold transition-colors text-sm"
          >
            Cart
          </Link>
          <UserButton afterSignOutUrl="/" />
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-brand-dark border-t border-opacity-20 border-brand-cream p-4 flex flex-col gap-3">
          <Link href="/menu" className="hover:text-brand-gold">
            Menu
          </Link>
          <Link href="/catering" className="hover:text-brand-gold">
            Catering
          </Link>
          <Link href="/events" className="hover:text-brand-gold">
            Events
          </Link>
          <Link href="/gallery" className="hover:text-brand-gold">
            Gallery
          </Link>
          <Link href="/about" className="hover:text-brand-gold">
            About
          </Link>
          <Link href="/contact" className="hover:text-brand-gold">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
