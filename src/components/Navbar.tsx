import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import CartDropdown from './CartDropdown';

const Navbar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          E-Commerce
        </Link>
        <Link to="/cart" className="text-2xl font-bold">
          CART
        </Link>
        <div className="relative">
          <button
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="relative"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H19m0 0a1 1 0 011 1v2a1 1 0 01-1 1h-1M7 13L3 21h18l-4-8M7 13h10m0 0L9 21m8 0h-8m6 0H9" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-600 text-white text-xs font-bold rounded-full">
                {totalItems}
              </span>
            )}
          </button>
          {dropdownVisible && <CartDropdown items={cartItems} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
