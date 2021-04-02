import PropTypes from "prop-types";
import React, { Fragment } from "react";

import Footer from "../components/Footer/footer"; 
import Header from '../components/Header/HeaderTwo'
import Navbar from "../components/Header/Navbar/Navbar";

const LayoutTwo = ({ children }) => {
  return (
    <Fragment>
      <div className="layoutTwo">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </div>
    </Fragment>
  );
};

LayoutTwo.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.string
};

export default LayoutTwo;
