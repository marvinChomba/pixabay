import React from "react";
import classes from "./Image.css"

const image = props => {
  return (
    <div className={classes.Image}>
      <img src={props.src} alt={props.alt}/>
    </div>
  )
};

export default image;