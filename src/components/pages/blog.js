import React, { Component } from "react";
import axios from "axios";

import BlogEntry from "../blog/blog-entry";

export default class BlogContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome",
      isLoading: false,
      data: []
    };
  }

  getBlogEntries() {
    axios
      .get("http://localhost:4000/blog-entries")
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  blogEntries() {
    return this.state.data.map((entry) => {
      return <BlogEntry key={entry._id} entry={entry} />;
    });
  }

  componentDidMount() {
    this.getBlogEntries();
  }

  render() {
    console.log(this.state.data);
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="blog-wrapper">
        <div className="blog-entries-wrapper">{this.blogEntries()}</div>
      </div>
    );
  }
}
