import React from "react";
import { Card, Container, Nav, Image } from "react-bootstrap";
import styled from "styled-components";
import seniorPhoto from "../../../static/assets/images/homepage-photos/senior_photo.jpg";

const Styles = styled.div`
  .card-wrapper {
    position: relative;
    transition: box-shadow 0.5s;
    z-index: 10;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 20px;

    .img-background {
      height: 700px;
      width: 500px;

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      // box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
      transition: box-shadow 0.5s;
    }

    .card-text {
      display: flex;
      justify-content: center;
      flex-direction: column;

      color: #2b2b2b;

      h3 {
        margin-bottom: 20px;
      }
    }

    .img-text-wrapper {
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      text-align: center;
      //   padding-left: 100px;
      //   padding-right: 100px;

      .subtitle {
        color: transparent;
        transition: color 1s;
      }

      .img-text-wrapper:hover .subtitle {
        color: #c1cfda;
        font-weight: 400;
      }
    }
  }

  .card-wrapper:hover {
    box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 10px rgba(0, 0, 0, 0.25);
  }
`;

const HomepageCards = () => {
  return (
    <Styles>
      <Nav.Link href="/#">
        <div className="card-wrapper">
          <div className="img-wrapper">
            <div
              className="img-background"
              style={{
                backgroundImage: `url(${seniorPhoto})`
              }}
            ></div>
          </div>
          <div
            className="card-text"
            style={{
              paddingRight: "10px",
              alignItems: "flex-start"
            }}
          >
            <h3>High School Seniors</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              nostrum, quibusdam eos alias numquam pariatur obcaecati nisi
              quaerat dolore modi repellendus fugiat ipsa. Ducimus laborum
              velit, ut, harum facilis magnam quidem nesciunt illum atque illo
              natus ipsam, vero sint laboriosam molestiae labore inventore
              similique sapiente voluptatum repellat. Error corrupti voluptate,
              dolor reiciendis ipsum atque id ullam possimus laudantium
              voluptatem repellat amet tempore cum dolore, quibusdam distinctio,
              temporibus cumque labore corporis consequuntur molestiae ab magnam
              asperiores at? Eum pariatur temporibus labore laudantium iste
              consequatur esse exercitationem autem quasi doloremque unde ex
              quaerat fugiat, voluptatum dolorem numquam corporis maiores
              officiis fuga. Nihil!
            </p>
          </div>
          {/* <Image className="img" src={seniorPhoto} rounded /> */}
          <div className="img-text-wrapper">
            <div className="subtitle">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              voluptate.
            </div>
          </div>
        </div>
      </Nav.Link>

      <Nav.Link href="/#">
        <div className="card-wrapper">
          <div
            className="card-text"
            style={{
              textAlign: "end",
              paddingLeft: "10px"
            }}
          >
            <h3>Sports</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              nostrum, quibusdam eos alias numquam pariatur obcaecati nisi
              quaerat dolore modi repellendus fugiat ipsa. Ducimus laborum
              velit, ut, harum facilis magnam quidem nesciunt illum atque illo
              natus ipsam, vero sint laboriosam molestiae labore inventore
              similique sapiente voluptatum repellat. Error corrupti voluptate,
              dolor reiciendis ipsum atque id ullam possimus laudantium
              voluptatem repellat amet tempore cum dolore, quibusdam distinctio,
              temporibus cumque labore corporis consequuntur molestiae ab magnam
              asperiores at? Eum pariatur temporibus labore laudantium iste
              consequatur esse exercitationem autem quasi doloremque unde ex
              quaerat fugiat, voluptatum dolorem numquam corporis maiores
              officiis fuga. Nihil!
            </p>
          </div>
          <div
            className="img-wrapper"
            style={{
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <div
              className="img-background"
              style={{
                backgroundImage: `url(${seniorPhoto})`
              }}
            ></div>
          </div>
          {/* <Image className="img" src={seniorPhoto} rounded /> */}
          <div className="img-text-wrapper">
            <div className="subtitle">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              voluptate.
            </div>
          </div>
        </div>
      </Nav.Link>
    </Styles>
  );
};

export default HomepageCards;
