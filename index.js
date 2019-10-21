import React, { Component } from "react";
import { render } from "react-dom";
import Calculator from "./Calculator";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { ...props } = this.state;
    return (
      <Grid container>
        <Grid md={12} item>
          <Calculator
          {...props}
          />
        </Grid>
      </Grid>
    );
  }
}

render(<App />, document.getElementById("root"));
