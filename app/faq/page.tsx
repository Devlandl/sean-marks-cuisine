import type { Metadata } from 'next';
import FAQAccordion from '@/components/faq/FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQ | Sean Mark&apos;s Cuisine',
  description:
    'Frequently asked questions about ordering, catering, delivery, and dietary options.',
};

const faqCategories = [
  {
    title: 'Ordering & Menu',
    items: [
      {
        id: 'q1',
        question: 'How do I place an order?',
        answer:
          'Simply browse our weekly menu on the Menu page, select your items, and proceed to checkout. Orders must be placed by Friday 5 PM for the following week\'s delivery.',
      },
      {
        id: 'q2',
        question: 'What is the minimum order amount?',
        answer:
          'The minimum order is $40. This ensures we can prepare and deliver your meals efficiently while maintaining the highest quality.',
      },
      {
        id: 'q3',
        question: 'Can I customize my portions?',
        answer:
          'Yes! Each menu item offers half-portion and full-portion options. Half portions are perfect for lighter appetites or trying multiple dishes.',
      },
      {
        id: 'q4',
        question: 'How often does the menu change?',
        answer:
          'Our menu rotates weekly to bring you fresh, seasonal ingredients and variety. Check back every Monday to see what\'s new for the upcoming week.',
      },
    ],
  },
  {
    title: 'Delivery & Pickup',
    items: [
      {
        id: 'q5',
        question: 'Do you offer delivery?',
        answer:
          'Yes, we deliver throughout the Lebanon, NJ area. Delivery is available Tuesday through Friday. Delivery fees vary based on location.',
      },
      {
        id: 'q6',
        question: 'Can I pick up my order?',
        answer:
          'Absolutely! Local pickup is available at our kitchen location. Just select pickup during checkout and we\'ll have your order ready.',
      },
      {
        id: 'q7',
        question: 'How long do meals stay fresh?',
        answer:
          'All meals are prepared fresh and come in insulated packaging. Store in the refrigerator and consume within 3-4 days for best quality. Meals can be frozen for up to 1 month.',
      },
    ],
  },
  {
    title: 'Dietary & Allergies',
    items: [
      {
        id: 'q8',
        question: 'Do you accommodate dietary restrictions?',
        answer:
          'Yes, we take dietary restrictions seriously. We can modify many dishes for vegetarian, vegan, gluten-free, and other needs. Please note your restrictions at checkout or contact us.',
      },
      {
        id: 'q9',
        question: 'Is your food allergen-free?',
        answer:
          'While we handle many allergens in our kitchen, we work hard to prevent cross-contamination. For severe allergies, please contact us directly to discuss your specific needs.',
      },
      {
        id: 'q10',
        question: 'Are there vegan or vegetarian options?',
        answer:
          'Yes! Our menu typically includes vegetarian and vegan options each week. They\'re clearly labeled on the menu. For special requests beyond what\'s listed, contact us.',
      },
    ],
  },
  {
    title: 'Catering & Events',
    items: [
      {
        id: 'q11',
        question: 'What is the minimum for catering orders?',
        answer:
          'Catering orders have a minimum of 10 guests. We offer fully customized menus and service options to match your event perfectly.',
      },
      {
        id: 'q12',
        question: 'How far in advance should I book catering?',
        answer:
          'We recommend booking catering at least 2 weeks in advance to ensure your preferred menu and date. Rush orders may be accommodated - contact us to discuss.',
      },
      {
        id: 'q13',
        question: 'What types of events do you cater?',
        answer:
          'We cater corporate events, private dinners, celebrations, weddings, family gatherings, and more. Each event is handled with professional service and chef-prepared cuisine.',
      },
    ],
  },
  {
    title: 'Payment & Policies',
    items: [
      {
        id: 'q14',
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards (Visa, MasterCard, American Express), debit cards, and digital payment methods through our secure checkout.',
      },
      {
        id: 'q15',
        question: 'What is your cancellation policy?',
        answer:
          'For weekly orders, cancellations must be made by Friday 5 PM before your delivery week. For catering orders, cancellations within 48 hours may incur a fee.',
      },
      {
        id: 'q16',
        question: 'Do you offer refunds?',
        answer:
          'We stand behind the quality of our food. If you\'re unsatisfied, contact us immediately. We\'ll make it right with replacements or refunds.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="bg-brand-dark text-brand-cream py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-brand-cream/90 max-w-2xl">
            Find answers to common questions about ordering, delivery, catering,
            and more. Can&apos;t find what you&apos;re looking for?{' '}
            <a
              href="/contact"
              className="underline hover:text-brand-gold transition-colors"
            >
              Contact us directly.
            </a>
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">
                  {category.title}
                </h2>
                <FAQAccordion items={category.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-brand-dark text-brand-cream py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-brand-cream/90 mb-8 max-w-2xl mx-auto">
            Our team is here to help! Reach out with any questions about our
            menu, catering, or services.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-brand-gold text-brand-dark font-medium rounded-lg hover:bg-brand-gold/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
