import { Button } from '@/components/common/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,64,0.04)_0%,transparent_60%)]" />
        <div className="relative hero-animate">
          <div className="mb-14 animate-float">
            <Image
              src="/Logo 2.jpg"
              alt="Sean Mark's Cuisine"
              width={280}
              height={280}
              className="w-48 md:w-64 h-auto mx-auto rounded-full"
              priority
            />
          </div>
          <p className="text-base md:text-lg text-white/40 mb-14 max-w-md mx-auto font-light tracking-wide leading-relaxed">
            Crafting culinary experiences<br />with heart and precision
          </p>
          <Link href="/menu">
            <Button variant="primary" size="lg" className="pulse-glow">
              View This Week&apos;s Menu
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/15 to-transparent animate-pulse" />
        </div>
      </section>

      {/* What We Do */}
      <section className="py-36">
        <div className="container">
          <div className="text-center mb-24 hero-animate">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-5 font-medium">What We Offer</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-heading font-normal">Three Ways to Dine</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 stagger-children">
            {[
              { num: '01', title: 'Weekly Menu', desc: 'Fresh, chef-prepared meals delivered to your door every week. New dishes every Monday.' },
              { num: '02', title: 'Catering', desc: 'Custom menus for your events, from intimate dinners to celebrations of any size.' },
              { num: '03', title: 'Private Events', desc: 'Exclusive dining experiences, cooking classes, and curated pop-up dinners.' },
            ].map((card) => (
              <div key={card.title} className="group">
                <span className="text-[11px] tracking-[0.3em] text-brand-accent/40 font-medium">{card.num}</span>
                <h3 className="font-serif text-2xl text-brand-heading mt-4 mb-5 font-normal">{card.title}</h3>
                <p className="text-white/35 leading-relaxed font-light text-[15px]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-36 border-t border-white/[0.04]">
        <div className="container">
          <div className="mb-20">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-5 font-medium">This Week</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-heading font-normal">Featured Dishes</h2>
          </div>
          <div className="stagger-children">
            {[
              { name: 'Brown Chicken Stew', desc: 'West Indian style with authentic spices', price: '$14' },
              { name: 'Chorizo-Cheese Rice Bowl', desc: 'Hearty, flavorful, and satisfying', price: '$12' },
              { name: 'Wild Mushroom Polenta', desc: 'Vegetarian delight with umami depth', price: '$11' },
            ].map((dish) => (
              <div key={dish.name} className="group py-10 border-t border-white/[0.06] hover:bg-white/[0.01] transition-all duration-500 px-4 -mx-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl text-brand-heading font-normal mb-2">{dish.name}</h3>
                    <p className="text-white/30 text-sm font-light">{dish.desc}</p>
                  </div>
                  <span className="text-brand-accent text-lg font-medium ml-8 mt-1">{dish.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link href="/menu"><Button variant="outline">See Full Menu</Button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-36 border-t border-white/[0.04]">
        <div className="container max-w-4xl">
          <div className="text-center mb-24">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-5 font-medium">Testimonials</p>
            <h2 className="font-serif text-4xl md:text-5xl text-brand-heading font-normal">Words from Our Table</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 stagger-children">
            {[
              { name: 'Maria', text: "The freshest meals I've ever had. Absolutely delicious." },
              { name: 'James', text: 'Perfect for busy weeknights. Amazing quality and flavor.' },
              { name: 'Sarah', text: "Sean's passion for food is evident in every dish." },
            ].map((t) => (
              <div key={t.name} className="hover-lift p-6 -m-6 rounded-sm">
                <p className="text-white/45 leading-relaxed font-light italic text-[15px] mb-8">&ldquo;{t.text}&rdquo;</p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 border-t border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,64,0.03)_0%,transparent_50%)]" />
        <div className="container text-center relative hero-animate">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-brand-heading font-normal leading-tight">Ready to Experience<br />Sean&apos;s Cooking?</h2>
          <p className="text-white/35 mb-14 text-lg font-light">Order this week&apos;s menu or book catering for your next event</p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/menu"><Button variant="primary" size="lg" className="pulse-glow">Order This Week&apos;s Menu</Button></Link>
            <Link href="/catering"><Button variant="outline" size="lg">Book Catering</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
