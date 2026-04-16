import type { Metadata } from 'next';
import GalleryGrid from '@/components/gallery/GalleryGrid';

export const metadata: Metadata = {
  title: 'Gallery | Sean Mark\'s Cuisine',
  description:
    'Browse our stunning collection of freshly prepared meals and catered events. See the artistry behind every dish.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="bg-brand-dark text-brand-cream py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Work
          </h1>
          <p className="text-lg text-brand-cream/90 max-w-2xl">
            Every plate tells a story. Browse our gallery of fresh, authentic
            West Indian cuisine prepared with passion and precision.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <GalleryGrid />
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-dark text-brand-cream py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Experience This?
          </h2>
          <p className="text-lg text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            Order from our weekly menu or inquire about catering for your next
            event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="px-8 py-3 bg-brand-gold text-brand-dark font-medium rounded-lg hover:bg-brand-gold/90 transition-colors text-center"
            >
              Browse Menu
            </a>
            <a
              href="/catering"
              className="px-8 py-3 border-2 border-brand-gold text-brand-gold font-medium rounded-lg hover:bg-brand-gold hover:text-brand-dark transition-colors text-center"
            >
              Catering Inquiry
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
