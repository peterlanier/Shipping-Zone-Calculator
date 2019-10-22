import React, { useState } from "react";

const CalcContext = React.createContext({
  orders: 50,
  setOrders: () => {},
  ordersMin: 0,
  ordersMax: 100,
  ordersStep: 10,
  weight: 60,
  setWeight: () => {},
  weightMin: 0,
  weightMax: 100,
  weightStep: 10,
  cities: [
    "San Francisco",
    "New York"
  ]
});

console.log(CalcContext._currentValue);

export const CalcProvider = (props) => {
  const setOrders = orders => {
    setState({ ...state, orders: orders });
  };

  const setWeight = weight => {
    setState({ ...state, weight: weight });
  };

  const initState = {
  orders: 50,
  setOrders: setOrders,
  ordersMin: 0,
  ordersMax: 100,
  ordersStep: 10,
  weight: 60,
  setWeight: setWeight,
  weightMin: 0,
  weightMax: 100,
  weightStep: 10,
  cities: [
    "San Francisco",
    "New York"
  ]
  };



  const [state, setState] = useState(initState);

  return (
    <CalcContext.Provider value={state}>{props.children}</CalcContext.Provider>
  );
};
export const CalcConsumer = CalcContext.Consumer;
export default CalcContext;

//https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component




//#3 from https://kentcdodds.com/blog/application-state-management-with-react
// src/count/count-context.js
// import React from 'react'
// const CalcContext = React.createContext()
// function useCalc() {
//   const context = React.useContext(CalcContext)
//   if (!context) {
//     throw new Error(`useCalc must be used within a CalcProvider`)
//   }
//   return context
// }
// function CalcProvider(props) {
//   const [count, setCount] = React.useState(50);
//   const [orders, setOrders] = React.useState(40);
//   const value = React.useMemo(() => [count, setCount], [count]);
//   const orders = React.useMemo(() => [orders, setOrders], [orders]);
//   return <CalcContext.Provider value={value} orders={orders} {...props} />
// }
// export {CalcProvider, useCalc};

//#2 try from https://dev.to/sunnysingh/sharing-state-using-reacts-context-api-3623
// import React, { createContext } from "react";

// const CalculatorContext = createContext({
//   orders: 55,
//   updateOrders: () => {}
// });

// export class CalculatorProvider extends React.Component {
//   updateOrders = newOrders => {
//     this.setState({ orders: newOrders });
//   };

//   state = {
//     orders: 77,
//     updateOrders: this.updateOrders
//   };

//   render() {
//     return (
//       <CalculatorContext.Provider value={this.state}>
//         {this.props.children}
//       </CalculatorContext.Provider>
//     );
//   }
// }

// export const CalculatorConsumer = CalculatorContext.Consumer;

//#1 try
// import React, { Component } from "react";

// const AppContext = React.createContext();

// export default class AppProvider extends Component {
//   state = {
//       orders: '55',
//   weight: '66'
//   }
//   render() {
//     return (
//       <AppContext.Provider value={this.state}>
//         {this.props.children}
//       </AppContext.Provider>
//     );
//   }
// }
