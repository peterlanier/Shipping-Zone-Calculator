import React, { Component } from "react";
import { render } from "react-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CalculatorInput from "./CalculatorInput";
import CalculatorOutput from "./CalculatorOutput";
import Store from "./Store";

export default class Calculator extends Component {
  render() {

    return (
      <CalcProvider>
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              item
              xs={12}
              style={{ padding: "20px", backgroundColor: "lightgray" }}
            >
              <CalculatorInput />
            </Grid>
            <Grid item xs={12} md={12} style={{ padding: "20px" }}>
              <CalculatorOutput />
            </Grid>
            <Grid item xs={12} md={12} style={{ padding: "20px" }}>
              <CalculatorOutput />
            </Grid>
          </Grid>
        </Container>
      </CalcProvider>
    );
  }
}