import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import Portfolio from "./Portfolio";
import hobby1 from "./Images/hobby1.jpg";
import hobby2 from "./Images/hobby2.jpg";
import hobby3 from "./Images/hobby3.jpg";

function Routing() {
  let navigate = useNavigate();
  let movePage = () => {
    navigate("/");
  };

  return (
    <div className="my-5 p-5 text-center">
      <h1> New Page </h1>
      <Button onClick={movePage}>Back To Home</Button>

      {/* Carousel Start */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={hobby1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={hobby2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={hobby3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel End */}
    </div>
  );
}

export default Routing;
