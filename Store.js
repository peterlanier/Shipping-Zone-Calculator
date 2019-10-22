import React, { useState, setState } from "react";

//Contexts (essentially the shape of the data, not values)
export const OrdersContext = React.createContext( 50 );
export const WeightContext = React.createContext( 50 );
export const CityContext = React.createContext( 'New York' );

const Store = ({ children }) => {

  const [orders, setOrders] = useState( 50 );
  const [weight, setWeight] = useState( 50 );
  const [city, setCity] = useState( ["New York", "L.A.", "San Fransisco"] );

  return (
    <OrdersContext.Provider value={[orders, setOrders]}>
      <WeightContext.Provider value={[weight, setWeight]}>
      <CityContext.Provider value={[city, setCity]}>
        {children}
        </CityContext.Provider>
      </WeightContext.Provider>
    </OrdersContext.Provider>
  );
};

export default Store;
