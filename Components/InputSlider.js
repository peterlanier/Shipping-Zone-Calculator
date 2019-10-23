import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

export default function InputSlider(props) {
  const { value, setValue, num, min, max, step } = props;

  const marks = [
    {
      value: min,
      label: min
    },

    {
      value: max,
      label: max
    }
  ];

  function valuetext(value) {
    //return `${value}°C`;
    return value;
  }

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < min) {
      setValue(min);
    } else if (value > max) {
      setValue(max);
    }
  };

  return (
    <div>
      <Typography id="input-slider" gutterBottom>
        <span className="circle">{num}</span>
        <strong>{props.label}</strong>
      </Typography>
      <Grid
        container
        spacing={2}
        alignItems="center"
        style={{ marginTop: "20px" }}
      >
        <Grid item />
        <Grid item>
          <Input
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: step,
              min: min,
              max: max,
              type: "number",
              "aria-labelledby": "input-slider"
            }}
          />
        </Grid>

        <Grid item xs style={{padding:"0 40px"}}>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={min}
            max={max}
            marks={marks}

          />
        </Grid>
      </Grid>
    </div>
  );
}
