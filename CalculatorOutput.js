import React, { Component, useContext } from "react";
import { render } from "react-dom";
import "./style.css";
import ZoneTable from "./Components/ZoneTable";
import Grid from "@material-ui/core/Grid";
import CitySelect from "./Components/CitySelect";
import ResultTable from "./Components/ResultTable";
import Typography from "@material-ui/core/Typography";
import CalcContext from "./calculator-context";

export default function CalculatorOutput() {
  const state = useContext(CalcContext);

    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CitySelect values={state.cities} />
        </Grid>
        <Grid item />
        <Grid item xs={12} md={6}>
          <Typography id="input-slider" gutterBottom>
            FULLFILLMENT FROM SELECTED AREAS
          </Typography>
          {console.log(state)}
          <ZoneTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography id="input-slider" gutterBottom>
            RESULTS
          </Typography>
          <ResultTable />
        </Grid>
      </Grid>
    );

}
