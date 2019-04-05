import React, { Component } from "react";
import axios from "axios";
import classes from "./Top.css";
import Spinner from "../../components/UI/Spinner/Spinner";
import Images from "../../components/Images/Images";

const API_KEY = process.env.REACT_APP_KEY;


class TopImages extends Component {
  state = {
    images: [],
    error:false,
    loading:true
  }
  componentDidMount(){
    axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=top&image_type=photo&pretty=true&per_page=15`).then(response => {
      this.setState({
        images: response.data.hits,
        error: false,
        loading: false,
      })
    }).catch(error => {
      this.setState({
        error: true,
        images: [],
        loading: false
      })
    })
  }
  render() {
    let images;
    if (this.state.loading) {
      images = <Spinner />
    } else {
      images = <Images images={this.state.images} error={this.state.error} />
    }
    return (
      <div className={classes.Pixa}>
        {images}
      </div>
    )
  }

}
export default TopImages