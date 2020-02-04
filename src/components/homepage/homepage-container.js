import React, { Component } from "react";
import axios from "axios";

import HomepagePhoto from "./homepage-photo";

export default class HomepageContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome",
      isLoading: false,
      data: []
    };
  }

  getHomepagePhotos() {
    axios
      .get("http://localhost:4000/photos")
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  homepagePhotos() {
    return this.state.data.map((photo) => {
      return <HomepagePhoto key={photo._id} photo={photo} />;
    });
  }

  componentDidMount() {
    this.getHomepagePhotos();
  }

  render() {
    console.log(this.state.data);
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="homepage-photos-wrapper">{this.homepagePhotos()}</div>
      </div>
    );
  }
}
