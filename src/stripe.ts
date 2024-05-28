import { loadStripe } from '@stripe/stripe-js';

// Replace with your own publishable key from Stripe Dashboard
const stripePromise = loadStripe('your-publishable-key-here');

export default stripePromise;
