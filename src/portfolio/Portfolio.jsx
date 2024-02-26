import React, { PureComponent } from "react";
import myImg1 from "../img/poert1.png";
import myImg2 from "../img/port2.png";
import myImg3 from "../img/port3.png";

class Portfolio extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="  d-flex justify-content-center align-items-center flex-column ">
          <section className=" py-5 mt-5 overflow-hidden container  d-flex justify-content-center align-items-center flex-column">
            <div className="text-center p-2">
              <h1 className="contactHead  fw-bolder">PORTFOLIO COMPONENT</h1>
              <div className="starIcoCont position-relative ">
                <i className="fa-solid fa-star fs-5  "></i>
              </div>
            </div>
          </section>
          <section className="container ">
            <div className="row g-3 p-3">
              <div className="col-md-4">
                <div
                  className=" portBox position-relative rounded-3 "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img className=" w-100 rounded-3" src={myImg1} alt="" />
                  <div className="hovPort d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-8x text-white"></i>
                  </div>
                </div>
              </div>

              {/* 2 */}
              <div className="col-md-4">
                <div
                  className=" portBox position-relative rounded-3 "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <img className="w-100 rounded-3" src={myImg2} alt="" />
                  <div className="hovPort d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-8x text-white"></i>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div className="col-md-4">
                <div
                  className=" portBox position-relative rounded-3  "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  <img className="w-100 rounded-3" src={myImg3} alt="" />
                  <div className="hovPort d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-8x text-white"></i>
                  </div>
                </div>
              </div>

              {/* 4 */}

              <div className="col-md-4">
                <div
                  className=" portBox position-relative rounded-3  "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img className="w-100 rounded-3" src={myImg1} alt="" />
                  <div className="hovPort d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-8x text-white"></i>
                  </div>
                </div>
              </div>
              {/* 5 */}

              <div className="col-md-4">
                <div
                  className=" portBox position-relative rounded-3 "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  <img className="w-100 rounded-3" src={myImg2} alt="" />
                  <div className="hovPort d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-8x text-white"></i>
                  </div>
                </div>
              </div>
              {/* 6 */}
              <div className="col-md-4">
                <div
                  className=" portBox  position-relative rounded-3  "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  <img className="w-100 rounded-3" src={myImg3} alt="" />
                  <div className="hovPort d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-plus fa-8x text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- Modal-1 --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content ">
              <div class="modal-body myModal position-relative ">
                <img src={myImg1} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal-2 --> */}
        <div
          class="modal fade"
          id="exampleModal2"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content ">
              <div class="modal-body myModal position-relative ">
                <img src={myImg2} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Modal-3 --> */}

        <div
          class="modal fade"
          id="exampleModal3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content ">
              <div class="modal-body myModal position-relative ">
                <img src={myImg3} className="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Portfolio;
