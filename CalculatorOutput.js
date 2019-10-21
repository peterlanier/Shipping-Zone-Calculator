import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import ZoneTable from "./Components/ZoneTable";
import Grid from "@material-ui/core/Grid";
import CitySelect from "./Components/CitySelect";
import ResultTable from "./Components/ResultTable";
import Typography from "@material-ui/core/Typography";

export default class CalculatorOutput extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CitySelect />
        </Grid>
        <Grid item></Grid>
        <Grid item xs={12} md={6}>
              <Typography id="input-slider" gutterBottom>
        FULLFILLMENT FROM SELECTED AREAS
      </Typography>
          
          <ZoneTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <ResultTable />
        </Grid>
      </Grid>
    );
  }
}
