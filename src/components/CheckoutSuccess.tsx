import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart} from "../features/cart/cartSlice";
import { RootState } from '../app/store';

const CheckoutSuccess: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [total, setTotal] = React.useState(0);
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  useEffect(() => {
    const total=cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(total);
  }, [cart, dispatch]);

  return (
    <div className="min-h-[80vh] max-w-[800px] w-full mx-auto flex flex-col items-center justify-center">
      <h2 className="mb-2 text-[#029e02]">Checkout Successful {total}</h2>
      <p>Your order might take some time to process.</p>
      <p>Check your order status at your profile after about 10 minutes.</p>
      <p>
        In case of any inquiries, contact support at{" "}
        <strong>support@onlineshop.com</strong>
      </p>
    </div>
  );
};

export default CheckoutSuccess;
