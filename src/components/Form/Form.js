import React from "react";
import classes from "./Form.css";

const form = props => (
  <form onSubmit={props.search} className={classes.Form}>
    <input type="text"name="searchStuff" autoComplete="off" placeholder="Search for an image..."/>
    <input type="number" name="num" id="" placeholder="Number of images(must be >= 3)" required/>
    <button type="submit">Search for Images!</button>
  </form>
);

export default form