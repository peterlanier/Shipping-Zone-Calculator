import React, { Component, useContext } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

export default function InputSlider(props) {
  const {value, setValue} = props;


  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <div>
      <Typography id="input-slider" gutterBottom>
        {props.label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item />
        <Grid item>
          <Input
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
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
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </div>
  );
}

// export default class InputSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 20
//     };
//     this.handleSliderChange = this.handleSliderChange.bind(this);
//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleBlur = this.handleBlur.bind(this);
//   }

//   handleSliderChange(event, newValue) {
//     this.setState({ value: newValue });
//   }

//   handleInputChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleBlur() {
//     if (this.state.value < 0) {
//       this.setState({ value: 0 });
//     } else if (this.state.value > 100) {
//       this.setState({ value: 100 });
//     }
//   }

//   render() {
//     const { label } = this.props;

//     return (
//       <div>
//         <Typography id="input-slider" gutterBottom>
//           {label}
//         </Typography>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item>

//               <Input
//                 // className={classes.input}
//                 value={this.state.value}
//                 margin="dense"
//                 onChange={this.handleInputChange}
//                 onBlur={this.handleBlur}
//                 inputProps={{
//                   step: 10,
//                   min: 0,
//                   max: 100,
//                   type: "number",
//                   "aria-labelledby": "input-slider"
//                 }}
//               />

//           </Grid>
//           <Grid item xs>
//             <Slider
//               value={
//                 typeof this.state.value === "number"
//                   ? this.state.value
//                   : this.state.value
//               }
//               onChange={this.handleSliderChange}
//               aria-labelledby="input-slider"
//             />
//           </Grid>
//           <Grid item />
//         </Grid>
//       </div>
//     );
//   }
// }

// InputSlider.propTypes = {
//   label: PropTypes.string,
//   value: PropTypes.number
// };
