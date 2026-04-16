import type { Metadata } from 'next';
import { Suspense } from 'react';
import CartSummary from '@/components/checkout/CartSummary';
import CheckoutForm from '@/components/checkout/CheckoutForm';

export const metadata: Metadata = {
  title: "Checkout | Sean Mark's Cuisine",
  description: 'Complete your order and proceed to payment.',
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      {/* Hero */}
      <section className="bg-brand-dark text-brand-cream py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-2">Checkout</h1>
          <p className="text-brand-cream/90">Review your order and complete payment</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>
            <div>
              <Suspense fallback={<div className="h-64 bg-brand-cream/30 rounded-lg animate-pulse" />}>
                <CartSummary />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <a
            href="/menu"
            className="text-brand-dark hover:text-brand-gold transition-colors underline"
          >
            &larr; Continue Shopping
          </a>
        </div>
      </section>
    </main>
  );
}
