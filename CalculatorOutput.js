import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import ZoneTable from "./Components/ZoneTable";
import Grid from "@material-ui/core/Grid";

export default class CalculatorOutput extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ZoneTable />
        </Grid>
      </Grid>
    );
  }
}
