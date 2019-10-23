import React, { Component } from "react";
import { render } from "react-dom";
import Calculator from "./Calculator";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { OrdersContext } from "./Store";

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { ...props } = this.state;
    return (
      <Grid container>
        <Typography
          id="input-slider"
          style={{ display: "inline-block", margin: "auto", fontSize: "24px", marginBottom: "20px" }}
          gutterBottom
        >
          <strong>LOCATION CALCULATOR</strong>
        </Typography>
        <Grid md={12} item>
          <Calculator {...props} />
        </Grid>
      </Grid>
    );
  }
}

render(<App />, document.getElementById("root"));