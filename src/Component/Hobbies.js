import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import hobby1 from "./Images/hobby1.jpg";
import hobby2 from "./Images/hobby2.jpg";
import hobby3 from "./Images/hobby3.jpg";
import hobby4 from "./Images/hobby4.jpg";
import { ReactComponent as Wave3 } from "./Images/wave3.svg";
import Portfolio from "./Portfolio";

function Hobbies() {
  return (
    <section id="portfolio" className="">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col">
            <h3 className="fw-bold">My Projects</h3>
          </div>
        </div>
        {/* <Portfolio /> */}
        {/* <div className="row">
          <div className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" src={hobby1} />
              <Card.Body>
                <Card.Title>Portfolio 1 </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" src={hobby2} />
              <Card.Body>
                <Card.Title>Portfolio 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" src={hobby3} />
              <Card.Body>
                <Card.Title>Portfolio 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" src={hobby4} />
              <Card.Body>
                <Card.Title>Portfolio 4</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" src={hobby3} />
              <Card.Body>
                <Card.Title>Portfolio 5</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mb-3">
            <Card>
              <Card.Img variant="top" src={hobby3} />
              <Card.Body>
                <Card.Title>Portfolio 6</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div> */}
      </div>
      <Portfolio />
      <Wave3 />
    </section>
  );
}
export default Hobbies;
