import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

import "./Screen.css";
import Api from "./api";

export default function FormPropsTextFields() {
  const [isValid, setIsValid] = useState(true);
  const [valueField, setValueField] = React.useState();
  const [search, setSearch] = React.useState();

  const handleChange = (event) => {
    setValueField(event.target.value);
    setIsValid(false);
  };
  const handleChangeText = (event) => {
    setSearch(event.target.value)
  };
  
  return (
    <div className="container">
      <div className="row">
      <FormControl component="fieldset">
          <RadioGroup name="select" onChange={handleChange}>
            <FormLabel component="legend">what do you want to watch?</FormLabel>
            <div>
              <FormControlLabel
                value="movie"
                control={<Radio />}
                label="Movies"
              />
              <FormControlLabel
                value="serie"
                control={<Radio />}
                label="Serie"
              />
            </div>
          </RadioGroup>
        </FormControl>

        <div className="textField">
          <TextField
            id="standard-search"
            label="Search Term"
            variant="outlined"
            type="search"
            color="secondary"
            onChange={handleChangeText}
          />
        </div>
      </div>

      <div className="button">
        <Button variant="contained" color="secondary" disabled={isValid}>
          Search
        </Button>
      </div>

    </div>
  );
}