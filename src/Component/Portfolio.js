import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import hobby1 from "./Images/hobby1.jpg";
import hobby2 from "./Images/hobby2.jpg";
import hobby3 from "./Images/hobby3.jpg";
import hobby4 from "./Images/hobby4.jpg";
import aboutPic from "./Images/showcase.svg";
import Modals1 from "./Modals/Modals1";
import Modals2 from "./Modals/Modals2";
import Modals3 from "./Modals/Modals3";

function Portfolio() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="p-5">
      <Slider {...settings}>
        <div>
          <Card>
            <Card.Img variant="top" src={hobby1} />
            <Card.Body>
              <Card.Title>Project 1 </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                data-bs-toggle="modal"
                data-bs-target="#m1"
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={hobby2} />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                data-bs-toggle="modal"
                data-bs-target="#m2"
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={hobby3} />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                data-bs-toggle="modal"
                data-bs-target="#m3"
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={hobby4} />
            <Card.Body>
              <Card.Title>Project 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={hobby3} />
            <Card.Body>
              <Card.Title>Project 5</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img variant="top" src={hobby3} />
            <Card.Body>
              <Card.Title>Project 6</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
      </Slider>
      <Modals1 />
      <Modals2 />
      <Modals3 />
    </div>
  );
}

export default Portfolio;
