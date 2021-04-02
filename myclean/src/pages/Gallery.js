import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";  
import Gallery from "../components/Gallery/Gallery";
import PageHeader from '../components/PageHeader'

const galleryPage = () => {
	return (
	  <Fragment>
		<MetaTags>
		  <title>klinarmen | Home</title>
		  <meta
			name="description"
			content="Cleaning  React JS Template."
		  />
		</MetaTags>
		<LayoutOne>
			<PageHeader
				bgImg={require('../assets/images/page_bg.jpg')}
				title="Our Gallery" 
			/>

			<Gallery />
			
		</LayoutOne>
	  </Fragment>
	);
  };
  
  export default galleryPage;



