import Image from 'next/image';
import { Button } from '@/components/common/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      <section className="pt-20 pb-24 text-center">
        <div className="container hero-animate">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 font-medium">The Story</p>
          <h1 className="font-serif text-5xl md:text-7xl text-brand-heading mb-6 font-normal">Meet Sean Mark</h1>
          <p className="text-lg text-white/35 max-w-xl mx-auto font-light leading-relaxed">Chef, creator, and passionate about bringing people together through food</p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container flex justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border border-white/[0.06] flex items-center justify-center bg-white/[0.02]">
            <Image src="/Logo 2.jpg" alt="Sean Mark's Cuisine" width={240} height={240} className="w-40 md:w-52 h-auto" />
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-white/[0.04]">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-heading mb-10 font-normal">The Chef&apos;s Story</h2>
          <div className="space-y-6 text-white/40 text-[15px] leading-[1.9] font-light">
            <p>Sean Mark&apos;s Cuisine was born from a simple belief: great food should bring people together. With years of culinary experience and a passion for West Indian and contemporary cooking, Sean creates dishes that nourish both body and soul.</p>
            <p>Every meal is crafted with intention, using fresh ingredients and time-honored techniques. Whether it&apos;s a weeknight dinner for your family or an intimate gathering with friends, Sean&apos;s cooking celebrates flavor, quality, and the joy of sharing a table.</p>
            <p>At Sean Mark&apos;s Cuisine, we believe that food is more than sustenance &mdash; it&apos;s an experience, a memory, and an expression of care.</p>
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-white/[0.04]">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h3 className="font-serif text-2xl text-brand-heading mb-10 font-normal">Philosophy</h3>
              <ul className="space-y-8 stagger-children">
                {[
                  { title: 'Fresh Ingredients', desc: 'Sourcing the finest seasonal ingredients' },
                  { title: 'Cooked with Heart', desc: 'Every dish prepared with care and passion' },
                  { title: 'Global Flavors', desc: 'West Indian roots with contemporary influences' },
                ].map((item) => (
                  <li key={item.title}>
                    <p className="text-brand-heading font-normal text-[15px] mb-1">{item.title}</p>
                    <p className="text-white/30 text-sm font-light">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-brand-heading mb-10 font-normal">Culinary Style</h3>
              <div className="space-y-5 text-white/35 leading-relaxed font-light text-[15px]">
                <p>Sean&apos;s cooking is rooted in West Indian traditions with influences from contemporary cuisine. He believes in letting quality ingredients speak for themselves, while building complex, satisfying flavors through technique and intuition.</p>
                <p>From comfort food classics to innovative dishes, each meal tells a story and celebrates the joy of gathering around the table.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-white/[0.04]">
        <div className="container max-w-3xl">
          <h3 className="font-serif text-2xl text-brand-heading mb-14 font-normal">Experience</h3>
          <div className="relative pl-10 border-l border-white/[0.06] space-y-14">
            {[
              { title: 'Professional Chef', desc: 'Years of culinary excellence in diverse kitchen environments' },
              { title: 'Menu Development', desc: 'Creating innovative weekly menus that balance flavor, nutrition, and variety' },
              { title: 'Continuous Learning', desc: 'Always exploring new techniques, ingredients, and culinary trends' },
            ].map((item) => (
              <div key={item.title} className="relative">
                <span className="absolute -left-[13px] top-2 w-1.5 h-1.5 rounded-full bg-brand-accent/60" />
                <p className="text-brand-heading font-normal text-lg mb-1">{item.title}</p>
                <p className="text-white/30 font-light text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-36 border-t border-white/[0.04] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(74,222,64,0.02)_0%,transparent_60%)]" />
        <div className="container text-center relative">
          <h2 className="font-serif text-4xl md:text-5xl mb-5 text-brand-heading font-normal">Ready to Experience<br />Sean&apos;s Cooking?</h2>
          <p className="text-white/35 mb-12 font-light">Order this week&apos;s menu or inquire about catering</p>
          <div className="flex gap-5 justify-center flex-wrap">
            <Link href="/menu"><Button variant="primary" size="lg">Browse Menu</Button></Link>
            <Link href="/catering"><Button variant="outline" size="lg">Learn About Catering</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
