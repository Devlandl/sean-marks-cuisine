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
        <div className="absolute bottom-10 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-accent/60">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-brand-surface">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-brand-heading">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Weekly Menu', desc: 'Fresh, chef-prepared meals delivered to your door every week', icon: 'M3 3h18v18H3zM12 8v8M8 12h8' },
              { title: 'Catering', desc: 'Custom menus for your events, from intimate dinners to large gatherings', icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 4-4 4 4 0 0 1-4 4z' },
              { title: 'Private Events', desc: 'Exclusive dining experiences, cooking classes, and pop-up dinners', icon: 'M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zM12 8v4M12 16h.01' },
            ].map((card) => (
              <div key={card.title} className="border-t-2 border-brand-accent/40 pt-8 px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand-accent mb-6">
                  <path d={card.icon} />
                </svg>
                <h3 className="text-xl font-bold text-brand-heading mb-3">{card.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-heading">Featured This Week</h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Brown Chicken Stew', desc: 'West Indian style with authentic spices', price: '$14' },
              { name: 'Chorizo-Cheese Rice Bowl', desc: 'Hearty, flavorful, and satisfying', price: '$12' },
              { name: 'Wild Mushroom Polenta', desc: 'Vegetarian delight with umami depth', price: '$11' },
            ].map((dish) => (
              <div key={dish.name} className="bg-brand-surface rounded-lg p-8 border border-brand-border hover:border-brand-accent/40 transition-colors duration-300">
                <h3 className="text-lg font-bold text-brand-heading mb-2">{dish.name}</h3>
                <p className="text-brand-text/60 text-sm mb-4">{dish.desc}</p>
                <p className="text-brand-accent font-bold text-lg">{dish.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/menu"><Button variant="outline">See Full Menu</Button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-surface">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-brand-heading">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Maria', text: "The freshest meals I've ever had. Absolutely delicious!" },
              { name: 'James', text: 'Perfect for busy weeknights. Amazing quality and flavor.' },
              { name: 'Sarah', text: "Sean's passion for food is evident in every dish." },
            ].map((testimonial) => (
              <div key={testimonial.name} className="relative pl-8">
                <span className="absolute top-0 left-0 text-4xl text-brand-accent/40 font-serif leading-none">&ldquo;</span>
                <p className="text-brand-text/80 mb-4 italic leading-relaxed">{testimonial.text}</p>
                <p className="text-sm font-semibold text-brand-accent">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5" />
        <div className="container text-center relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-heading">Ready to Experience Sean&apos;s Cooking?</h2>
          <p className="text-brand-text/70 mb-10 text-lg">Order this week&apos;s menu or book catering for your next event</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/menu"><Button variant="primary" size="lg">Order This Week&apos;s Menu</Button></Link>
            <Link href="/catering"><Button variant="outline" size="lg">Book Catering</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
