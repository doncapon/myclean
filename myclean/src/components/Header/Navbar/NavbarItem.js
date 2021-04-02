import React from 'react';
import {Link} from "react-router-dom";
import navbarData from "../../../data/Navbar/navbar";

function NavbarItem(props) {
    return(
        navbarData.map(item=>(
            <li key={item.id}
                className={item.subMenu || item.megaMenu ? 'menuItemHasChildren' : ''}
            >
                <Link to={`${process.env.PUBLIC_URL + item.link}`}>{item.title}</Link>
                {(() => {
                    if(item.subMenu){
                        return(
                            <ul className="subMenu">
                                {
                                    item.subMenu.map((subItem,index)=>{
                                        return <li key={index}><Link to={`${process.env.PUBLIC_URL + subItem.link}`}>{subItem.title}</Link></li>
                                    })
                                }
                            </ul>
                        )
                    }

 
                })()}
            </li>
        ))
    )
}

export default NavbarItem