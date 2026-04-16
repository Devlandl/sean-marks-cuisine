'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/store/useCartStore';
import { Button } from '@/components/common/Button';

export default function CheckoutForm() {
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const items = useCartStore((state) => state.items);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    deliveryDate: '',
  });

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const subtotal = getTotalPrice();
  const taxRate = 0.06625;
  const tax = Math.round(subtotal * taxRate);
  const discountAmount = Math.round(subtotal * (discount / 100));
  const total = subtotal + tax - discountAmount;

  const handleCoupon = () => {
    const coupons: Record<string, number> = {
      FREE: 100,
      '30': 30,
      '50': 50,
      ROUNDTABLE: 50,
    };

    if (coupons[couponCode]) {
      setDiscount(coupons[couponCode]);
      setError('');
    } else {
      setError('Invalid coupon code');
      setDiscount(0);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    // TODO: Wire to Stripe payment processing
    console.log('Checkout submit:', {
      customer: formData,
      items,
      subtotal,
      tax,
      discount: discountAmount,
      total,
    });

    try {
      // Simulated Stripe processing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to order success
      window.location.href = `/order-success?orderId=SMC-${Date.now()}`;
    } catch {
      setError('Payment processing failed. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Customer Info */}
      <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6">
        <h3 className="text-lg font-semibold text-brand-dark mb-4">Delivery Information</h3>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-brand-dark mb-1">
              Delivery Address *
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Street address, city, state, zip"
              className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="deliveryDate" className="block text-sm font-medium text-brand-dark mb-1">
              Preferred Delivery Date *
            </label>
            <input
              type="date"
              id="deliveryDate"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Coupon Code */}
      <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6">
        <h3 className="text-lg font-semibold text-brand-dark mb-4">Promo Code</h3>
        <div className="flex gap-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
            placeholder="Enter coupon code"
            className="flex-1 px-4 py-2 border-2 border-brand-dark/20 rounded-lg focus:border-brand-gold focus:outline-none"
          />
          <button
            type="button"
            onClick={handleCoupon}
            className="px-6 py-2 bg-brand-gold text-brand-dark font-medium rounded-lg hover:bg-brand-gold/90 transition-colors"
          >
            Apply
          </button>
        </div>
        {discount > 0 && (
          <p className="text-sm text-green-700 mt-2">
            {discount}% discount applied!
          </p>
        )}
        {error && <p className="text-sm text-red-700 mt-2">{error}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isProcessing || total <= 0}
        className="w-full"
      >
        {isProcessing ? 'Processing Payment...' : `Pay $${(total / 100).toFixed(2)}`}
      </Button>
    </form>
  );
}
