import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
	return (
 
    <div className="header_top_v2"> 
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <div className="header_text text-left">
                        <h6>klinarmen Cleaning Company</h6>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="header_wrapper_1 text-left">
                        <ul>
                            <li><i className="icon_clock_alt"></i>Opening Hours: 8:00AM - 6:00PM</li>
                        </ul>
                    </div>
                </div>
 
                <div className="col-md-2 col-sm-12">
                    <div className="header_social">
                        <a href="//facebook.com">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a href="//facebook.com">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a href="//facebook.com">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a href="//facebook.com">
                            <i className="fa fa-pinterest"></i>
                        </a>
                    </div>
                </div>
                 {/* End: social-nav */}

                 <div className="col-md-3 col-sm-12">
                    <div className="header_button text-right">
                        <Link to="contact">Free Quote</Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
 
	)
}


export default Header;