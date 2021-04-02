import React, { Fragment } from "react";   
import PageWrapper from "../../components/PageWrapper"; 
import BlogContent from "./BlogContent";
import SidebarBlog from "../SidebarBlog";

const blogDetails = ( ) => {

	return (
	  <Fragment>
  
			<PageWrapper classes="blog_container blog_page_one">
 
				<BlogContent />

				<SidebarBlog />

			</PageWrapper>

	  </Fragment>
	);
  };
  
  export default blogDetails;



