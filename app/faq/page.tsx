import type { Metadata } from 'next';
import FAQAccordion from '@/components/faq/FAQAccordion';

export const metadata: Metadata = { title: "FAQ | Sean Mark's Cuisine", description: 'Frequently asked questions.' };

const faqCategories = [
  { title: 'Ordering & Menu', items: [
    { id: 'q1', question: 'How do I place an order?', answer: "Browse our weekly menu, select items, and proceed to checkout. Orders must be placed by Friday 5 PM for the following week's delivery." },
    { id: 'q2', question: 'What is the minimum order amount?', answer: 'The minimum order is $40 to ensure efficient preparation and delivery.' },
    { id: 'q3', question: 'Can I customize my portions?', answer: 'Yes! Each item offers half and full portion options.' },
    { id: 'q4', question: 'How often does the menu change?', answer: 'Our menu rotates weekly with fresh, seasonal ingredients.' },
  ]},
  { title: 'Delivery & Pickup', items: [
    { id: 'q5', question: 'Do you offer delivery?', answer: 'Yes, we deliver throughout the Lebanon, NJ area Tuesday through Friday.' },
    { id: 'q6', question: 'Can I pick up my order?', answer: "Local pickup is available at our kitchen. Select pickup during checkout." },
    { id: 'q7', question: 'How long do meals stay fresh?', answer: 'Refrigerate and consume within 3-4 days. Meals can be frozen for up to 1 month.' },
  ]},
  { title: 'Dietary & Allergies', items: [
    { id: 'q8', question: 'Do you accommodate dietary restrictions?', answer: 'Yes. We can modify many dishes for vegetarian, vegan, gluten-free, and other needs.' },
    { id: 'q9', question: 'Is your food allergen-free?', answer: 'We handle many allergens in our kitchen but work to prevent cross-contamination. Contact us for severe allergies.' },
    { id: 'q10', question: 'Are there vegan or vegetarian options?', answer: "Yes! Our menu typically includes vegetarian and vegan options each week, clearly labeled." },
  ]},
  { title: 'Catering & Events', items: [
    { id: 'q11', question: 'What is the minimum for catering?', answer: 'Catering orders have a minimum of 10 guests with fully customized menus.' },
    { id: 'q12', question: 'How far in advance should I book?', answer: 'We recommend at least 2 weeks in advance. Rush orders may be accommodated.' },
    { id: 'q13', question: 'What types of events do you cater?', answer: 'Corporate events, private dinners, weddings, family gatherings, and more.' },
  ]},
  { title: 'Payment & Policies', items: [
    { id: 'q14', question: 'What payment methods do you accept?', answer: 'All major credit cards, debit cards, and digital payments via secure checkout.' },
    { id: 'q15', question: 'What is your cancellation policy?', answer: 'Weekly orders: cancel by Friday 5 PM. Catering: cancellations within 48 hours may incur a fee.' },
    { id: 'q16', question: 'Do you offer refunds?', answer: "We stand behind our food. Contact us immediately if unsatisfied." },
  ]},
];

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 text-center">
        <div className="container">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-accent/60 mb-4 font-medium">Support</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brand-heading mb-6 font-normal">Frequently Asked Questions</h1>
          <p className="text-lg text-white/35 max-w-xl mx-auto font-light">Find answers to common questions. <a href="/contact" className="text-brand-accent/60 hover:text-brand-accent transition-colors">Contact us directly.</a></p>
        </div>
      </section>
      <section className="py-16 border-t border-white/[0.04]">
        <div className="container max-w-3xl">
          <div className="space-y-20">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="font-serif text-2xl text-brand-heading mb-8 font-normal">{category.title}</h2>
                <FAQAccordion items={category.items} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 border-t border-white/[0.04] text-center">
        <div className="container">
          <h2 className="font-serif text-3xl mb-5 text-brand-heading font-normal">Still Have Questions?</h2>
          <p className="text-white/30 mb-8 font-light">Our team is here to help.</p>
          <a href="/contact"><button className="px-10 py-4 bg-brand-accent text-brand-base text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-brand-accent-hover transition-all duration-300 cursor-pointer">Contact Us</button></a>
        </div>
      </section>
    </main>
  );
}
