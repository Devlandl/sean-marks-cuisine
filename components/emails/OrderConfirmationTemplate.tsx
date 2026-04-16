import React from 'react';

interface OrderItem {
  name: string;
  portion: 'half' | 'full';
  quantity: number;
  price: number;
}

interface OrderConfirmationTemplateProps {
  orderNumber: string;
  customerName: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  deliveryDate: string;
  deliveryAddress: string;
}

export default function OrderConfirmationTemplate({
  orderNumber,
  customerName,
  items,
  subtotal,
  tax,
  total,
  deliveryDate,
  deliveryAddress,
}: OrderConfirmationTemplateProps) {
  const formatPrice = (price: number) => {
    return `$${(price / 100).toFixed(2)}`;
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#1a1a1a', color: '#f5f5f5', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>Order Confirmed!</h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>Order #{orderNumber}</p>
      </div>

      <div style={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
        <p>Dear {customerName},</p>
        <p>Thank you for your order! We are preparing your delicious meal with care.</p>

        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <h2 style={{ marginTop: 0 }}>Order Items</h2>
          {items.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #eee' }}>
              <div>
                <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{item.name}</p>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
                  {item.quantity}x {item.portion === 'half' ? 'Half' : 'Full'} Portion
                </p>
              </div>
              <p style={{ margin: 0, fontWeight: 'bold' }}>{formatPrice(item.price * item.quantity)}</p>
            </div>
          ))}

          <div style={{ marginTop: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '2px solid #1a1a1a' }}>
              <span>Tax</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>
              <span>Total</span>
              <span style={{ color: '#d4af37' }}>{formatPrice(total)}</span>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
          <h2 style={{ marginTop: 0 }}>Delivery Information</h2>
          <p style={{ margin: '10px 0' }}>
            <strong>Date:</strong> {new Date(deliveryDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p style={{ margin: '10px 0' }}>
            <strong>Address:</strong> {deliveryAddress}
          </p>
        </div>

        <div style={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>
            Keep this email for your records. Our team will contact you if there are any questions about your delivery.
          </p>
        </div>
      </div>

      <div style={{ backgroundColor: '#1a1a1a', color: '#f5f5f5', padding: '20px', textAlign: 'center', fontSize: '12px' }}>
        <p style={{ margin: 0 }}>Sean Mark&apos;s Cuisine</p>
        <p style={{ margin: '5px 0 0 0' }}>Thank you for supporting our business!</p>
      </div>
    </div>
  );
}
