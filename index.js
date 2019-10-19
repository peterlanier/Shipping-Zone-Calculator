import React, { Component } from "react";
import { render } from "react-dom";
import Calculator from "./Calculator";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Grid container>
        <Grid item>
          <Calculator />
        </Grid>
        <Grid item>
          <Calculator />
        </Grid>
      </Grid>
    );
  }
}

render(<App />, document.getElementById("root"));
