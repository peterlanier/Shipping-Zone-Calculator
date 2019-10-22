import React, { useState, setState } from "react";

//Contexts (essentially the shape of the data, not values)
export const OrdersContext = React.createContext(50);
export const WeightContext = React.createContext(50);
export const CityListContext = React.createContext("New York");
export const DistListContext = React.createContext("Knoxville");
export const ChosenCityContext = React.createContext("init");

const Store = ({ children }) => {
  const [orders, setOrders] = useState(50);
  const [weight, setWeight] = useState(50);
  const [cityList, setCity] = useState(["select", "New York", "L.A.", "San Fransisco"]);
  const [distList, setDist] = useState([
    "Knoxville + Salt Lake City",
    "Knoxville",
    "Salt Lake City"
  ]);
  const [chosenCity, setChosenCity] = useState("select");

  return (
    <OrdersContext.Provider value={[orders, setOrders]}>
      <WeightContext.Provider value={[weight, setWeight]}>
        <CityListContext.Provider value={[cityList, setCity]}>
          <DistListContext.Provider value={[distList, setDist]}>
          <ChosenCityContext.Provider value={[chosenCity, setChosenCity]}>
            {children}
            </ChosenCityContext.Provider>
          </DistListContext.Provider>
        </CityListContext.Provider>
      </WeightContext.Provider>
    </OrdersContext.Provider>
  );
};

export default Store;
