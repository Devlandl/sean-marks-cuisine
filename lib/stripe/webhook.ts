import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-04-10',
});

export async function verifyStripeWebhookSignature(
  body: string,
  signature: string | undefined
): Promise<Stripe.Event | null> {
  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('Missing webhook signature or secret');
    return null;
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    return event;
  } catch (error) {
    console.error('Webhook signature verification failed:', error);
    return null;
  }
}
