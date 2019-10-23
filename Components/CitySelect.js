import React, { useState } from "react";
import { render } from "react-dom";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

export default function CitySelect(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const [isSelected, setIsSelected] = useState(false);

  const { values, value, setValue } = props;

  const List = values.map((city, key) => (
    <MenuItem value={city} key={key}>
      {city}
    </MenuItem>
  ));

  const handleChange = (event, newValue) => {
    setValue(event.target.value);
    if (!isSelected) {
      setIsSelected(true);
    }
  };

  return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-city" ref={inputLabel}>City</InputLabel>

        <Select
          onChange={handleChange}
          value={isSelected ? value : ""}
          autoWidth={false}
          labelWidth={labelWidth}
          inputProps={{
            name: "City",
            id: "outlined-city"
          }}
        >
          {List}
        </Select>
      </FormControl>
  );
}
