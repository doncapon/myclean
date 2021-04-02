import React, { Fragment } from "react";  
import PageHeader from '../../components/PageHeader'  
import ServicesData from '../../data/Services/service-one' 
import PageWrapper from "../../components/PageWrapper";
import RelatedServices from "../../components/RelatedServices";
import ServiceContent from "./ServiceContent";

const ServiceDetails = () => {

    const serviceID = new URLSearchParams(window.location.search).get("id");
	const service = ServicesData.find((serviceItem) => serviceItem.id === parseInt(serviceID));
	
	return (
	  <Fragment>
  
			<PageHeader
				bgImg={require('../../assets/images/page_bg.jpg')}
				title={service.title}
			/>

			<PageWrapper classes="single_service_section">

				<ServiceContent
                    service={service} 
                />
				
				<RelatedServices />

			</PageWrapper>



	  </Fragment>
	);
  };
  
  export default ServiceDetails;



