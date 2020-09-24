import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";

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
  const [valueField, setValueField] = useState();
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);
  const [err, setErr] = useState();

  const handleChange = (event) => {
    setValueField(event.target.value);
    setIsValid(false);
  };
  const handleChangeText = (event) => {
    setSearch(event.target.value);
  };

  const handleClik = () => {
    Api.get(`?type=${valueField}&apikey=7e35354&s=${search}&page=${3}`)
      .then((res) => {
        setResult(res.data.Search);
        console.log(res.data.Search);
        res.data.Error ? setErr(res.data.Error) : setErr("");
      })
      .catch((err) => {});
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
                value="series"
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
        <Button
          onClick={handleClik}
          variant="contained"
          color="secondary"
          disabled={isValid}
        >
          Search
        </Button>
      </div>

      <div>
        <h1>Listar os Filmes</h1>
        {result &&
          result.map((iten, index) => (
            <div>
              <h2 key={index}>
                Title: {iten.Title}, Year: {iten.Year}.
              </h2>
              <button>View Details</button>
            </div>
          ))}
      </div>
    </div>
  );
}
