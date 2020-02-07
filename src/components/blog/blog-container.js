import React, { Component } from "react";
import axios from "axios";

import BlogPost from "../blog/blog-post";

export default class BlogContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome",
      isLoading: false,
      data: []
    };
  }

  getBlogPosts() {
    axios
      .get("https://bac-bottega-capstone-api.herokuapp.com/blog-entries")
      .then((response) => {
        this.setState({
          data: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  blogPosts() {
    return this.state.data.map((post) => {
      return <BlogPost key={post._id} post={post} />;
    });
  }

  componentDidMount() {
    this.getBlogPosts();
  }

  render() {
    console.log(this.state.data);
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="blog-wrapper">
        <div className="blog-posts-wrapper">{this.blogPosts()}</div>
      </div>
    );
  }
}
