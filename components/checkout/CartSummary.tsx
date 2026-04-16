'use client';

import { useCartStore } from '@/lib/store/useCartStore';
import { useEffect, useState } from 'react';

export default function CartSummary() {
  const items = useCartStore((state) => state.items);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const getTotalItems = useCartStore((state) => state.getTotalItems);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return <div className="h-64 bg-brand-cream/30 rounded-lg animate-pulse" />;

  const subtotal = getTotalPrice();
  const taxRate = 0.06625; // NJ tax rate
  const tax = Math.round(subtotal * taxRate);
  const total = subtotal + tax;

  const minOrder = 4000; // $40 minimum
  const isBelowMinimum = subtotal < minOrder;

  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6">
      <h3 className="text-xl font-semibold text-brand-dark mb-4">Order Summary</h3>

      <div className="space-y-3 mb-6 pb-6 border-b-2 border-brand-dark/10">
        {items.map((item) => (
          <div key={`${item.id}-${item.portion}`} className="flex justify-between text-sm">
            <div>
              <p className="text-brand-dark font-medium">{item.name}</p>
              <p className="text-brand-dark/60 text-xs">
                {item.portion === 'half' ? 'Half' : 'Full'} portion x {item.quantity}
              </p>
            </div>
            <p className="text-brand-dark font-medium">
              ${((item.price * item.quantity) / 100).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-brand-dark">Subtotal</span>
          <span className="font-medium">${(subtotal / 100).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-brand-dark">Tax (6.625%)</span>
          <span className="font-medium">${(tax / 100).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t-2 border-brand-dark/10 pt-2">
          <span className="text-brand-dark">Total</span>
          <span className="text-brand-gold">${(total / 100).toFixed(2)}</span>
        </div>
      </div>

      {isBelowMinimum && (
        <div className="p-3 bg-red-50 border-2 border-red-200 rounded-lg">
          <p className="text-red-800 text-sm font-medium">
            Minimum order is $40. Add ${((minOrder - subtotal) / 100).toFixed(2)} more to checkout.
          </p>
        </div>
      )}

      <div className="text-xs text-brand-dark/60 text-center">
        {getTotalItems()} items in cart
      </div>
    </div>
  );
}
