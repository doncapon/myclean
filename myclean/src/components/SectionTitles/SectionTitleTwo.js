import PropTypes from "prop-types";
import React from "react";

const SectionTitle = ({ title, subtitle }) => {
  return (
 
    <div className="base_header_2 base_header">
        <h3>{title}</h3> 
        <p>{subtitle}</p>
    </div>
    
  ); 
};

SectionTitle.propTypes = {
    title: PropTypes.string,
  subtitle: PropTypes.string
};

export default SectionTitle;
