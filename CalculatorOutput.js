import React, { Component, useContext } from "react";
import { render } from "react-dom";
import "./style.css";
import ZoneTable from "./Components/ZoneTable";
import Grid from "@material-ui/core/Grid";
import CitySelect from "./Components/CitySelect";
import ResultTable from "./Components/ResultTable";
import Typography from "@material-ui/core/Typography";
import { CityListContext, DistListContext, ChosenCityContext, ChosenDistContext } from "./Store";

export default function CalculatorOutput(props) {
  const [cityList, setCity] = useContext(CityListContext);
  const [distList, setDist] = useContext(DistListContext);
  const [chosenCity, setChosenCity] = useContext(ChosenCityContext);
  const [chosenDist, setChosenDist] = useContext(ChosenDistContext);

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ backgroundColor: "white", padding: "0 40px" }}
      >
        <Grid item xs={6}>
          <Typography
            id="input-slider"
            style={{ display: "inline-block" }}
            gutterBottom
          >
            <div class="circle">3</div>
            Select your port city
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <CitySelect
            values={cityList}
            value={chosenCity}
            setValue={setChosenCity}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          backgroundColor: "#FAFAFA",
          padding: "10px 40px",
          margin: "60px 0"
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography id="input-slider" gutterBottom>
            FULLFILLMENT FROM SELECTED AREAS
          </Typography>
          <ZoneTable />
        </Grid>
        <Grid item xs={12} md={6} style={{ paddingLeft: "100px" }}>
          <Typography id="input-slider" gutterBottom>
            RESULTS
          </Typography>
          <ResultTable />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{ backgroundColor: "white", padding: "0 40px" }}
      >
        <Grid item xs={6}>
          <Typography
            id="input-slider"
            style={{ display: "inline-block" }}
            gutterBottom
          >
            <div class="circle circle1">4</div>
            RED STAG FULLFILMENT CENTERS
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <CitySelect
            values={distList}
            value={chosenDist}
            setValue={setChosenDist}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        style={{
          backgroundColor: "#FAFAFA",
          padding: "10px 40px",
          margin: "60px 0"
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography id="input-slider" gutterBottom>
            FULLFILLMENT FROM SELECTED AREAS
          </Typography>
          <ZoneTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography id="input-slider" gutterBottom>
            RESULTS
          </Typography>
          <ResultTable />
        </Grid>
      </Grid>
    </>
  );
}
