import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removeFromCart, updateQuantity, clearCart } from '../features/cart/cartSlice';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center p-2 border rounded">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
                  className="border p-1 rounded w-16 mt-2"
                  min="1"
                />
              </div>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${totalPrice}</p>
            <Link to="/checkout">
              <button className="bg-green-500 text-white px-4 py-2 rounded mt-2">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
