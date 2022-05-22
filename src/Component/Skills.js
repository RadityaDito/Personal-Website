import React from "react";
import { ProgressBar } from "react-bootstrap";
import reactPic from "./Images/react.svg";
import { ReactComponent as Wave4 } from "./Images/wave4.svg";

function Skills() {
  return (
    <section id="skills" className="bg-dark text-light ">
      <div className="container">
        <div className="row ">
          <div className="col">
            <div className="skills-title text-center">
              <h3 className="fw-bold mb-5">My Skills</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={reactPic} alt="Skills" className="img-fluid mb-4" />
          </div>
          <div className="col-md-6 ">
            {/* <h2 className="my-4 text-center"> Skills Bar</h2> */}
            <div>
              <div className="mb-3">
                <label className="mb-2">HTML & CSS</label>
                <ProgressBar variant="success" now={90} />
              </div>
              <div className="mb-3">
                <label className="mb-2">Javascript</label>
                <ProgressBar variant="info" now={70} />
              </div>
              <div className="mb-3">
                <label className="mb-2">Bootstrap</label>
                <ProgressBar variant="warning" now={85} />
              </div>
              <div className="mb-3">
                <label className="mb-2">React</label>
                <ProgressBar variant="danger" now={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wave4 />
    </section>
  );
}

export default Skills;
