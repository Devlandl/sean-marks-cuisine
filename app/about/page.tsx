import Image from 'next/image';
import { Button } from '@/components/common/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <section className="py-24 md:py-32 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-7xl font-extrabold text-brand-heading mb-6">Meet Sean Mark</h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">Chef, creator, and passionate about bringing people together through food</p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-brand-accent/30 flex items-center justify-center bg-brand-surface">
            <Image src="/Logo 2.jpg" alt="Sean Mark's Cuisine" width={240} height={240} className="w-48 md:w-56 h-auto" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-heading">The Chef&apos;s Story</h2>
            <div className="flex-1 h-px bg-brand-accent/30" />
          </div>
          <div className="space-y-6 text-brand-text/80 text-lg leading-relaxed">
            <p>Sean Mark&apos;s Cuisine was born from a simple belief: great food should bring people together. With years of culinary experience and a passion for West Indian and contemporary cooking, Sean creates dishes that nourish both body and soul.</p>
            <p>Every meal is crafted with intention, using fresh ingredients and time-honored techniques. Whether it&apos;s a weeknight dinner for your family or an intimate gathering with friends, Sean&apos;s cooking celebrates flavor, quality, and the joy of sharing a table.</p>
            <p>At Sean Mark&apos;s Cuisine, we believe that food is more than sustenance &mdash; it&apos;s an experience, a memory, and an expression of care.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-extrabold text-brand-heading mb-8">Philosophy</h3>
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
              <h3 className="text-2xl font-extrabold text-brand-heading mb-8">Culinary Style</h3>
              <div className="space-y-4 text-brand-text/70 leading-relaxed">
                <p>Sean&apos;s cooking is rooted in West Indian traditions with influences from contemporary cuisine. He believes in letting quality ingredients speak for themselves, while building complex, satisfying flavors through technique and intuition.</p>
                <p>From comfort food classics to innovative dishes, each meal tells a story and celebrates the joy of gathering around the table.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface">
        <div className="container max-w-3xl">
          <h3 className="text-2xl font-extrabold text-brand-heading mb-12">Experience</h3>
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

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 via-transparent to-brand-accent/5" />
        <div className="container text-center relative">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-brand-heading">Ready to Experience Sean&apos;s Cooking?</h2>
          <p className="text-brand-text/70 mb-10 text-lg">Order this week&apos;s menu or inquire about catering</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/menu"><Button variant="primary" size="lg">Browse Menu</Button></Link>
            <Link href="/catering"><Button variant="outline" size="lg">Learn About Catering</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
