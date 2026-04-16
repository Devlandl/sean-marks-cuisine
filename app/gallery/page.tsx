import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = { title: "Gallery | Sean Mark's Cuisine", description: 'Browse our collection of freshly prepared meals and catered events.' };

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 text-center">
        <div className="container">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 font-medium">Portfolio</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-heading mb-6 font-normal">Our Work</h1>
          <p className="text-lg text-white/35 max-w-xl mx-auto font-light">Every plate tells a story. Browse our gallery of fresh, authentic cuisine.</p>
        </div>
      </section>
      <section className="py-16 border-t border-white/[0.04]"><div className="container"><GalleryGrid /></div></section>
      <section className="py-32 border-t border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,64,0.02)_0%,transparent_60%)]" />
        <div className="container text-center relative">
          <h2 className="font-serif text-4xl mb-5 text-brand-heading font-normal">Ready to Experience This?</h2>
          <p className="text-white/35 mb-12 font-light">Order from our weekly menu or inquire about catering.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/menu"><button className="px-10 py-4 bg-brand-accent text-brand-base text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-brand-accent-hover hover:shadow-[0_0_30px_rgba(74,222,64,0.15)] transition-all duration-300 cursor-pointer">Browse Menu</button></a>
            <a href="/catering"><button className="px-10 py-4 border border-brand-accent/30 text-brand-accent text-[11px] uppercase tracking-[0.15em] font-medium hover:border-brand-accent/60 hover:bg-brand-accent/[0.05] transition-all duration-300 cursor-pointer">Catering Inquiry</button></a>
          </div>
        </div>
      </section>
    </main>
  );
}
