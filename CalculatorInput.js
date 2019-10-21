import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import InputSlider from "./Components/InputSlider";
import CitySelect from "./Components/CitySelect";

import Grid from "@material-ui/core/Grid";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useCalc } from "./calculator-context";

export default function CalculatorInput(props) {
    // const { orders, weight, ...props } = this.props;
    const [orders] = useCalc();
    return (

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputSlider
            label="Order Volume"
            valueV={orders}
            { ...props}
          />
        </Grid>
        <Grid item xs={6}>
          <InputSlider
            label="Average Parcel Weight"

            { ...props}
          />
        </Grid>
      </Grid>
    );
  }

