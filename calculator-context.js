//#3 from https://kentcdodds.com/blog/application-state-management-with-react
// src/count/count-context.js
import React from 'react'
const CalcContext = React.createContext()
function useCalc() {
  const context = React.useContext(CalcContext)
  if (!context) {
    throw new Error(`useCalc must be used within a CalcProvider`)
  }
  return context
}
function CalcProvider(props) {
  const [count, setCount] = React.useState(50);
  const [orders, setOrders] = React.useState(40);
  const value = React.useMemo(() => [count, setCount], [count]);
  const orders = React.useMemo(() => [orders, setOrders], [orders]);
  return <CalcContext.Provider value={value} orders={orders} {...props} />
}
export {CalcProvider, useCalc};

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