import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

// const useStyles = makeStyles({
//   root: {
//     width: 250
//   },
//   input: {
//     width: 42
//   }
// });

export default class InputSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    }
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSliderChange(event, newValue) {
    this.setState({ value: newValue });
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleBlur() {
    if (this.state.value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  }

  // handleInputChange = event => {
  //   setValue(event.target.value === "" ? "" : Number(event.target.value));
  // };

  // handleBlur = () => {
  //   if (value < 0) {
  //     setValue(0);
  //   } else if (value > 100) {
  //     setValue(100);
  //   }
  // };

  render() {
    const {label} = this.props;

    return (
      <div>
        <Typography id="input-slider" gutterBottom>
          {label}{this.state.value}
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Input
              // className={classes.input}
              value={this.state.value}
              margin="dense"
              onChange={this.handleInputChange}
              // onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
          <Grid item xs>
            <Slider
              value={
                typeof this.state.value === "number" ? this.state.value : this.state.value
              }
              onChange={this.handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid item />
        </Grid>
      </div>
    );
  }
}

InputSlider.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number
}