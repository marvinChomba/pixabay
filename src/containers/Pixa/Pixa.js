import React, { Component } from "react";
import classes from "./Pixa.css"
import axios from "axios";
import Form from "../../components/Form/Form";
import Images from "../../components/Images/Images";
import Spinner from "../../components/UI/Spinner/Spinner";

const API_KEY = process.env.REACT_APP_KEY;

class Pixa extends Component {
  state = {
    images:[],
    error: false,
    show:true,
    loading:false,
    searchedTerm:null,
    numImages:null,
  }
  stopLoader = () => {
    this.setState({
      loading:false,
    })
  }
  getImage = e => {
    e.preventDefault()
    // get the search term from the input element
    let searchTerm = e.target.elements.searchStuff.value;
    let numOfImages = parseInt(e.target.elements.num.value)
    // join them using a + if there are more than 1 word
    const newTerm = searchTerm.split(" ").join("+");
    if (this.state.searchedTerm !== newTerm || this.state.numImages !== numOfImages) {
      this.setState({
        loading: true,
        searchedTerm:newTerm,
        numImages:parseInt(numOfImages)
      })
      axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${newTerm}&image_type=photo&pretty=true&per_page=${numOfImages}`).then(response => {
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
  }

  render() {
    let images;
    if(this.state.loading) {
      images = <Spinner/>
    } else {
      images = <Images images={this.state.images} error={this.state.error} />
    }
    return(
      <div className={classes.Pixa}>
        <Form search={(e) => this.getImage(e)}/>
          {images}
      </div>
    )
  }
}

export default Pixa