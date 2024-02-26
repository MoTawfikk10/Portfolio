import React, { PureComponent } from "react";
import myImg from "../img/avataaars.svg";

class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="homeBa vh-100 d-flex justify-content-center align-items-center">
          <section className=" container  d-flex justify-content-center align-items-center flex-column">
            <div className="  w-50  d-flex justify-content-center align-items-center ">
              <img className="w-50" src={myImg} alt="" />
            </div>
            <div className="text-center p-2">
              <h1 className=" text-white">START FRAMEWORK</h1>
              <div className="starIco position-relative ">
                <i className="fa-solid fa-star fs-5 text-white "></i>
              </div>
              <p className=" text-white">
                Graphic Artist - Web Designer - Illustrator
              </p>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Home;
