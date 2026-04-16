import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = { title: "Contact Us | Sean Mark's Cuisine", description: "Get in touch with Sean Mark's Cuisine." };

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 text-center">
        <div className="container">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 font-medium">Reach Out</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-heading mb-6 font-normal">Get in Touch</h1>
          <p className="text-lg text-white/35 max-w-xl mx-auto font-light">Have a question about our menu, catering, or want to place an order?</p>
        </div>
      </section>
      <section className="py-16 border-t border-white/[0.04]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl text-brand-heading mb-10 font-normal">Send a Message</h2>
              <ContactForm />
            </div>
            <div className="space-y-10">
              {[
                { title: 'Phone', content: '(908) 505-8050' },
                { title: 'Email', content: 'hello@seanmarkscuisine.com' },
                { title: 'Location', content: '233 Main St, Lebanon, NJ 08833' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium mb-2">{item.title}</h3>
                  <p className="text-white/50 font-light">{item.content}</p>
                </div>
              ))}
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-white/30 font-medium mb-2">Hours</h3>
                <div className="text-white/50 space-y-1 text-sm font-light"><p>Tue - Fri: 9am - 6pm</p><p>Sat: 10am - 4pm</p><p>Sun - Mon: Closed</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 border-t border-white/[0.04] text-center">
        <div className="container">
          <h2 className="font-serif text-3xl mb-5 text-brand-heading font-normal">Prefer to Order?</h2>
          <p className="text-white/30 mb-8 font-light">Browse our weekly menu and place your order directly.</p>
          <a href="/menu"><button className="px-10 py-4 bg-brand-accent text-brand-base text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-brand-accent-hover transition-all duration-300 cursor-pointer">Browse Menu</button></a>
        </div>
      </section>
    </main>
  );
}
