import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { verifyStripeWebhookSignature } from '@/lib/stripe/webhook';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('stripe-signature') || '';

    const event = await verifyStripeWebhookSignature(body, signature);

    if (!event) {
      return NextResponse.json(
        { error: 'Webhook signature verification failed' },
        { status: 400 }
      );
    }

    // Handle payment_intent.succeeded event
    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;

      // Extract order data from payment intent metadata
      const orderData = {
        customerId: paymentIntent.id,
        customerEmail: paymentIntent.receipt_email,
        amount: paymentIntent.amount,
        currency: paymentIntent.currency,
        status: 'completed',
        metadata: paymentIntent.metadata,
        createdAt: new Date(paymentIntent.created * 1000),
      };

      console.log('Order created from Stripe payment:', orderData);

      // TODO: Save order to Convex database (will be implemented in future task)
      // const order = await api.orders.create(orderData);

      // TODO: Send confirmation emails (will be implemented in Task 19)
      // await sendOrderConfirmationEmails(order);

      return NextResponse.json(
        { success: true, message: 'Order created successfully' },
        { status: 200 }
      );
    }

    // Log other event types
    console.log(`Received Stripe event: ${event.type}`);

    return NextResponse.json(
      { success: true, message: 'Webhook received' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
