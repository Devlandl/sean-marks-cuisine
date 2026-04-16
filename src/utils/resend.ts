import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || '');

export default resend;

interface OrderItem {
  name: string;
  quantity: number;
  portionSize?: string;
  price?: number;
}

interface OrderData {
  orderNumber: string;
  total: number;
  items: OrderItem[];
  customerName?: string;
  customerPhone?: string;
  deliveryAddress?: string;
}

export async function sendOrderConfirmation(
  email: string,
  orderData: OrderData
) {
  const { data, error } = await resend.emails.send({
    from: 'orders@seanmarkscuisine.com',
    to: email,
    subject: `Order Confirmation #${orderData.orderNumber}`,
    html: `
      <h1>Order Confirmed!</h1>
      <p>Thank you for your order.</p>
      <p><strong>Order Number:</strong> ${orderData.orderNumber}</p>
      <p><strong>Total:</strong> $${(orderData.total / 100).toFixed(2)}</p>
      <p><strong>Items:</strong></p>
      <ul>
        ${orderData.items.map((item) => `<li>${item.name} x${item.quantity}</li>`).join('')}
      </ul>
    `,
  });

  if (error) {
    console.error('Error sending order confirmation:', error);
    throw error;
  }

  return data;
}

export async function sendAdminOrderNotification(orderData: OrderData) {
  const { data, error } = await resend.emails.send({
    from: 'orders@seanmarkscuisine.com',
    to: process.env.ADMIN_EMAIL || 'admin@seanmarkscuisine.com',
    subject: `New Order #${orderData.orderNumber}`,
    html: `
      <h2>New Order Received</h2>
      <p><strong>Customer:</strong> ${orderData.customerName || 'N/A'}</p>
      <p><strong>Email:</strong> (See order in system)</p>
      <p><strong>Phone:</strong> ${orderData.customerPhone || 'N/A'}</p>
      <p><strong>Delivery Address:</strong> ${orderData.deliveryAddress || 'N/A'}</p>
      <p><strong>Items:</strong></p>
      <ul>
        ${orderData.items
          .map(
            (item) =>
              `<li>${item.name}${item.portionSize ? ` (${item.portionSize})` : ''} x${item.quantity}${item.price ? ` - $${(item.price / 100).toFixed(2)}` : ''}</li>`
          )
          .join('')}
      </ul>
      <p><strong>Total:</strong> $${(orderData.total / 100).toFixed(2)}</p>
    `,
  });

  if (error) {
    console.error('Error sending admin notification:', error);
    throw error;
  }

  return data;
}

export async function sendStatusUpdate(
  email: string,
  orderNumber: string,
  status: string
) {
  const { data, error } = await resend.emails.send({
    from: 'orders@seanmarkscuisine.com',
    to: email,
    subject: `Order #${orderNumber} Status Update`,
    html: `
      <h2>Order Status Update</h2>
      <p>Your order <strong>#${orderNumber}</strong> status has been updated.</p>
      <p><strong>Current Status:</strong> ${status}</p>
      <p>Thank you for your patience!</p>
    `,
  });

  if (error) {
    console.error('Error sending status update:', error);
    throw error;
  }

  return data;
}
