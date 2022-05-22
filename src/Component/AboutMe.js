import React from "react";
import aboutPic from "./Images/showcase.svg";
import { ReactComponent as Wave1 } from "./Images/wave.svg";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function AboutMe() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section
        className="bg-dark text-light pt-5 p-lg-0 pt-lg-5 text-center text-sm-start"
        id="about"
      >
        <div className="container">
          <div className="d-sm-flex">
            <div>
              <h1>
                <span className="text-warning"> About Me </span>
              </h1>
              <p className="lead my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                amet, fugiat architecto veritatis, ipsa vitae a consectetur
                aspernatur libero unde exercitationem deserunt ad mollitia
              </p>
              <p className="lead my-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                amet, fugiat architecto veritatis, ipsa vitae a consectetur
                aspernatur libero unde exercitationem deserunt ad mollitia
                tempore nostrum sint. Et minus, mollitia enim ullam perferendis
              </p>
              <Button
                variant="primary"
                onClick={handleShow}
                classNameName="mt-3 btn-lg"
              >
                Contact Me
              </Button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src={aboutPic}
              alt="main"
            />
          </div>
        </div>

        <Wave1 />
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill This Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              classNameName="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group
              classNameName="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              classNameName="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Submit
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AboutMe;
