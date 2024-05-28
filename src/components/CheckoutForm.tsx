import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { clearCart } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';
import PayButton from './PayButton';
import axios from 'axios';

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await axios.post('http://localhost:5000/api/stripe/create-checkout-session', {
          cartItems
        });
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        toast.error('Failed to initialize payment');
      }
    };

    createPaymentIntent();
  }, [cartItems]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      return;
    }

    setLoading(true);

    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      });

      if (result.error) {
        toast.error(result.error.message || 'An error occurred');
      } else if (result.paymentIntent?.status === 'succeeded') {
        toast.success('Payment successful!');
        dispatch(clearCart());
      }
    } catch (error) {
      toast.error('An error occurred while processing the payment');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-2 border rounded" />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition-colors duration-300"
        disabled={!stripe || loading}
      >
        {loading ? 'Processing...' : 'Confirm Purchase'}
      </button>

      <PayButton cartItems={cartItems} />
    </form>
  );
};

export default CheckoutForm;
