import React, { Fragment } from "react";  
import PageHeader from '../../components/PageHeader'  
import BlogData from '../../data/Blog/blog' 
import PageWrapper from "../../components/PageWrapper"; 
import BlogContent from "./BlogContent";
import SidebarBlog from "../SidebarBlog";

const blogDetails = ( ) => {

    const blogID = new URLSearchParams(window.location.search).get("id");
	const post = BlogData.find((blogItem) => blogItem.id === parseInt(blogID));
	
    const currentPost = BlogData.indexOf(post);
    let prevPost;
    let nextPost;
    currentPost === 0 ? prevPost = BlogData[currentPost] : prevPost = BlogData[currentPost-1];
    currentPost+1 === BlogData.length ? nextPost = BlogData[currentPost] : nextPost = BlogData[currentPost+1];


	return (
	  <Fragment>
  
			<PageHeader
				bgImg={require('../../assets/images/page_bg.jpg')}
				title={post.title}
			/>

			<PageWrapper classes="blog_container single_blog_page">

				<BlogContent
                    post={post}
					title={post.title}
					thumb={post.thumb}
					excerpt={post.excerpt}
					content={post.content} 
					blockQuote={post.blockQuote} 
					blockQuoteImg={post.blockQuoteImg} 
					contentSecondPart={post.contentSecondPart} 
                    nextPost={nextPost}
                    prevPost={prevPost}
					totalPost={BlogData.length}
                />

				<SidebarBlog/>

			</PageWrapper>



	  </Fragment>
	);
  };
  
  export default blogDetails;



