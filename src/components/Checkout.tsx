import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import stripePromise from '../stripe';

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-2 border rounded">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <p>${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${totalPrice}</p>
          </div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Checkout;
