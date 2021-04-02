import React, { Fragment } from "react";  
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";  
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import {Link} from "react-router-dom"; 
 
import ServicesData from '../../data/Services/service-one' 


const ServiceContentWrap = ({service}) => {
    return (
        <Fragment>

            <div className="col-md-4 col-sm-12"> 
                <img src={require('../../assets/images/' + service.singleThumb)} alt="service" />
            </div>

            <div className="col-md-4 col-sm-12 single_service_page_content">
                <div className="single_service_title">
                <h3>{service.title}</h3> 
                {<div dangerouslySetInnerHTML={{__html: service.description}}/>}
                </div>
            </div>

            <Sidebar classes={'col-md-4 col-sm-12 single_service_side_bar'}>
                <SidebarItem classes="single_service_category">
                    <List>
                        {
                            ServicesData.map(serviceItem=>(
                                <LI key={serviceItem.id}><i className="fa fa-angle-right"></i>
                                    <Link to={`${process.env.PUBLIC_URL + `/service/${serviceItem.title.split(' ').join('-').toLowerCase()}?id=${serviceItem.id}`}`}>
                                        {serviceItem.title}
                                    </Link>
                                </LI>
                            ))
                        }
                    </List> 
                </SidebarItem>
            </Sidebar>

        </Fragment>
    );
};

export default ServiceContentWrap;