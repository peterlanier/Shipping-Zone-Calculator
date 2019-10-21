import React, { Component } from "react";
import { render } from "react-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import DisplayInput from "./DisplayInput.js";
import DisplayOutput from "./DisplayOutput.js";

export default class Calculator extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { ...props } = this.props;
    return (
      <Container maxWidth="md" style={{ background: "gray" }}>
        <Grid container>
          <Grid item xs={12}>
            <DisplayInput { ...props } />
          </Grid>
          <Grid item xs={12} style={{ background: "brown" }}>
            <DisplayOutput { ...props } />
          </Grid>
        </Grid>
      </Container>
    );
  }
}
