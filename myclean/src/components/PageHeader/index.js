import React from "react";
import { Link } from "react-router-dom"; 

const PageHeader = ({ title,bgImg }) => {
  return ( 

    <header id="page-top" className="blog-banner" style={{backgroundImage: `url(${bgImg})`}}>
        <div className="container" id="blog">
            <div className="row blog-header text-left">
                <div className="col-sm-12"> 
                    <h4><Link to={process.env.PUBLIC_URL + "/"}> Home </Link> &gt; {title} </h4>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>  
    </header> 
    
  );
};
 
export default PageHeader;

 