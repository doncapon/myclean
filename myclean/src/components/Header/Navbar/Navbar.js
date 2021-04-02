import React from 'react';
import NavbarItem from './NavbarItem' 
import MobileMenu from "../../mobile-menu/MobileMenu";
import MobileBtn from "../../mobile-menu/MobileBtn";

function Navbar(props) {

    const triggerSearch = () => {
        const offcanvasMobileMenu = document.querySelector(".search_icon_inr");
        offcanvasMobileMenu.classList.toggle("active");
    };

    return (
<div className="menu_area">	 
    <div className="navigation">
        <div className="container"> 
            <div className="row">  
                <div id="navigation">
                    <ul>
                        <NavbarItem />
                    </ul>
                </div>

                
                {/* Mobile Menu */}

                <MobileBtn /> 

                <MobileMenu />

                {/* End:  Mobile Menu */}

                
                {/* Start: search  */}
                <div className="menu_right">
                    <ul>
                        <li className="header_search">
                            <button onClick={() => triggerSearch()} className="cart-toggler search_icon"><i className="icon-glyph-16"></i></button>

                            <div className="search_icon_inr">
                                <form action="#" method="POST">
                                    <div>
                                        <input placeholder="Search" type="text" />
                                        <button className="btn-search" type="submit">
                                            <i className="fa fa-search"></i>
                                        </button>
                                    </div>
                                </form>
                            </div> 
                        </li>
                    </ul>
                </div>
                {/* End: search  */}


            </div>
        </div>
    </div>
</div>

    );
}

export default Navbar;