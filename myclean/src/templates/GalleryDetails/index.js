import React, { Fragment } from "react";  
import PageHeader from '../../components/PageHeader'  
import GalleryData from '../../data/Gallery/gallery'  
import RelatedWork from "../../components/RelatedWorkGallery"; 
import GalleryContent from "./GalleryContent"; 


const GalleryDetails = () => {

    const galleryID = new URLSearchParams(window.location.search).get("id");
	const gallery = GalleryData.find((galleryItem) => galleryItem.id === parseInt(galleryID));
	
	return (
	  <Fragment>
  
			<PageHeader
				bgImg={require('../../assets/images/page_bg.jpg')}
				title={gallery.title}
			/>

			<GalleryContent
				gallery={gallery} 
			/>
			 
			<RelatedWork />

	  </Fragment>
	);
  };
  
  export default GalleryDetails;



