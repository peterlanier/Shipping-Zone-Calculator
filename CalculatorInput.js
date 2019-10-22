import React, { useContext } from "react";
import { render } from "react-dom";
import "./style.css";
import InputSlider from "./Components/InputSlider";
import Grid from "@material-ui/core/Grid";
import { OrdersContext, WeightContext } from "./Store";

export default function CalculatorInput() {
  const [orders, setOrders] = useContext(OrdersContext);
  const [weight, setWeight] = useContext(WeightContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <InputSlider label="Avg. # of Orders/Month" value={orders} setValue={setOrders} num="1" />
      </Grid>
      <Grid item xs={6}>
        <InputSlider label="Average Parcel Weight (lbs.)" value={weight} setValue={setWeight} num="2" />
      </Grid>
    </Grid>
  );
}
