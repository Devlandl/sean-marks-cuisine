import * as React from 'react';

interface OrderItem {
  name: string;
  portion: 'half' | 'full';
  quantity: number;
  price: number;
}

interface OrderConfirmationProps {
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
}: OrderConfirmationProps) {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f5f1e8',
        padding: '20px',
      }}
    >
      {/* Header */}
      <div style={{ backgroundColor: '#2E4A29', color: '#f5f1e8', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>
          Sean Mark&apos;s Cuisine
        </h1>
        <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>Order Confirmation</p>
      </div>

      {/* Content */}
      <div style={{ padding: '30px', backgroundColor: 'white', margin: '20px' }}>
        <h2 style={{ color: '#2E4A29', marginBottom: '20px' }}>
          Thank you for your order, {customerName}!
        </h2>

        <p style={{ color: '#0B0B0C', marginBottom: '20px', lineHeight: '1.6' }}>
          We&apos;re preparing your delicious meal and look forward to delivering it to you.
        </p>

        {/* Order Number */}
        <div style={{ backgroundColor: '#f5f1e8', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
          <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Order Number</p>
          <p style={{ margin: '5px 0 0 0', fontSize: '18px', fontWeight: 'bold', color: '#2E4A29' }}>
            {orderNumber}
          </p>
        </div>

        {/* Order Items */}
        <h3 style={{ color: '#2E4A29', marginBottom: '15px', fontSize: '16px' }}>Your Order</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <tbody>
            {items.map((item) => (
              <tr key={`${item.name} - ${item.portion}`} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <td style={{ padding: '10px 0', color: '#0B0B0C' }}>
                  {item.name} ({item.portion === 'half' ? 'Half' : 'Full'})
                </td>
                <td style={{ padding: '10px 0', textAlign: 'right', color: '#0B0B0C' }}>
                  × {item.quantity}
                </td>
                <td style={{ padding: '10px 0 10px 20px', textAlign: 'right', color: '#0B0B0C' }}>
                  ${((item.price * item.quantity) / 100).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totals */}
        <div style={{ borderTop: '2px solid #2E4A29', paddingTop: '15px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#0B0B0C' }}>
            <span>Subtotal</span>
            <span>${(subtotal / 100).toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#0B0B0C' }}>
            <span>Tax</span>
            <span>${(tax / 100).toFixed(2)}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold', color: '#B8956A' }}>
            <span>Total</span>
            <span>${(total / 100).toFixed(2)}</span>
          </div>
        </div>

        {/* Delivery Info */}
        <h3 style={{ color: '#2E4A29', marginBottom: '15px', fontSize: '16px' }}>Delivery Details</h3>
        <div style={{ backgroundColor: '#f5f1e8', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
          <p style={{ margin: '0 0 10px 0', color: '#0B0B0C' }}>
            <strong>Delivery Date:</strong> {new Date(deliveryDate).toLocaleDateString()}
          </p>
          <p style={{ margin: 0, color: '#0B0B0C' }}>
            <strong>Address:</strong> {deliveryAddress}
          </p>
        </div>

        {/* Next Steps */}
        <h3 style={{ color: '#2E4A29', marginBottom: '15px', fontSize: '16px' }}>What&apos;s Next?</h3>
        <ul style={{ color: '#0B0B0C', paddingLeft: '20px', lineHeight: '1.8' }}>
          <li>We&apos;ll prepare your meal fresh with the finest ingredients</li>
          <li>You&apos;ll receive a delivery confirmation 24 hours before your delivery date</li>
          <li>Our team will arrive within your delivery window</li>
          <li>Enjoy your delicious meal!</li>
        </ul>

        {/* Contact */}
        <p style={{ marginTop: '30px', color: '#666', fontSize: '12px', borderTop: '1px solid #e0e0e0', paddingTop: '15px' }}>
          Questions? Contact us at (555) 123-4567 or reply to this email.
        </p>
      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '20px', color: '#666', fontSize: '12px' }}>
        <p style={{ margin: 0 }}>
          © 2026 Sean Mark&apos;s Cuisine. All rights reserved.
        </p>
      </div>
    </div>
  );
}
