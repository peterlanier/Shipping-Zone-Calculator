import React, { Component, useContext } from "react";
import { render } from "react-dom";
import "./style.css";
import InputSlider from "./Components/InputSlider";
import CitySelect from "./Components/CitySelect";

import Grid from "@material-ui/core/Grid";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import CalcContext from "./calculator-context";

export default function CalculatorInput() {

    const state = useContext(CalcContext);

    return (

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputSlider
            label="Order Volume"
            value={state.orders}
            setValue={state.setOrders}
          />
        </Grid>

        <Grid item xs={6}>
          <InputSlider
            label="Average Parcel Weight"
            value={state.weight}
            setValue={state.setWeight}
          />
        </Grid>
      </Grid>
    );
  }

