import Stripe from 'stripe';

// Lazy-load Stripe to avoid initialization errors during build
let stripe: Stripe | null = null;

function getStripeInstance() {
  if (!stripe && process.env.STRIPE_SECRET_KEY) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return stripe;
}

export async function verifyStripeWebhookSignature(
  body: string,
  signature: string | undefined
): Promise<Stripe.Event | null> {
  if (!signature || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('Missing webhook signature or secret');
    return null;
  }

  const stripeInstance = getStripeInstance();
  if (!stripeInstance) {
    console.error('Stripe not configured');
    return null;
  }

  try {
    const event = stripeInstance.webhooks.constructEvent(
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
