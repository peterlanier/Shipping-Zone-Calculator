import React, { Component } from "react";
import { render } from "react-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default class CitySelect extends Component {
  render() {
    return (
      <FormControl variant="outlined">
        <InputLabel htmlFor="outlined-age-simple">City</InputLabel>
        <Select
          value=""
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
    );
  }
}
