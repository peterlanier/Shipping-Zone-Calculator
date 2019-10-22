import React, { Component } from "react";
import { render } from "react-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";


export default function CitySelect(props) {
    
    const cities = props.values;
    console.log(cities)
    const CityList = cities.map((city) => <MenuItem value={city}>{city}</MenuItem>);

    return (
      <FormControl variant="outlined" style={{width: '100px'}}>
        <InputLabel htmlFor="outlined-age-simple">City</InputLabel>
        <Select
          value=""
          autoWidth={false}

          inputProps={{
            name: "City",
            id: "outlined-age-simple"
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {CityList}
        </Select>
      </FormControl>
    );
  
}
