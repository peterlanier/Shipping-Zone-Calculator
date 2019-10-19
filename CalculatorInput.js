import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import InputSlider from "./Components/InputSlider";



import Grid from "@material-ui/core/Grid";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default class Calculator extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <InputSlider
            label="Number of Orders"
          />
        </Grid>
        <Grid item xs={6}>
          <InputSlider
            label="Average DIM Weight"
          />
        </Grid>

        <Grid item xs={6}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-simple">City</InputLabel>
            <Select
              autoWidth={true}
              inputProps={{
                name: "City",
                id: "outlined-age-simple"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>San Francision</MenuItem>
              <MenuItem value={20}>Seattle</MenuItem>
              <MenuItem value={30}>New York</MenuItem>
              <MenuItem value={30}>Miami</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}
