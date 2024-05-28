import React from 'react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDropdownProps {
  items: CartItem[];
}

const CartDropdown: React.FC<CartDropdownProps> = ({ items }) => {
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden z-20">
      <div className="p-4">
        {items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
        ) : (
          <div className="max-h-64 overflow-y-auto">
            {items.map(item => (
              <div key={item.id} className="flex items-center mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="ml-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="border-t mt-4 pt-4">
          <p className="font-semibold text-lg">Total: ${totalPrice}</p>
          <Link to="/checkout" className="block text-center bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 transition-colors duration-300">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDropdown;
