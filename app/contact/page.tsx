import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Sean Mark&apos;s Cuisine',
  description:
    'Get in touch with Sean Mark&apos;s Cuisine. We&apos;d love to hear from you about orders, catering, or any questions.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="bg-brand-dark text-brand-cream py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-brand-cream/90 max-w-2xl">
            Have a question about our menu, catering services, or want to place an order? We&apos;re here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes up 2 cols on desktop */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-sm border-2 border-brand-dark/10">
                <h2 className="text-2xl font-serif font-bold text-brand-dark mb-6">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Phone */}
              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.058.3.102.605.102.924 0 1.748.585 3.367 1.563 4.657l1.973-1.187a1 1 0 011.195.226l3.137 3.784a1 1 0 01.15 1.094l-.868 2.604a1 1 0 01-.93.644H4a1 1 0 01-1-1V3z" />
                  </svg>
                  Phone
                </h3>
                <a
                  href="tel:+15551234567"
                  className="text-brand-dark/80 hover:text-brand-gold transition-colors"
                >
                  (555) 123-4567
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </h3>
                <a
                  href="mailto:contact@seanmarkscuisine.com"
                  className="text-brand-dark/80 hover:text-brand-gold transition-colors"
                >
                  contact@seanmarkscuisine.com
                </a>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Location
                </h3>
                <p className="text-brand-dark/80">
                  Lebanon, NJ
                </p>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-brand-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                  </svg>
                  Hours
                </h3>
                <div className="text-brand-dark/80 space-y-1">
                  <p>Tue - Fri: 9am - 6pm</p>
                  <p>Sat: 10am - 4pm</p>
                  <p>Sun - Mon: Closed</p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-3">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center hover:bg-brand-gold/90 transition-colors"
                  >
                    <span className="text-sm font-bold">f</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center hover:bg-brand-gold/90 transition-colors"
                  >
                    <span className="text-sm font-bold">i</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-dark text-brand-cream py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Prefer to Order?
          </h2>
          <p className="text-lg text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            Browse our weekly menu and place your order directly.
          </p>
          <a
            href="/menu"
            className="inline-block px-8 py-3 bg-brand-gold text-brand-dark font-medium rounded-lg hover:bg-brand-gold/90 transition-colors"
          >
            Browse Menu
          </a>
        </div>
      </section>
    </main>
  );
}
