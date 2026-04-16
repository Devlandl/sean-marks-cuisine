import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: "Gallery | Sean Mark's Cuisine",
  description: 'Browse our stunning collection of freshly prepared meals and catered events.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-28 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-heading mb-6">Our Work</h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">Every plate tells a story. Browse our gallery of fresh, authentic cuisine prepared with passion and precision.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-surface">
        <div className="container"><GalleryGrid /></div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5" />
        <div className="container text-center relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-heading">Ready to Experience This?</h2>
          <p className="text-brand-text/70 mb-10 text-lg">Order from our weekly menu or inquire about catering for your next event.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/menu"><button className="px-8 py-3 bg-brand-accent text-brand-base font-semibold rounded-lg hover:bg-brand-accent-hover transition-colors cursor-pointer">Browse Menu</button></a>
            <a href="/catering"><button className="px-8 py-3 border-2 border-brand-accent text-brand-accent font-semibold rounded-lg hover:bg-brand-accent hover:text-brand-base transition-all cursor-pointer">Catering Inquiry</button></a>
          </div>
        </div>
      </section>
    </main>
  );
}
