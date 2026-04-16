import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/common/Button';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = { title: "Gallery | Sean Mark's Cuisine", description: 'Browse our collection of freshly prepared meals and catered events.' };

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-20 pb-24 text-center">
        <div className="container hero-animate">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-5 font-medium">Portfolio</p>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-heading mb-8 font-normal">Our Work</h1>
          <p className="text-lg text-white/35 max-w-xl mx-auto font-light leading-relaxed">Every plate tells a story. Browse our gallery of fresh, authentic cuisine.</p>
        </div>
      </section>

      <section className="py-20 border-t border-white/[0.04]">
        <div className="container"><GalleryGrid /></div>
      </section>

      <section className="py-36 border-t border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,64,0.02)_0%,transparent_60%)]" />
        <div className="container text-center relative hero-animate">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-brand-heading font-normal">Ready to Experience This?</h2>
          <p className="text-white/35 mb-14 text-lg font-light">Order from our weekly menu or inquire about catering.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/menu"><Button variant="primary" size="lg" className="pulse-glow">Browse Menu</Button></Link>
            <Link href="/catering"><Button variant="outline" size="lg">Catering Inquiry</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
