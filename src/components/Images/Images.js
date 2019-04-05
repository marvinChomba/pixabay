import React from "react";
import classes from "./Images.css"
import Image from "./Image/Image";

const images = props => {
  const images = props.images.map(image => {
    return <Image src={image.largeImageURL} alt={image.type} key={image.id} />
  })
  return (
    <div className={classes.Images}>
      {images}
    </div>
  )
};

export default images