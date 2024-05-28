import React from 'react';
import { ToastContainer } from 'react-toastify';

const ToastNotification: React.FC = () => {
  return <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />;
};

export default ToastNotification;
