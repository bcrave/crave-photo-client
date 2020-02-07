import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import bikers from "../../../static/assets/images/blog-carousel/bikers.jpg";
import glassRoof from "../../../static/assets/images/blog-carousel/glass_roof.jpg";
import harleyDavidson from "../../../static/assets/images/blog-carousel/harley_davidson.jpg";

const Styles = styled.div`
  .entry-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 50px;
  }
`;

export default function() {
  return (
    <Styles>
      <div className="entry-container">
        <div className="blog-carousel">
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={bikers} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={glassRoof}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={harleyDavidson}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="blog-wrapper">
          <h2>Blog</h2>
          <div className="blog-entry">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              unde expedita rem optio eum consequuntur! Totam dolores ullam
              quisquam laborum cum, ratione error, officiis a recusandae at iure
              veritatis autem neque quidem aut voluptate. Iure quisquam nam
              dolores velit dolorum quasi soluta, aliquid, rerum aut vero
              pariatur blanditiis autem mollitia!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              officia deserunt ex quae ad, repellat natus quisquam eius placeat
              ut voluptatem accusamus quia veritatis soluta eum temporibus
              eveniet esse dolore quam vero molestiae nisi. Voluptatum, odio
              expedita veritatis itaque harum sunt est sint ipsa sapiente
              laborum praesentium nemo excepturi odit?
            </p>
          </div>
        </div>
      </div>
    </Styles>
  );
}
