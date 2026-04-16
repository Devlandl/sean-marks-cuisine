import type { Metadata } from 'next';
import OrderSummary from '@/components/order/OrderSummary';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Order Confirmed | Sean Mark\'s Cuisine',
  description: 'Your order has been successfully placed. Check your email for confirmation details.',
};

// Sample order data (will be replaced with Convex query)
const sampleOrderData = {
  orderId: 'SMC-1704067200000',
  customerName: 'John Smith',
  customerEmail: 'john@example.com',
  items: [
    { name: 'Jerk Chicken with Rice and Peas', portion: 'full' as const, quantity: 2, price: 1200 },
    { name: 'Oxtail Stew', portion: 'half' as const, quantity: 1, price: 750 },
    { name: 'Bread Pudding', portion: 'full' as const, quantity: 1, price: 600 },
  ],
  subtotal: 3750,
  tax: 249,
  total: 3999,
  deliveryDate: '2026-04-20',
  deliveryAddress: '123 Main St, Lebanon, NJ 08833',
};

export default function OrderSuccessPage({
  searchParams,
}: {
  searchParams: { orderId?: string };
}) {
  const orderId = searchParams.orderId || sampleOrderData.orderId;

  return (
    <main className="min-h-screen bg-brand-base">
      {/* Success Hero */}
      <section className="bg-brand-base text-brand-text py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <svg className="w-16 h-16 mx-auto text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-heading mb-4">Order Confirmed!</h1>
          <p className="text-lg text-brand-text/70 mb-6">
            Thank you for your order. We&apos;re preparing your meal with care.
          </p>
          <p className="text-sm text-brand-accent font-mono">
            Order #{orderId}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <OrderSummary
                items={sampleOrderData.items}
                subtotal={sampleOrderData.subtotal}
                tax={sampleOrderData.tax}
                total={sampleOrderData.total}
                deliveryDate={sampleOrderData.deliveryDate}
                deliveryAddress={sampleOrderData.deliveryAddress}
              />
            </div>

            {/* Next Steps Sidebar */}
            <div className="space-y-6">
              {/* Confirmation Email */}
              <div className="bg-brand-surface rounded-lg border-2 border-brand-border p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-brand-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <h3 className="font-semibold text-brand-heading">Confirmation Sent</h3>
                </div>
                <p className="text-sm text-brand-text/70">
                  A detailed confirmation has been sent to {sampleOrderData.customerEmail}
                </p>
              </div>

              {/* What to Expect */}
              <div className="bg-brand-surface rounded-lg border-2 border-brand-border p-6">
                <h3 className="font-semibold text-brand-heading mb-4">What to Expect</h3>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-accent flex-shrink-0">1</span>
                    <span className="text-brand-text/70">We&apos;ll prepare your meal fresh with quality ingredients</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-accent flex-shrink-0">2</span>
                    <span className="text-brand-text/70">
                      You&apos;ll receive a delivery reminder 24 hours before
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-accent flex-shrink-0">3</span>
                    <span className="text-brand-text/70">Our team arrives at your delivery address with your order</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-brand-accent flex-shrink-0">4</span>
                    <span className="text-brand-text/70">Enjoy your delicious meal!</span>
                  </li>
                </ol>
              </div>

              {/* Contact Info */}
              <div className="bg-brand-surface rounded-lg border-2 border-brand-border p-6">
                <h3 className="font-semibold text-brand-heading mb-4">Questions?</h3>
                <p className="text-sm text-brand-text/70 mb-3">
                  Contact us anytime for updates or special requests.
                </p>
                <a
                  href="tel:+15551234567"
                  className="inline-block px-4 py-2 bg-brand-accent text-brand-base font-medium rounded-lg hover:bg-brand-accent/90 transition-colors text-sm"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-surface text-brand-text py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-brand-heading mb-6">Ready to Order Again?</h2>
          <p className="text-lg text-brand-text/70 mb-8 max-w-2xl mx-auto">
            Browse our weekly menu and place another order.
          </p>
          <a
            href="/menu"
            className="inline-block px-8 py-3 bg-brand-accent text-brand-base font-medium rounded-lg hover:bg-brand-accent/90 transition-colors"
          >
            Browse Menu
          </a>
        </div>
      </section>
    </main>
  );
}
