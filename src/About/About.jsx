import React, { PureComponent } from "react";

class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="homeBa vh-100 d-flex justify-content-center align-items-center">
          <section className=" container  d-flex justify-content-center align-items-center flex-column">
            <div className="text-center p-2">
              <h1 className=" text-white">ABOUT COMPONENT</h1>
              <div className="starIco position-relative ">
                <i className="fa-solid fa-star fs-5 text-white "></i>
              </div>
            </div>
            <div className="contAbout d-flex mt-3">
              <p className="text-white p-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>

              <p className="text-white p-4">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default About;
