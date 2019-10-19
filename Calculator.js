import React, { Component } from "react";
import { render } from "react-dom";
import Container from "@material-ui/core/Container";
import CalculatorInput from "./CalculatorInput.js";
import CalculatorOutput from "./CalculatorOutput.js";

export default class Calculator extends Component {
  render() {
    return (
      <Container maxWidth="md">
        <CalculatorInput />
        <CalculatorOutput />
      </Container>
    );
  }
}
