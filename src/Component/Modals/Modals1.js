import React from "react";
import hobby1 from "../Images/hobby1.jpg";

function Modals1() {
  return (
    <div>
      {/* Start */}
      <div
        class="modal fade"
        id="m1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header ">
              <h5 class="modal-title " id="exampleModalLabel">
                Project 1
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="container-fluid">
                <div className="row justify-content-center">
                  <div className="col">
                    <img className="img-fluid py-3" src={hobby1} alt="main" />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h5 class="text-center">Description About The Project</h5>
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Natus nostrum, mollitia ex dicta enim ut quibusdam
                      assumenda beatae harum quos. Aspernatur natus quod
                      repellendus commodi molestias aperiam, iure exercitationem
                      corporis!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger "
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End */}
    </div>
  );
}

export default Modals1;
