import React, { Component } from "react";
import { render } from "react-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default function CitySelect(props) {

  const {values, value, setValue, num} = props;

  console.log(setValue, value);

  const List = values.map((city, key) => (
    <MenuItem value={city}>{city}</MenuItem>
  ));


  const handleChange = event => {
    setValue(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <FormControl variant="outlined" style={{ width: "100%" }}>
    
      <InputLabel htmlFor="outlined-age-simple">City</InputLabel>
      
      <Select
        onChange={handleChange}
        value={value}
        autoWidth={false}
        inputProps={{
          name: "City",
          id: "outlined-age-simple"
        }}
      >

        {List}
      </Select>
    </FormControl>
  );
}
