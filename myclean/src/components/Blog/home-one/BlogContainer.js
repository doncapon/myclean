import React from 'react';
import SectionTitle from "../../SectionTitles/SectionTitle";
import BlogList from  './BlogList'
import blogData from '../../../data/Blog/blog'
  
  
const Blog = () => {
    return (
		<section className="blog-section"> 
        	<div className="container">
				{/* Heading */} 
				<SectionTitle 
					title="Latest News "
					subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter."
				/>
				{/* End: Heading */ }

				<div className="row"> 

					{
                        blogData.reverse().slice(0,3).map(blog =>(
 
                            <BlogList 
                            key={blog.id} 
                            id={blog.id} 
                            thumb={blog.thumb} 
                            title={blog.title} 
                            excerpt={blog.excerpt} 
                            author={blog.author} 
                            publishDate={blog.publishDate} 
                            tag={blog.tag} />
                        ))
                    }
	
				</div>
 
			</div>
		</section>

    );
}

export default Blog;