import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomepagePhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homepagePhotoClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ portfolioItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: "" });
  }

  render() {
    const { _id, description, thumb_image_url } = this.props.photo;
    return (
      <Link to={`/homepage/${_id}`}>
        <div
          className="homepage-photo-wrapper"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}
        >
          <div
            className={
              "homepage-img-background " + this.state.homepagePhotoClass
            }
            style={{
              backgroundImage: "url(" + thumb_image_url + ")",
              height: "400px",
              width: "400px",
              backgroundSize: "cover"
            }}
          />

          <div className="img-text-wrapper">
            <div className="subtitle">{description}</div>
          </div>
        </div>
      </Link>
    );
  }
}
