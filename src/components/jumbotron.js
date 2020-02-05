import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import lensImage from "../../static/assets/images/silver.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${lensImage}) no-repeat fixed bottom;
    // filter: grayscale(100%);
    background-size: cover;
    color: #c1cfda;
    height: 300px;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;

export default function() {
  return (
    <Styles>
      <Jumbo fluid className="jumbo">
        <Container className="jumbo-description">
          <h1>Quality you can see.</h1>
          <p>
            Based in Beloit, Wisconsin, Paul Crave is a nationally-recognized,
            award-winning Master Photographer specializing in portraits. His
            work has been displayed at Epcot Center in Florida and other world
            tour destinations to represent professional photography in America.
            Paul Crave's photographs have also decorated the Board of Directors
            room of the Eastman Kodak national headquarters in New York; and
            featured in such magazines as Seventeen, Ebony, PhotoWorld and
            Sports Illustrated.
          </p>
        </Container>
      </Jumbo>
    </Styles>
  );
}
