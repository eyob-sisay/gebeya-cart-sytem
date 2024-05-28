import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './app/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Checkout from './components/Checkout';
import ToastNotification from './components/ToastNotification';
import CheckoutSuccess from './components/CheckoutSuccess';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <ToastNotification />
          <div className="container mx-auto p-4">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <h1 className="text-2xl font-bold mb-6">E-commerce Cart and Checkout System</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ProductList />
                    </div>
                  </>
                }
              />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/checkout-success" element={<CheckoutSuccess />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
