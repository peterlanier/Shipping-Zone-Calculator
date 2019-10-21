import React, { Component } from "react";
import { render } from "react-dom";
import Calculator from "./Calculator";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 30,
      value2: 88
    };
  }

  render() {
    const {...props} = this.state;
    return (
      <Grid maxWidth="lg" container>
        <Grid md={6} item>
          <Calculator { ...props } />
        </Grid>
        <Grid md={6} item>
          <Calculator { ...props } />
        </Grid>
      </Grid>
    );
  }
}

render(<App />, document.getElementById("root"));
