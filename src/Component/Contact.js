import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import contactPic from "./Images/contact3.png";
//import contactPic from "./Images/fundamentals.svg";
import { ReactComponent as Wave2 } from "./Images/wave2.svg";

function Contact() {
  return (
    <section id="contact" className="">
      <div className="container">
        <div className="row text-center mb-3">
          <div className="col"></div>
        </div>
        <div className="row align-items-center  justify-content-between">
          <div className="col-md p-5">
            <h2 className="fw-bold">Contact Me</h2>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-md my-2">
            <img src={contactPic} alt="contact-pic" className="img-fluid" />
          </div>
        </div>
      </div>
      <Wave2 />
    </section>
  );
}

export default Contact;
