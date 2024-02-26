import React, { PureComponent } from "react";

class Footer extends PureComponent {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <section className="row ">
              <div className="col-md-4 ">
                <div className="  text-center text-white p-5">
                  <h5>LOCATION</h5>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              {/* sec2 =  ================= = == =   */}
              <div className="col-md-4 ">
                <div className="  text-center text-white p-5">
                  <h5 className="mb-3">AROUND THE WEB</h5>
                  <div className="d-flex justify-content-center align-items-center ">
                    <div className="IcoBox d-flex justify-content-center align-items-center p-2 mx-1">
                      <i className="fa-brands fa-facebook"></i>
                    </div>
                    <div className="IcoBox d-flex justify-content-center align-items-center p-2 mx-1 ">
                      <i className="fa-brands fa-twitter"></i>
                    </div>

                    <div className="IcoBox d-flex justify-content-center align-items-center p-2 mx-1">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </div>

                    <div className="IcoBox d-flex justify-content-center align-items-center p-2 mx-1">
                      <i className="fa-solid fa-globe"></i>
                    </div>
                  </div>
                </div>
              </div>
              {/* sec3 =       = =====================  */}
              <div className="col-md-4  ">
                <div className="  text-center text-white p-5">
                  <h5 className="mb-1">ABOUT FREELANCER</h5>
                  <p>
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route
                  </p>
                </div>
              </div>
            </section>
            {/* Copyright */}
          </div>
          <div className="copyRight py-3 text-center text-white">
            <p>Copyright © Your Website 2021</p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
