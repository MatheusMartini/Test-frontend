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
import Card from "./components/Card";

export default function FormPropsTextFields() {
  const [isValid, setIsValid] = useState(true);
  const [valueField, setValueField] = useState();
  const [search, setSearch] = useState();
  const [result, setResult] = useState([]);
  const [err, setErr] = useState();

  const [numberPag, setNumberPag] = useState();
  const [count, setCount] = useState(1);

  const handleChange = (event) => {
    setValueField(event.target.value);
  };
  const handleChangeText = (event) => {
    setSearch(event.target.value);
    setIsValid(false);
  };
  const handleClik = () => {
    Api.get(`?type=${valueField}&apikey=7e35354&s=${search}&page=${count}`)
      .then((res) => {
        setResult(res.data.Search);
        setNumberPag(res.data.totalResults);
        setCount(count);
        res.data.Error ? setErr(res.data.Error) : setErr("");
      })
      .catch((err) => {
      });
  };
  const reset = () =>{
    window.location.reload()
  }
  useEffect(() => {
    handleClik(count);
  }, [count]);

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
        <Button
          onClick={reset}
          variant="contained"
          color="primary"
          disabled={isValid}
        >
          Reset
        </Button>
      </div>

      <div>
        {result &&
          result.map((iten, index) => <Card iten={iten} key={index} />)}
      </div>
      <div className="numberPage">
        {numberPag && (
          <div className="button">
            <p>
              pag {count} of {numberPag}
            </p>
            <Button
              id="decrement"
              onClick={() => setCount(count - 1)}
              variant="contained"
              color="primary"
              disabled={isValid}
            >
              Prev Page
            </Button>
            <Button
              id="increment"
              onClick={() => setCount(count + 1)}
              variant="contained"
              color="primary"
              disabled={isValid}
            >
              Next Page
            </Button>
          </div>
        )}
      </div>
        <p>{err}</p>
    </div>
  );
}
