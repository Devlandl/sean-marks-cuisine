import React from 'react';
import { Resend } from 'resend';
import OrderConfirmationTemplate from '../../../components/emails/OrderConfirmationTemplate';
import AdminOrderNotificationTemplate from '../../../components/emails/AdminOrderNotificationTemplate';

const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

interface OrderItem {
  name: string;
  portion: 'half' | 'full';
  quantity: number;
  price: number;
}

interface OrderData {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  deliveryDate: string;
  deliveryAddress: string;
}

export async function sendOrderConfirmationEmails(orderData: OrderData) {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@seanmarkscuisine.com';

  if (!resend) {
    console.warn('Resend API key not configured');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    // Send customer confirmation email
    const customerEmail = await resend.emails.send({
      from: 'orders@seanmarkscuisine.com',
      to: orderData.customerEmail,
      subject: `Order Confirmation #${orderData.orderNumber}`,
      react: React.createElement(OrderConfirmationTemplate, {
        orderNumber: orderData.orderNumber,
        customerName: orderData.customerName,
        items: orderData.items,
        subtotal: orderData.subtotal,
        tax: orderData.tax,
        total: orderData.total,
        deliveryDate: orderData.deliveryDate,
        deliveryAddress: orderData.deliveryAddress,
      }),
    });

    // Send admin notification email
    const adminNotification = await resend.emails.send({
      from: 'orders@seanmarkscuisine.com',
      to: adminEmail,
      subject: `New Order #${orderData.orderNumber} - ${orderData.customerName}`,
      react: React.createElement(AdminOrderNotificationTemplate, {
        orderNumber: orderData.orderNumber,
        customerName: orderData.customerName,
        customerEmail: orderData.customerEmail,
        customerPhone: orderData.customerPhone,
        items: orderData.items,
        subtotal: orderData.subtotal,
        tax: orderData.tax,
        total: orderData.total,
        deliveryDate: orderData.deliveryDate,
        deliveryAddress: orderData.deliveryAddress,
      }),
    });

    console.log('Order confirmation emails sent:', {
      customer: customerEmail,
      admin: adminNotification,
    });

    return { success: true, customerEmail, adminNotification };
  } catch (error) {
    console.error('Failed to send order confirmation emails:', error);
    return { success: false, error };
  }
}
