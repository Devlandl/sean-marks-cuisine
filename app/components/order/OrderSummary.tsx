interface OrderItem {
  name: string;
  portion: 'half' | 'full';
  quantity: number;
  price: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  deliveryDate: string;
  deliveryAddress: string;
}

export default function OrderSummary({
  items,
  subtotal,
  tax,
  total,
  deliveryDate,
  deliveryAddress,
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-8">
      <h2 className="text-2xl font-serif font-bold text-brand-dark mb-6">Order Summary</h2>

      {/* Items */}
      <div className="space-y-3 mb-6 pb-6 border-b-2 border-brand-dark/10">
        {items.map((item) => (
          <div key={`${item.name}-${item.portion}`} className="flex justify-between">
            <div>
              <p className="font-medium text-brand-dark">{item.name}</p>
              <p className="text-sm text-brand-dark/60">
                {item.portion === 'half' ? 'Half' : 'Full'} portion x {item.quantity}
              </p>
            </div>
            <p className="font-medium text-brand-dark">
              ${((item.price * item.quantity) / 100).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-brand-dark">Subtotal</span>
          <span>${(subtotal / 100).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-brand-dark">Tax</span>
          <span>${(tax / 100).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold border-t-2 border-brand-dark/10 pt-2">
          <span className="text-brand-dark">Total Paid</span>
          <span className="text-brand-gold">${(total / 100).toFixed(2)}</span>
        </div>
      </div>

      {/* Delivery Info */}
      <div className="bg-brand-cream/30 rounded-lg p-4">
        <h3 className="font-semibold text-brand-dark mb-3">Delivery Information</h3>
        <p className="text-sm text-brand-dark mb-2">
          <strong>Date:</strong> {new Date(deliveryDate).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className="text-sm text-brand-dark">
          <strong>Address:</strong> {deliveryAddress}
        </p>
      </div>
    </div>
  );
}
