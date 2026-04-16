# Site-Wide Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform Sean Mark's Cuisine from a generic template look into a bold, dark, chef-forward brand (Dark & Electric theme: black/white/electric green).

**Architecture:** Update the global CSS theme (colors, typography, spacing), then cascade changes through shared components (Header, Footer, Button), then restyle each page. No structural/logic changes -- purely visual.

**Tech Stack:** Next.js, Tailwind CSS v4 (via @tailwindcss/postcss), Inter font from Google Fonts

**Spec:** `docs/superpowers/specs/2026-04-15-site-wide-redesign-design.md`

---

### Task 1: Update Global Theme (Colors, Typography, CSS Variables)

**Files:**
- Modify: `app/globals.css`
- Modify: `styles/globals.css`

- [ ] **Step 1: Update `app/globals.css` with new color palette and font**

Replace the entire file with:

```css
@import "tailwindcss";

:root {
  --background: #0A0A0A;
  --foreground: #E0E0E0;
  --brand-base: #0A0A0A;
  --brand-surface: #1A1A1A;
  --brand-border: #2A2A2A;
  --brand-text: #E0E0E0;
  --brand-heading: #FFFFFF;
  --brand-accent: #4ADE40;
  --brand-accent-hover: #3BCF31;
  --brand-warm: #F59E0B;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-brand-base: var(--brand-base);
  --color-brand-surface: var(--brand-surface);
  --color-brand-border: var(--brand-border);
  --color-brand-text: var(--brand-text);
  --color-brand-heading: var(--brand-heading);
  --color-brand-accent: var(--brand-accent);
  --color-brand-accent-hover: var(--brand-accent-hover);
  --color-brand-warm: var(--brand-warm);
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
```

- [ ] **Step 2: Update `styles/globals.css` with new fonts and utility classes**

Replace the entire file with:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: #0A0A0A;
  color: #E0E0E0;
  line-height: 1.7;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #FFFFFF;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Accent underline utility */
.accent-line {
  display: inline-block;
  position: relative;
}
.accent-line::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 60px;
  height: 3px;
  background: #4ADE40;
}

/* Dark form inputs */
.dark-input {
  width: 100%;
  padding: 12px 16px;
  background: #1A1A1A;
  border: 1px solid #2A2A2A;
  border-radius: 8px;
  color: #E0E0E0;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: border-color 0.2s;
}
.dark-input:focus {
  outline: none;
  border-color: #4ADE40;
}
.dark-input::placeholder {
  color: #666;
}

/* Dark select styling */
.dark-select {
  width: 100%;
  padding: 12px 16px;
  background: #1A1A1A;
  border: 1px solid #2A2A2A;
  border-radius: 8px;
  color: #E0E0E0;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  transition: border-color 0.2s;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234ADE40' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
}
.dark-select:focus {
  outline: none;
  border-color: #4ADE40;
}
```

- [ ] **Step 3: Update `app/layout.tsx` body classes**

Change the body className from:
```
bg-brand-cream text-brand-text
```
to:
```
bg-brand-base text-brand-text
```

Full updated body tag:
```tsx
<body className="min-h-full flex flex-col bg-brand-base text-brand-text">
```

- [ ] **Step 4: Run dev server and verify dark background loads**

Run: `npm run dev`
Expected: Site loads with black background, light text, no build errors.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css styles/globals.css app/layout.tsx
git commit -m "feat: update global theme to Dark & Electric palette"
```

---

### Task 2: Update Button Component

**Files:**
- Modify: `components/common/Button.tsx`

- [ ] **Step 1: Update Button variants to new palette**

Replace the entire file with:

```tsx
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-semibold rounded-lg transition-all duration-200 cursor-pointer tracking-wide',
        variant === 'primary' &&
          'bg-brand-accent text-brand-base hover:bg-brand-accent-hover',
        variant === 'secondary' &&
          'bg-brand-surface text-brand-heading border border-brand-border hover:border-brand-accent',
        variant === 'outline' &&
          'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-base',
        size === 'sm' && 'px-5 py-2.5 text-sm',
        size === 'md' && 'px-7 py-3',
        size === 'lg' && 'px-9 py-4 text-lg',
        className
      )}
      {...props}
    />
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/common/Button.tsx
git commit -m "feat: update Button component to Dark & Electric theme"
```

---

### Task 3: Redesign Header

**Files:**
- Modify: `components/layout/Header.tsx`

- [ ] **Step 1: Replace Header with redesigned version**

Replace the entire file with:

```tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/menu', label: 'Menu' },
    { href: '/catering', label: 'Catering' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-base/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-brand-base'
      } border-b border-brand-border`}
    >
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo 2.jpg"
            alt="Sean Mark's Cuisine"
            width={140}
            height={56}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.15em] text-brand-text hover:text-brand-accent transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex gap-4 items-center">
          <Link
            href="/cart"
            className="text-brand-text hover:text-brand-accent transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </Link>

          <button
            className="md:hidden text-brand-text hover:text-brand-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-brand-base/98 backdrop-blur-lg z-40">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl uppercase tracking-[0.2em] text-brand-text hover:text-brand-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Add top padding to main content to account for fixed header**

In `app/layout.tsx`, update the main tag:

Change:
```tsx
<main className="flex-1">{children}</main>
```
to:
```tsx
<main className="flex-1 pt-[73px]">{children}</main>
```

- [ ] **Step 3: Verify header renders with logo and nav**

Run dev server and check:
- Logo image loads in header
- Nav links have green underline on hover
- Header has blur effect on scroll
- Mobile menu opens as full-screen overlay

- [ ] **Step 4: Commit**

```bash
git add components/layout/Header.tsx app/layout.tsx
git commit -m "feat: redesign header with logo, fixed position, and mobile overlay"
```

---

### Task 4: Redesign Footer

**Files:**
- Modify: `components/layout/Footer.tsx`

- [ ] **Step 1: Replace Footer with redesigned version**

Replace the entire file with:

```tsx
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-brand-base border-t border-brand-accent/20 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image
              src="/Logo 2.jpg"
              alt="Sean Mark's Cuisine"
              width={120}
              height={48}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-brand-text/70 leading-relaxed">
              Crafting culinary experiences with heart and precision.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-brand-heading font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { href: '/menu', label: 'Weekly Menu' },
                { href: '/catering', label: 'Catering' },
                { href: '/events', label: 'Events' },
                { href: '/faq', label: 'FAQ' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-text/60 hover:text-brand-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-brand-heading font-semibold mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-brand-text/60">
              <p>233 Main St, Lebanon, NJ 08833</p>
              <p>(908) 505-8050</p>
              <p>hello@seanmarkscuisine.com</p>
            </div>
            <div className="flex gap-4 mt-6">
              {[
                { href: 'https://instagram.com/seanmarkscuisine', label: 'Instagram', icon: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z' },
                { href: 'https://facebook.com/seanmarkscuisine', label: 'Facebook', icon: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { href: 'https://tiktok.com/@seanmarkscuisine', label: 'TikTok', icon: 'M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-brand-text/40 hover:text-brand-accent transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 text-center text-xs text-brand-text/40">
          <p>&copy; 2026 Sean Mark&apos;s Cuisine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Remove `mt-20` from footer if still present (it's in the current version)**

The new footer has no `mt-20` -- the page content provides its own spacing.

- [ ] **Step 3: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: redesign footer with logo, SVG social icons, and dark theme"
```

---

### Task 5: Redesign Homepage

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace homepage with redesigned version**

Replace the entire file with:

```tsx
import { Button } from '@/components/common/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section - Full Viewport */}
      <section className="min-h-[calc(100vh-73px)] flex flex-col items-center justify-center text-center px-6 relative">
        <Image
          src="/Logo 2.jpg"
          alt="Sean Mark's Cuisine"
          width={400}
          height={400}
          className="w-64 md:w-80 h-auto mb-10"
          priority
        />
        <p className="text-lg md:text-xl text-brand-text/80 mb-10 max-w-lg">
          Crafting culinary experiences with heart and precision
        </p>
        <Link href="/menu">
          <Button variant="primary" size="lg">
            View This Week&apos;s Menu
          </Button>
        </Link>
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-brand-accent/60"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-brand-surface">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-brand-heading">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Weekly Menu',
                desc: 'Fresh, chef-prepared meals delivered to your door every week',
                icon: 'M3 3h18v18H3zM12 8v8M8 12h8',
              },
              {
                title: 'Catering',
                desc: 'Custom menus for your events, from intimate dinners to large gatherings',
                icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z',
              },
              {
                title: 'Private Events',
                desc: 'Exclusive dining experiences, cooking classes, and pop-up dinners',
                icon: 'M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zM12 8v4M12 16h.01',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="border-t-2 border-brand-accent/40 pt-8 px-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-brand-accent mb-6"
                >
                  <path d={card.icon} />
                </svg>
                <h3 className="text-xl font-bold text-brand-heading mb-3">
                  {card.title}
                </h3>
                <p className="text-brand-text/70 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-24">
        <div className="container">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-heading">
              Featured This Week
            </h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Brown Chicken Stew',
                desc: 'West Indian style with authentic spices',
                price: '$14',
              },
              {
                name: 'Chorizo-Cheese Rice Bowl',
                desc: 'Hearty, flavorful, and satisfying',
                price: '$12',
              },
              {
                name: 'Wild Mushroom Polenta',
                desc: 'Vegetarian delight with umami depth',
                price: '$11',
              },
            ].map((dish) => (
              <div
                key={dish.name}
                className="bg-brand-surface rounded-lg p-8 border border-brand-border hover:border-brand-accent/40 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-brand-heading mb-2">
                  {dish.name}
                </h3>
                <p className="text-brand-text/60 text-sm mb-4">{dish.desc}</p>
                <p className="text-brand-accent font-bold text-lg">{dish.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/menu">
              <Button variant="outline">See Full Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-surface">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-brand-heading">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria',
                text: "The freshest meals I've ever had. Absolutely delicious!",
              },
              {
                name: 'James',
                text: 'Perfect for busy weeknights. Amazing quality and flavor.',
              },
              {
                name: 'Sarah',
                text: "Sean's passion for food is evident in every dish.",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="relative pl-8">
                <span className="absolute top-0 left-0 text-4xl text-brand-accent/40 font-serif leading-none">
                  &ldquo;
                </span>
                <p className="text-brand-text/80 mb-4 italic leading-relaxed">
                  {testimonial.text}
                </p>
                <p className="text-sm font-semibold text-brand-accent">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5" />
        <div className="container text-center relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-heading">
            Ready to Experience Sean&apos;s Cooking?
          </h2>
          <p className="text-brand-text/70 mb-10 text-lg">
            Order this week&apos;s menu or book catering for your next event
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/menu">
              <Button variant="primary" size="lg">
                Order This Week&apos;s Menu
              </Button>
            </Link>
            <Link href="/catering">
              <Button variant="outline" size="lg">
                Book Catering
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Verify homepage in browser**

Check:
- Full-height hero with centered logo
- Scroll indicator animates
- "What We Do" cards have green top borders and SVG icons
- Featured dishes show on dark cards with green prices
- Testimonials have green quotation marks
- CTA section has subtle green gradient glow

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: redesign homepage with Dark & Electric theme"
```

---

### Task 6: Redesign About Page

**Files:**
- Modify: `app/about/page.tsx`

- [ ] **Step 1: Replace About page with redesigned version**

Replace the entire file with:

```tsx
import Image from 'next/image';
import { Button } from '@/components/common/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 md:py-32 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-heading mb-6">
            Meet Sean Mark
          </h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Chef, creator, and passionate about bringing people together through food
          </p>
        </div>
      </section>

      {/* Chef Photo / Logo Placeholder */}
      <section className="pb-16">
        <div className="container flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-brand-accent/30 flex items-center justify-center bg-brand-surface">
            <Image
              src="/Logo 2.jpg"
              alt="Sean Mark's Cuisine"
              width={240}
              height={240}
              className="w-48 md:w-56 h-auto"
            />
          </div>
        </div>
      </section>

      {/* The Chef's Story */}
      <section className="py-20 bg-brand-surface">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-heading">
              The Chef&apos;s Story
            </h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="space-y-6 text-brand-text/80 text-lg leading-relaxed">
            <p>
              Sean Mark&apos;s Cuisine was born from a simple belief: great food should bring people together. With years of culinary experience and a passion for West Indian and contemporary cooking, Sean creates dishes that nourish both body and soul.
            </p>
            <p>
              Every meal is crafted with intention, using fresh ingredients and time-honored techniques. Whether it&apos;s a weeknight dinner for your family or an intimate gathering with friends, Sean&apos;s cooking celebrates flavor, quality, and the joy of sharing a table.
            </p>
            <p>
              At Sean Mark&apos;s Cuisine, we believe that food is more than sustenance &mdash; it&apos;s an experience, a memory, and an expression of care.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Culinary Style */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-extrabold text-brand-heading mb-8">
                Philosophy
              </h3>
              <ul className="space-y-6">
                {[
                  { title: 'Fresh Ingredients', desc: 'Sourcing the finest seasonal ingredients' },
                  { title: 'Cooked with Heart', desc: 'Every dish prepared with care and passion' },
                  { title: 'Global Flavors', desc: 'West Indian roots with contemporary influences' },
                ].map((item) => (
                  <li key={item.title} className="flex gap-4 items-start">
                    <span className="mt-2 w-2 h-2 rounded-full bg-brand-accent flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-brand-heading">{item.title}</p>
                      <p className="text-brand-text/60 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-brand-heading mb-8">
                Culinary Style
              </h3>
              <div className="space-y-4 text-brand-text/70 leading-relaxed">
                <p>
                  Sean&apos;s cooking is rooted in West Indian traditions with influences from contemporary cuisine. He believes in letting quality ingredients speak for themselves, while building complex, satisfying flavors through technique and intuition.
                </p>
                <p>
                  From comfort food classics to innovative dishes, each meal tells a story and celebrates the joy of gathering around the table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience - Timeline */}
      <section className="py-20 bg-brand-surface">
        <div className="container max-w-3xl">
          <h3 className="text-2xl font-extrabold text-brand-heading mb-12">
            Experience
          </h3>
          <div className="relative pl-8 border-l-2 border-brand-accent/30 space-y-12">
            {[
              { title: 'Professional Chef', desc: 'Years of culinary excellence in diverse kitchen environments' },
              { title: 'Menu Development', desc: 'Creating innovative weekly menus that balance flavor, nutrition, and variety' },
              { title: 'Continuous Learning', desc: 'Always exploring new techniques, ingredients, and culinary trends' },
            ].map((item) => (
              <div key={item.title} className="relative">
                <span className="absolute -left-[13px] top-1 w-3 h-3 rounded-full bg-brand-accent border-2 border-brand-base" />
                <p className="font-bold text-brand-heading text-lg">{item.title}</p>
                <p className="text-brand-text/60 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5" />
        <div className="container text-center relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-heading">
            Ready to Experience Sean&apos;s Cooking?
          </h2>
          <p className="text-brand-text/70 mb-10 text-lg">
            Order this week&apos;s menu or inquire about catering
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/menu">
              <Button variant="primary" size="lg">
                Browse Menu
              </Button>
            </Link>
            <Link href="/catering">
              <Button variant="outline" size="lg">
                Learn About Catering
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: redesign About page with timeline, green accents, no emojis"
```

---

### Task 7: Redesign Menu Page

**Files:**
- Modify: `app/menu/page.tsx`
- Modify: `app/menu/components/MenuItemCard.tsx`

- [ ] **Step 1: Read MenuItemCard to understand its interface**

Read `app/menu/components/MenuItemCard.tsx` to understand the props it takes.

- [ ] **Step 2: Replace MenuItemCard with dark-themed version**

Replace the entire file with:

```tsx
'use client';

interface MenuItemCardProps {
  id: string;
  name: string;
  description: string;
  halfPortionPrice: number;
  fullPortionPrice: number;
  isSoldOut: boolean;
}

export function MenuItemCard({
  name,
  description,
  halfPortionPrice,
  fullPortionPrice,
  isSoldOut,
}: MenuItemCardProps) {
  return (
    <div className={`bg-brand-surface rounded-lg p-6 border border-brand-border hover:border-brand-accent/40 transition-colors duration-300 ${isSoldOut ? 'opacity-50' : ''}`}>
      <h3 className="text-lg font-bold text-brand-heading mb-2">{name}</h3>
      <p className="text-brand-text/60 text-sm mb-6">{description}</p>

      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-xs text-brand-text/40 uppercase tracking-wider">Half</p>
          <p className="text-brand-accent font-bold">${(halfPortionPrice / 100).toFixed(2)}</p>
        </div>
        <div className="space-y-1 text-right">
          <p className="text-xs text-brand-text/40 uppercase tracking-wider">Full</p>
          <p className="text-brand-accent font-bold">${(fullPortionPrice / 100).toFixed(2)}</p>
        </div>
      </div>

      <button
        className={`w-full mt-6 px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
          isSoldOut
            ? 'border border-brand-border text-brand-text/40 cursor-not-allowed'
            : 'border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-base cursor-pointer'
        }`}
        disabled={isSoldOut}
      >
        {isSoldOut ? 'Sold Out' : 'Add to Cart'}
      </button>
    </div>
  );
}
```

- [ ] **Step 3: Replace Menu page with dark-themed version**

Replace `app/menu/page.tsx` entirely with:

```tsx
import { MenuItemCard } from './components/MenuItemCard';

export default function MenuPage() {
  const currentWeek = {
    weekStart: 'April 14',
    weekEnd: 'April 20',
    cutoffDate: 'Saturday, April 19 at Midnight',
  };

  const menuItems = [
    { id: '1', name: 'Brown Chicken Stew', description: 'West Indian style with authentic spices and tender chicken', halfPortionPrice: 1200, fullPortionPrice: 1800, isSoldOut: false },
    { id: '2', name: 'Chorizo-Cheese Rice Bowl', description: 'Hearty and flavorful combination with Spanish rice', halfPortionPrice: 1100, fullPortionPrice: 1600, isSoldOut: false },
    { id: '3', name: 'Wild Mushroom Polenta', description: 'Vegetarian delight with umami depth and earthy flavors', halfPortionPrice: 1000, fullPortionPrice: 1500, isSoldOut: false },
    { id: '4', name: 'Cowboy Skillet', description: 'Hearty beef, potatoes, and vegetables in a savory sauce', halfPortionPrice: 1300, fullPortionPrice: 1900, isSoldOut: false },
    { id: '5', name: 'Shrimp Boil', description: 'Fresh shrimp with potatoes, corn, and Cajun spices', halfPortionPrice: 1400, fullPortionPrice: 2000, isSoldOut: false },
    { id: '6', name: 'Baked Ziti', description: 'Classic pasta with rich tomato sauce and melted cheese', halfPortionPrice: 900, fullPortionPrice: 1400, isSoldOut: true },
  ];

  const addOns = [
    { id: 'addon-1', name: 'French Onion Soup', price: 600 },
    { id: 'addon-2', name: 'Asian Crunch Salad', price: 700 },
    { id: 'addon-3', name: 'Boneless Wings', price: 800 },
    { id: 'addon-4', name: 'Caesar Salad', price: 700 },
    { id: 'addon-5', name: 'Garden Salad', price: 600 },
  ];

  const desserts = [
    { id: 'dessert-1', name: 'Raspberry Birthday Cake', price: 500 },
    { id: 'dessert-2', name: 'Cheesecake Brownies', price: 450 },
    { id: 'dessert-3', name: 'Fresh Cookies', price: 300 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-16 border-b border-brand-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-heading mb-3">
            This Week&apos;s Menu
          </h1>
          <p className="text-lg text-brand-text/70">
            {currentWeek.weekStart} &ndash; {currentWeek.weekEnd}
          </p>
          <p className="text-sm text-brand-accent mt-2">
            Order cutoff: {currentWeek.cutoffDate}
          </p>
        </div>
      </section>

      {/* Main Dishes */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-extrabold text-brand-heading">Main Dishes</h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <MenuItemCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 bg-brand-surface">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-extrabold text-brand-heading">Add-Ons</h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {addOns.map((addon) => (
              <div key={addon.id} className="bg-brand-base rounded-lg p-5 border border-brand-border hover:border-brand-accent/40 transition-colors">
                <p className="font-semibold text-brand-heading text-sm mb-2">{addon.name}</p>
                <p className="text-brand-accent font-bold mb-4">${(addon.price / 100).toFixed(2)}</p>
                <button className="w-full px-3 py-2 border border-brand-accent text-brand-accent rounded-lg hover:bg-brand-accent hover:text-brand-base transition-all text-sm font-semibold cursor-pointer">
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desserts */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-extrabold text-brand-heading">Desserts</h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {desserts.map((dessert) => (
              <div key={dessert.id} className="bg-brand-surface rounded-lg p-6 border border-brand-border hover:border-brand-accent/40 transition-colors">
                <p className="font-semibold text-brand-heading mb-2">{dessert.name}</p>
                <p className="text-brand-accent font-bold mb-4">${(dessert.price / 100).toFixed(2)}</p>
                <button className="w-full px-4 py-2.5 border border-brand-accent text-brand-accent rounded-lg hover:bg-brand-accent hover:text-brand-base transition-all font-semibold cursor-pointer">
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      <section className="py-16 bg-brand-surface border-t border-brand-border">
        <div className="container">
          <div className="max-w-md mx-auto bg-brand-base p-8 rounded-lg border border-brand-border">
            <h3 className="text-2xl font-extrabold mb-6 text-brand-heading">Cart Summary</h3>
            <div className="mb-6 pb-6 border-b border-brand-border">
              <p className="text-brand-text/60 mb-2">
                Items in cart: <span className="font-semibold text-brand-heading">0</span>
              </p>
              <p className="text-brand-text/60 mb-2">
                Subtotal: <span className="font-semibold text-brand-heading">$0.00</span>
              </p>
              <p className="text-xs text-brand-text/40 mb-4">$40 minimum order</p>
              <div className="w-full bg-brand-border rounded-full h-1.5">
                <div className="bg-brand-accent h-1.5 rounded-full" style={{ width: '0%' }} />
              </div>
            </div>
            <button className="w-full px-4 py-3 bg-brand-accent text-brand-base rounded-lg font-semibold hover:bg-brand-accent-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer" disabled>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
git add app/menu/page.tsx app/menu/components/MenuItemCard.tsx
git commit -m "feat: redesign Menu page and MenuItemCard with dark theme"
```

---

### Task 8: Redesign Catering Page

**Files:**
- Modify: `app/catering/page.tsx`

- [ ] **Step 1: Replace catering page with redesigned version**

Replace the entire file with:

```tsx
'use client';

import { useState } from 'react';
import { Button } from '@/components/common/Button';

export default function CateringPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', eventDate: '', guestCount: '',
    eventType: '', dietaryRestrictions: '', budgetRange: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Catering inquiry:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', eventDate: '', guestCount: '', eventType: '', dietaryRestrictions: '', budgetRange: '', message: '' });
  };

  const eventTypes = ['Wedding', 'Corporate Event', 'Birthday Party', 'Family Gathering', 'Holiday Party', 'Private Dinner', 'Other'];
  const budgetRanges = ['Under $500', '$500 - $1,000', '$1,000 - $2,500', '$2,500 - $5,000', 'Over $5,000'];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-heading mb-6">
            Event Catering
          </h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Let Sean Mark&apos;s Cuisine transform your gathering with expertly crafted meals
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-surface">
        <div className="container">
          <h2 className="text-3xl font-extrabold text-center mb-16 text-brand-heading">
            Why Choose Our Catering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Professional Chef', desc: 'Years of experience creating memorable meals', icon: 'M12 2a4 4 0 0 0-4 4c0 2 2 3 2 5h4c0-2 2-3 2-5a4 4 0 0 0-4-4zM8 13v2h8v-2H8zm1 4v1a3 3 0 0 0 6 0v-1H9z' },
              { title: 'Customized Menus', desc: 'Tailored to your event, preferences, and dietary needs', icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 5h6M9 14l2 2 4-4' },
              { title: 'Flawless Execution', desc: 'Every detail handled with care and precision', icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z' },
            ].map((card) => (
              <div key={card.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-brand-accent/30 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent">
                    <path d={card.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-brand-heading mb-2">{card.title}</h3>
                <p className="text-brand-text/60 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Menus */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-extrabold text-brand-heading">Sample Menus</h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'West Indian Feast', description: 'Authentic Caribbean flavors and traditional dishes', items: ['Brown Chicken Stew', 'Plantain Sides', 'Fresh Salads', 'Tropical Desserts'] },
              { title: 'Contemporary Elegance', description: 'Modern cuisine with upscale presentation', items: ['Shrimp Boil', 'Polenta Dishes', 'Seasonal Vegetables', 'Gourmet Desserts'] },
              { title: 'Comfort Classics', description: 'Beloved favorites that satisfy everyone', items: ['Baked Ziti', 'Cowboy Skillet', 'Vegetarian Options', 'Classic Desserts'] },
              { title: 'Custom Creation', description: 'Work with Sean to build your perfect menu', items: ['Your Preferences', 'Dietary Accommodations', 'Signature Dishes', 'Special Requests'] },
            ].map((menu) => (
              <div key={menu.title} className="bg-brand-surface rounded-lg p-8 border border-brand-border hover:border-brand-accent/40 transition-colors">
                <h3 className="text-xl font-bold text-brand-heading mb-2">{menu.title}</h3>
                <p className="text-brand-text/60 text-sm mb-6">{menu.description}</p>
                <ul className="space-y-3">
                  {menu.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-brand-text/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-brand-surface">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-brand-heading">
            Request a Catering Quote
          </h2>

          <form onSubmit={handleSubmit} className="bg-brand-base p-8 md:p-10 rounded-lg border border-brand-border space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-text/70 mb-2">Your Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="dark-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text/70 mb-2">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="dark-input" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text/70 mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="dark-input" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-text/70 mb-2">Event Date *</label>
                <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required className="dark-input" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text/70 mb-2">Guest Count *</label>
                <input type="number" name="guestCount" value={formData.guestCount} onChange={handleChange} min="10" required className="dark-input" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text/70 mb-2">Type of Event *</label>
              <select name="eventType" value={formData.eventType} onChange={handleChange} required className="dark-select">
                <option value="">Select an event type</option>
                {eventTypes.map(type => (<option key={type} value={type}>{type}</option>))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text/70 mb-2">Dietary Restrictions / Allergies</label>
              <input type="text" name="dietaryRestrictions" value={formData.dietaryRestrictions} onChange={handleChange} placeholder="e.g., vegan, nut allergies, gluten-free" className="dark-input" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text/70 mb-2">Budget Range *</label>
              <select name="budgetRange" value={formData.budgetRange} onChange={handleChange} required className="dark-select">
                <option value="">Select your budget</option>
                {budgetRanges.map(range => (<option key={range} value={range}>{range}</option>))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-text/70 mb-2">Additional Details</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Tell us about your vision for the event..." className="dark-input" />
            </div>

            <Button variant="primary" size="lg" className="w-full">
              Request Quote
            </Button>
            <p className="text-xs text-brand-text/40 text-center">
              Sean will contact you within 24 hours to discuss your event
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/catering/page.tsx
git commit -m "feat: redesign Catering page with dark forms and SVG icons"
```

---

### Task 9: Redesign Events Page

**Files:**
- Modify: `app/events/page.tsx`

- [ ] **Step 1: Replace events page with redesigned version**

Replace the entire file with:

```tsx
import Link from 'next/link';
import { Button } from '@/components/common/Button';

export default function EventsPage() {
  const events = [
    { id: '1', title: 'West Indian Night Dinner', description: 'An evening celebrating authentic Caribbean flavors and traditions', date: 'April 26, 2026', time: '6:00 PM', price: 4500, capacity: 20, registered: 8 },
    { id: '2', title: 'Cooking Class: Technique & Flavors', description: 'Learn professional cooking techniques from Chef Sean Mark', date: 'May 3, 2026', time: '2:00 PM', price: 7500, capacity: 12, registered: 5 },
    { id: '3', title: 'Farm-to-Table Spring Tasting', description: 'Multi-course dinner celebrating seasonal, fresh ingredients', date: 'May 10, 2026', time: '7:00 PM', price: 6000, capacity: 25, registered: 12 },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-heading mb-6">
            Special Events
          </h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Exclusive dinners, cooking classes, and culinary experiences
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-brand-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => {
              const spotsLeft = event.capacity - event.registered;
              const isSoldOut = spotsLeft <= 0;

              return (
                <div key={event.id} className="bg-brand-base rounded-lg border border-brand-border hover:border-brand-accent/40 transition-colors overflow-hidden">
                  <div className="p-8">
                    {/* Date Badge */}
                    <div className="inline-block px-3 py-1 rounded bg-brand-accent/10 text-brand-accent text-xs font-semibold uppercase tracking-wider mb-4">
                      {event.date}
                    </div>

                    <h3 className="text-xl font-bold text-brand-heading mb-3">{event.title}</h3>
                    <p className="text-brand-text/60 text-sm mb-6">{event.description}</p>

                    <div className="space-y-3 text-sm mb-6 pb-6 border-b border-brand-border">
                      <div className="flex justify-between">
                        <span className="text-brand-text/40">Time</span>
                        <span className="text-brand-text/80">{event.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-text/40">Price</span>
                        <span className="text-brand-accent font-semibold">${(event.price / 100).toFixed(2)} / person</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-text/40">Availability</span>
                        <span className={isSoldOut ? 'text-red-400 font-semibold' : 'text-brand-text/80'}>
                          {isSoldOut ? 'Sold Out' : `${spotsLeft} spots left`}
                        </span>
                      </div>
                    </div>

                    <Link href={`/events/${event.id}`}>
                      <Button
                        variant={isSoldOut ? 'secondary' : 'primary'}
                        size="md"
                        className="w-full"
                        disabled={isSoldOut}
                      >
                        {isSoldOut ? 'Sold Out' : 'Learn More'}
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-brand-heading">Stay in the Loop</h2>
          <p className="text-brand-text/70 mb-8">Subscribe for event announcements</p>
          <div className="flex gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="dark-input flex-1"
            />
            <Button variant="primary">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/events/page.tsx
git commit -m "feat: redesign Events page with date badges and dark cards"
```

---

### Task 10: Redesign Gallery Page

**Files:**
- Modify: `app/gallery/page.tsx`

- [ ] **Step 1: Replace gallery page with redesigned version**

Replace the entire file with:

```tsx
import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: "Gallery | Sean Mark's Cuisine",
  description: 'Browse our stunning collection of freshly prepared meals and catered events.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-heading mb-6">
            Our Work
          </h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Every plate tells a story. Browse our gallery of fresh, authentic cuisine prepared with passion and precision.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-brand-surface">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5" />
        <div className="container text-center relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-heading">
            Ready to Experience This?
          </h2>
          <p className="text-brand-text/70 mb-10 text-lg">
            Order from our weekly menu or inquire about catering for your next event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/menu">
              <button className="px-8 py-3 bg-brand-accent text-brand-base font-semibold rounded-lg hover:bg-brand-accent-hover transition-colors cursor-pointer">
                Browse Menu
              </button>
            </a>
            <a href="/catering">
              <button className="px-8 py-3 border-2 border-brand-accent text-brand-accent font-semibold rounded-lg hover:bg-brand-accent hover:text-brand-base transition-all cursor-pointer">
                Catering Inquiry
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/gallery/page.tsx
git commit -m "feat: redesign Gallery page with dark theme"
```

---

### Task 11: Redesign Contact Page

**Files:**
- Modify: `app/contact/page.tsx`

- [ ] **Step 1: Read ContactForm component to understand its interface**

Read `components/contact/ContactForm.tsx` to understand what it renders.

- [ ] **Step 2: Replace contact page with redesigned version**

Replace the entire file with:

```tsx
import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | Sean Mark's Cuisine",
  description: "Get in touch with Sean Mark's Cuisine. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-heading mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Have a question about our menu, catering services, or want to place an order? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-brand-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-brand-base rounded-lg p-8 md:p-10 border border-brand-border">
                <h2 className="text-2xl font-extrabold text-brand-heading mb-8">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {[
                {
                  title: 'Phone',
                  content: <a href="tel:+19085058050" className="text-brand-text/70 hover:text-brand-accent transition-colors">(908) 505-8050</a>,
                  icon: 'M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z',
                },
                {
                  title: 'Email',
                  content: <a href="mailto:hello@seanmarkscuisine.com" className="text-brand-text/70 hover:text-brand-accent transition-colors">hello@seanmarkscuisine.com</a>,
                  icon: 'M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z',
                },
                {
                  title: 'Location',
                  content: <p className="text-brand-text/70">233 Main St, Lebanon, NJ 08833</p>,
                  icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0zM15 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0z',
                },
                {
                  title: 'Hours',
                  content: (
                    <div className="text-brand-text/70 space-y-1 text-sm">
                      <p>Tue - Fri: 9am - 6pm</p>
                      <p>Sat: 10am - 4pm</p>
                      <p>Sun - Mon: Closed</p>
                    </div>
                  ),
                  icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z',
                },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm uppercase tracking-[0.15em] font-semibold text-brand-heading mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent">
                      <path d={item.icon} />
                    </svg>
                    {item.title}
                  </h3>
                  {item.content}
                </div>
              ))}

              {/* Social */}
              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] font-semibold text-brand-heading mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { href: 'https://instagram.com/seanmarkscuisine', label: 'Instagram' },
                    { href: 'https://facebook.com/seanmarkscuisine', label: 'Facebook' },
                    { href: 'https://tiktok.com/@seanmarkscuisine', label: 'TikTok' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-brand-border text-brand-text/60 text-sm hover:border-brand-accent hover:text-brand-accent transition-colors"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container">
          <h2 className="text-3xl font-extrabold mb-4 text-brand-heading">Prefer to Order?</h2>
          <p className="text-brand-text/70 mb-8">Browse our weekly menu and place your order directly.</p>
          <a href="/menu">
            <button className="px-8 py-3 bg-brand-accent text-brand-base font-semibold rounded-lg hover:bg-brand-accent-hover transition-colors cursor-pointer">
              Browse Menu
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: redesign Contact page with dark theme and SVG icons"
```

---

### Task 12: Redesign FAQ Page

**Files:**
- Modify: `app/faq/page.tsx`

- [ ] **Step 1: Replace FAQ page with redesigned version**

Replace the entire file with:

```tsx
import type { Metadata } from 'next';
import FAQAccordion from '@/components/faq/FAQAccordion';

export const metadata: Metadata = {
  title: "FAQ | Sean Mark's Cuisine",
  description: 'Frequently asked questions about ordering, catering, delivery, and dietary options.',
};

const faqCategories = [
  {
    title: 'Ordering & Menu',
    items: [
      { id: 'q1', question: 'How do I place an order?', answer: "Simply browse our weekly menu on the Menu page, select your items, and proceed to checkout. Orders must be placed by Friday 5 PM for the following week's delivery." },
      { id: 'q2', question: 'What is the minimum order amount?', answer: 'The minimum order is $40. This ensures we can prepare and deliver your meals efficiently while maintaining the highest quality.' },
      { id: 'q3', question: 'Can I customize my portions?', answer: 'Yes! Each menu item offers half-portion and full-portion options. Half portions are perfect for lighter appetites or trying multiple dishes.' },
      { id: 'q4', question: 'How often does the menu change?', answer: "Our menu rotates weekly to bring you fresh, seasonal ingredients and variety. Check back every Monday to see what's new for the upcoming week." },
    ],
  },
  {
    title: 'Delivery & Pickup',
    items: [
      { id: 'q5', question: 'Do you offer delivery?', answer: 'Yes, we deliver throughout the Lebanon, NJ area. Delivery is available Tuesday through Friday. Delivery fees vary based on location.' },
      { id: 'q6', question: 'Can I pick up my order?', answer: "Absolutely! Local pickup is available at our kitchen location. Just select pickup during checkout and we'll have your order ready." },
      { id: 'q7', question: 'How long do meals stay fresh?', answer: 'All meals are prepared fresh and come in insulated packaging. Store in the refrigerator and consume within 3-4 days for best quality. Meals can be frozen for up to 1 month.' },
    ],
  },
  {
    title: 'Dietary & Allergies',
    items: [
      { id: 'q8', question: 'Do you accommodate dietary restrictions?', answer: 'Yes, we take dietary restrictions seriously. We can modify many dishes for vegetarian, vegan, gluten-free, and other needs. Please note your restrictions at checkout or contact us.' },
      { id: 'q9', question: 'Is your food allergen-free?', answer: 'While we handle many allergens in our kitchen, we work hard to prevent cross-contamination. For severe allergies, please contact us directly to discuss your specific needs.' },
      { id: 'q10', question: 'Are there vegan or vegetarian options?', answer: "Yes! Our menu typically includes vegetarian and vegan options each week. They're clearly labeled on the menu. For special requests beyond what's listed, contact us." },
    ],
  },
  {
    title: 'Catering & Events',
    items: [
      { id: 'q11', question: 'What is the minimum for catering orders?', answer: 'Catering orders have a minimum of 10 guests. We offer fully customized menus and service options to match your event perfectly.' },
      { id: 'q12', question: 'How far in advance should I book catering?', answer: 'We recommend booking catering at least 2 weeks in advance to ensure your preferred menu and date. Rush orders may be accommodated - contact us to discuss.' },
      { id: 'q13', question: 'What types of events do you cater?', answer: 'We cater corporate events, private dinners, celebrations, weddings, family gatherings, and more. Each event is handled with professional service and chef-prepared cuisine.' },
    ],
  },
  {
    title: 'Payment & Policies',
    items: [
      { id: 'q14', question: 'What payment methods do you accept?', answer: 'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and digital payment methods through our secure checkout.' },
      { id: 'q15', question: 'What is your cancellation policy?', answer: 'For weekly orders, cancellations must be made by Friday 5 PM before your delivery week. For catering orders, cancellations within 48 hours may incur a fee.' },
      { id: 'q16', question: 'Do you offer refunds?', answer: "We stand behind the quality of our food. If you're unsatisfied, contact us immediately. We'll make it right with replacements or refunds." },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-28 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-heading mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">
            Find answers to common questions about ordering, delivery, catering, and more.{' '}
            <a href="/contact" className="text-brand-accent hover:underline">
              Contact us directly.
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-brand-surface">
        <div className="container max-w-3xl">
          <div className="space-y-16">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-extrabold text-brand-heading">
                    {category.title}
                  </h2>
                  <div className="flex-1 h-px bg-brand-accent/30" />
                </div>
                <FAQAccordion items={category.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="container">
          <h2 className="text-3xl font-extrabold mb-4 text-brand-heading">Still Have Questions?</h2>
          <p className="text-brand-text/70 mb-8">Our team is here to help!</p>
          <a href="/contact">
            <button className="px-8 py-3 bg-brand-accent text-brand-base font-semibold rounded-lg hover:bg-brand-accent-hover transition-colors cursor-pointer">
              Contact Us
            </button>
          </a>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/faq/page.tsx
git commit -m "feat: redesign FAQ page with dark theme and green accent lines"
```

---

### Task 13: Update Sub-Components (FAQAccordion, ContactForm, GalleryGrid)

**Files:**
- Modify: `components/faq/FAQAccordion.tsx`
- Modify: `components/contact/ContactForm.tsx`
- Modify: `components/gallery/GalleryGrid.tsx`

These components render inside the restyled pages. They need their internal styles updated to match the dark theme. Since they may use Tailwind classes referencing old brand colors (`bg-white`, `border-gray-300`, `text-gray-600`, etc.), update them.

- [ ] **Step 1: Read FAQAccordion.tsx**

Read `components/faq/FAQAccordion.tsx` to see current styles.

- [ ] **Step 2: Update FAQAccordion to dark theme**

Replace all instances of light-theme classes:
- `bg-white` -> `bg-brand-base`
- `border-gray-*` -> `border-brand-border`
- `text-gray-*` -> `text-brand-text/70`
- `text-brand-dark` -> `text-brand-heading`
- `hover:bg-gray-*` -> `hover:bg-brand-surface`
- `border-brand-gold` -> `border-brand-accent`
- `text-brand-gold` -> `text-brand-accent`

- [ ] **Step 3: Read ContactForm.tsx**

Read `components/contact/ContactForm.tsx` to see current styles.

- [ ] **Step 4: Update ContactForm to use dark-input classes**

Replace form input classes:
- Change `className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-brand-dark"` to `className="dark-input"`
- Change select elements to use `className="dark-select"`
- Change `bg-white` to `bg-brand-base`
- Change label colors from dark to `text-brand-text/70`
- Update any submit button to use the new Button component or green styling

- [ ] **Step 5: Read GalleryGrid.tsx**

Read `components/gallery/GalleryGrid.tsx` to see current styles.

- [ ] **Step 6: Update GalleryGrid to dark theme**

Replace light-theme classes with dark equivalents as in steps 2/4 above.

- [ ] **Step 7: Commit**

```bash
git add components/faq/FAQAccordion.tsx components/contact/ContactForm.tsx components/gallery/GalleryGrid.tsx
git commit -m "feat: update sub-components (FAQ, Contact, Gallery) to dark theme"
```

---

### Task 14: Final Visual QA and Cleanup

- [ ] **Step 1: Run dev server**

```bash
npm run dev
```

- [ ] **Step 2: Check every page in browser**

Navigate to each page and verify:
- `/` - Homepage renders with dark theme, logo centered in hero
- `/about` - Timeline with green line, no emojis
- `/menu` - Dark cards with green prices
- `/catering` - Dark forms with green focus borders
- `/events` - Date badges, dark cards
- `/gallery` - Dark background gallery
- `/faq` - Dark accordion
- `/contact` - Split layout with dark forms

- [ ] **Step 3: Check mobile responsiveness**

Resize browser to mobile width and verify:
- Mobile hamburger menu works
- All grids stack to single column
- Text is readable
- Forms are usable on mobile

- [ ] **Step 4: Fix any remaining old color references**

Search for any remaining old brand color classes:
- `bg-brand-cream`
- `bg-brand-dark`
- `text-brand-cream`
- `text-brand-dark`
- `bg-brand-gold`
- `text-brand-gold`
- `border-brand-gold`
- `border-brand-cream`
- `bg-white`
- `text-gray-600`
- `text-gray-700`

Replace any found with the new equivalents from the palette.

- [ ] **Step 5: Run build to check for errors**

```bash
npm run build
```

Expected: Build completes with no errors.

- [ ] **Step 6: Commit any fixes**

```bash
git add -A
git commit -m "fix: final cleanup of old color references and visual QA fixes"
```
