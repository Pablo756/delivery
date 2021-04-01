import React, { useState } from 'react';

import ordersList from '../constants/orders.json';

export const OrderContext = React.createContext();

export const OrderProvider = ({children}) => {
  const [orders, setOrders] = useState(ordersList);
  return (
    <OrderContext.Provider value={{orders, setOrders}}>
      {children}
    </OrderContext.Provider>
  )
}

