import React, { PureComponent } from "react";
import Nav from "../Nav/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

class Layout extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Nav />

        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;
