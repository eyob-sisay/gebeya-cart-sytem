import axios from "axios";
import React from "react";

interface CartItem {
  id: string;
  quantity: number;
  [key: string]: any;
}

interface PayButtonProps {
  cartItems: CartItem[];
}

const url = `http://localhost:5000/api`;

const PayButton: React.FC<PayButtonProps> = ({ cartItems }) => {
  const handleCheckout = () => {
    axios.post(`${url}/stripe/create-checkout-session`, {
        cartItems
      })
      .then((response: { data: { url: string } }) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err: { message: string }) => console.log(err.message));
  };

  return (
    <button 
      onClick={handleCheckout} 
      className="bg-blue-500 text-white p-2 rounded"
    >
      Check out
    </button>
  );
};

export default PayButton;
