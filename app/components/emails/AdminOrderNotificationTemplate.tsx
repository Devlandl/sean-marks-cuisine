import * as React from 'react';

interface OrderItem {
  name: string;
  portion: 'half' | 'full';
  quantity: number;
  price: number;
}

interface AdminOrderNotificationProps {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  total: number;
  deliveryDate: string;
  deliveryAddress: string;
}

export default function AdminOrderNotificationTemplate({
  orderNumber,
  customerName,
  customerEmail,
  customerPhone,
  items,
  total,
  deliveryDate,
  deliveryAddress,
}: AdminOrderNotificationProps) {
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
      <div style={{ backgroundColor: '#B8956A', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
          New Order Alert
        </h1>
      </div>

      {/* Content */}
      <div style={{ padding: '30px', backgroundColor: 'white', margin: '20px' }}>
        <p style={{ color: '#0B0B0C', marginBottom: '20px', fontSize: '16px', fontWeight: 'bold' }}>
          Order #{orderNumber} received!
        </p>

        {/* Customer Info */}
        <div style={{ backgroundColor: '#f5f1e8', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
          <h3 style={{ color: '#2E4A29', margin: '0 0 10px 0', fontSize: '14px' }}>Customer</h3>
          <p style={{ margin: '5px 0', color: '#0B0B0C' }}>
            <strong>Name:</strong> {customerName}
          </p>
          <p style={{ margin: '5px 0', color: '#0B0B0C' }}>
            <strong>Email:</strong> {customerEmail}
          </p>
          <p style={{ margin: '5px 0', color: '#0B0B0C' }}>
            <strong>Phone:</strong> {customerPhone}
          </p>
        </div>

        {/* Order Items */}
        <h3 style={{ color: '#2E4A29', marginBottom: '15px', fontSize: '14px' }}>Items</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <tbody>
            {items.map((item) => (
              <tr key={`${item.name} - ${item.portion}`} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <td style={{ padding: '8px 0', color: '#0B0B0C' }}>
                  {item.name} ({item.portion})
                </td>
                <td style={{ padding: '8px 0', textAlign: 'right', color: '#0B0B0C' }}>
                  × {item.quantity}
                </td>
                <td style={{ padding: '8px 0 8px 20px', textAlign: 'right', color: '#0B0B0C', fontWeight: 'bold' }}>
                  ${((item.price * item.quantity) / 100).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div style={{ backgroundColor: '#f5f1e8', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
          <p style={{ margin: 0, fontSize: '14px', color: '#0B0B0C' }}>
            <strong>Total:</strong> ${(total / 100).toFixed(2)}
          </p>
        </div>

        {/* Delivery Info */}
        <div style={{ backgroundColor: '#f5f1e8', padding: '15px', marginBottom: '20px', borderRadius: '5px' }}>
          <p style={{ margin: '0 0 10px 0', color: '#0B0B0C' }}>
            <strong>Delivery Date:</strong> {new Date(deliveryDate).toLocaleDateString()}
          </p>
          <p style={{ margin: 0, color: '#0B0B0C' }}>
            <strong>Address:</strong> {deliveryAddress}
          </p>
        </div>

        <p style={{ color: '#666', fontSize: '12px', marginTop: '30px' }}>
          Log in to your admin dashboard to process this order.
        </p>
      </div>
    </div>
  );
}
