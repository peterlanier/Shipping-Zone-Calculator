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
      <Grid item xs={12} md={6}>
        <InputSlider
          label="ORDER VOLUME"
          value={orders}
          setValue={setOrders}
          num="1"
          min={100}
          max={100000}
          step={1000}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <InputSlider
          label="PARCEL WEIGHT"
          value={weight}
          setValue={setWeight}
          num="2"
          min={0}
          max={150}
          step={10}
        />
      </Grid>
    </Grid>
  );
}
