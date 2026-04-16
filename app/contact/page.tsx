import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | Sean Mark's Cuisine",
  description: "Get in touch with Sean Mark's Cuisine. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 md:py-28 text-center">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-extrabold text-brand-heading mb-6">Get in Touch</h1>
          <p className="text-xl text-brand-text/70 max-w-2xl mx-auto">Have a question about our menu, catering services, or want to place an order? We&apos;re here to help.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-brand-base rounded-lg p-8 md:p-10 border border-brand-border">
                <h2 className="text-2xl font-extrabold text-brand-heading mb-8">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>

            <div className="space-y-8">
              {[
                { title: 'Phone', content: '(908) 505-8050', href: 'tel:+19085058050', icon: 'M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                { title: 'Email', content: 'hello@seanmarkscuisine.com', href: 'mailto:hello@seanmarkscuisine.com', icon: 'M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z' },
                { title: 'Location', content: '233 Main St, Lebanon, NJ 08833', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0zM15 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0z' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-sm uppercase tracking-[0.15em] font-semibold text-brand-heading mb-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d={item.icon} /></svg>
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a href={item.href} className="text-brand-text/70 hover:text-brand-accent transition-colors">{item.content}</a>
                  ) : (
                    <p className="text-brand-text/70">{item.content}</p>
                  )}
                </div>
              ))}

              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] font-semibold text-brand-heading mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" /></svg>
                  Hours
                </h3>
                <div className="text-brand-text/70 space-y-1 text-sm">
                  <p>Tue - Fri: 9am - 6pm</p>
                  <p>Sat: 10am - 4pm</p>
                  <p>Sun - Mon: Closed</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-[0.15em] font-semibold text-brand-heading mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                    <a key={social} href={`https://${social.toLowerCase()}.com/${social === 'TikTok' ? '@' : ''}seanmarkscuisine`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg border border-brand-border text-brand-text/60 text-sm hover:border-brand-accent hover:text-brand-accent transition-colors">{social}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <div className="container">
          <h2 className="text-3xl font-extrabold mb-4 text-brand-heading">Prefer to Order?</h2>
          <p className="text-brand-text/70 mb-8">Browse our weekly menu and place your order directly.</p>
          <a href="/menu"><button className="px-8 py-3 bg-brand-accent text-brand-base font-semibold rounded-lg hover:bg-brand-accent-hover transition-colors cursor-pointer">Browse Menu</button></a>
        </div>
      </section>
    </main>
  );
}
