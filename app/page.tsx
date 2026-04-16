import { Button } from '@/components/common/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,64,0.03)_0%,transparent_70%)]" />
        <div className="relative">
          <Image
            src="/Logo 2.jpg"
            alt="Sean Mark's Cuisine"
            width={400}
            height={400}
            className="w-56 md:w-72 h-auto mb-12 mx-auto"
            priority
          />
          <p className="text-base md:text-lg text-white/40 mb-12 max-w-md mx-auto font-light tracking-wide leading-relaxed">
            Crafting culinary experiences with heart and precision
          </p>
          <Link href="/menu">
            <Button variant="primary" size="lg">
              View This Week&apos;s Menu
            </Button>
          </Link>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </section>

      {/* What We Do */}
      <section className="py-32">
        <div className="container">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 text-center font-medium">What We Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-20 text-brand-heading font-normal">Three Ways to Dine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { num: '01', title: 'Weekly Menu', desc: 'Fresh, chef-prepared meals delivered to your door every week. New dishes every Monday.' },
              { num: '02', title: 'Catering', desc: 'Custom menus for your events, from intimate dinners to celebrations of any size.' },
              { num: '03', title: 'Private Events', desc: 'Exclusive dining experiences, cooking classes, and curated pop-up dinners.' },
            ].map((card) => (
              <div key={card.title} className="group">
                <span className="text-[11px] tracking-[0.3em] text-brand-accent/40 font-medium">{card.num}</span>
                <h3 className="font-serif text-2xl text-brand-heading mt-3 mb-4 font-normal">{card.title}</h3>
                <p className="text-white/35 leading-relaxed font-light text-[15px]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-32 border-t border-white/[0.04]">
        <div className="container">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 font-medium">This Week</p>
          <h2 className="font-serif text-4xl md:text-5xl text-brand-heading mb-16 font-normal">Featured Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Brown Chicken Stew', desc: 'West Indian style with authentic spices', price: '$14' },
              { name: 'Chorizo-Cheese Rice Bowl', desc: 'Hearty, flavorful, and satisfying', price: '$12' },
              { name: 'Wild Mushroom Polenta', desc: 'Vegetarian delight with umami depth', price: '$11' },
            ].map((dish) => (
              <div key={dish.name} className="group py-8 border-t border-white/[0.06] hover:border-white/[0.12] transition-all duration-500">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl text-brand-heading font-normal">{dish.name}</h3>
                  <span className="text-brand-accent text-sm font-medium ml-4 mt-1">{dish.price}</span>
                </div>
                <p className="text-white/30 text-sm font-light">{dish.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Link href="/menu"><Button variant="outline">See Full Menu</Button></Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 border-t border-white/[0.04]">
        <div className="container max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 text-center font-medium">Testimonials</p>
          <h2 className="font-serif text-4xl md:text-5xl text-center mb-20 text-brand-heading font-normal">Words from Our Table</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: 'Maria', text: "The freshest meals I've ever had. Absolutely delicious." },
              { name: 'James', text: 'Perfect for busy weeknights. Amazing quality and flavor.' },
              { name: 'Sarah', text: "Sean's passion for food is evident in every dish." },
            ].map((t) => (
              <div key={t.name}>
                <p className="text-white/45 leading-relaxed font-light italic text-[15px] mb-6">&ldquo;{t.text}&rdquo;</p>
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 font-medium">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,64,0.02)_0%,transparent_60%)]" />
        <div className="container text-center relative">
          <h2 className="font-serif text-4xl md:text-5xl mb-5 text-brand-heading font-normal">Ready to Experience<br />Sean&apos;s Cooking?</h2>
          <p className="text-white/35 mb-12 text-base font-light">Order this week&apos;s menu or book catering for your next event</p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Link href="/menu"><Button variant="primary" size="lg">Order This Week&apos;s Menu</Button></Link>
            <Link href="/catering"><Button variant="outline" size="lg">Book Catering</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
