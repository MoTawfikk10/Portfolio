import React, { PureComponent } from "react";

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  } v

  render() {
    return (
      <>
        <div className="  vh-100 d-flex justify-content-center align-items-center">
          <section className=" container  d-flex justify-content-center align-items-center flex-column">
            <div className="text-center p-2">
              <h1 className="contactHead  fw-bolder">CONATCT SECTION</h1>
              <div className="starIcoCont position-relative ">
                <i className="fa-solid fa-star fs-5  "></i>
              </div>
            </div>
            <form className="my-form container w-75">
              <div className=" p-5">
                {/* <!-- 1 --> */}
                <div className=" my-2">
                  <input
                    type="text"
                    className="form-control my-inpu- my-3 py-2"
                    placeholder="userName"
                    aria-label="Name"
                  />
                </div>

                <div className=" my-2">
                  <input
                    type="text"
                    className="form-control my-inpu- my-3 py-2"
                    placeholder="userAge"
                    aria-label="Name"
                  />
                </div>

                <div className=" my-2">
                  <input
                    type="text"
                    className="form-control my-inpu- my-3 py-2"
                    placeholder="userEmail"
                    aria-label="Name"
                  />
                </div>

                <div className=" my-2">
                  <input
                    type="text"
                    className="form-control my-inpu- my-3 py-2"
                    placeholder="userPassword"
                    aria-label="Name"
                  />
                </div>

                <button
                  type="submit"
                  className="btn text-white my-subm my-2 ms-2 p-2"
                >
                  send Message
                </button>
              </div>
            </form>
          </section>
        </div>
      </>
    );
  }
}

export default Contact;
