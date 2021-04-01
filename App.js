import React from 'react';

import { Routes } from './src/navigation/Routes';
import { OrderProvider } from './src/context/OrderContext';

export default function App() {
  return (
    <OrderProvider>
      <Routes />
    </OrderProvider>
  );
}
