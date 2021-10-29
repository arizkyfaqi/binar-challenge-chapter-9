import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselBox.css";

const CarouselBox = () => {
  return (
    <div class="row" id="slider">
      <div class="col-md-4" id='text'>
        <h2>What's so special?</h2>
        <p>THE GAME</p>
      </div>
      <div className="carousel-container" class="col-md-6">
        <Carousel>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/images/rps1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Game A</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/images/rps2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Game B</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="/images/rps3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Game C</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselBox;
