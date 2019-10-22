import React, { Component, useContext } from "react";
import { render } from "react-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CalculatorInput from "./CalculatorInput";
import CalculatorOutput from "./CalculatorOutput";
import Store from "./Store";

export default function Calculator(props) {

    return (
      <Store>
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              item
              xs={12}
              style={{ padding: "60px 40px", marginBottom: "60px", backgroundColor: "lightgray" }}
            >
              <CalculatorInput />
            </Grid>
            <Grid item xs={12} md={12}>
              <CalculatorOutput />
            </Grid>
          </Grid>
        </Container>
      </Store>
    );

}