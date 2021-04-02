import React from 'react'; 
import {Link} from 'react-router-dom'


const BlogItem = (props) => {
	const blogURL = `/blog/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    return (
        <div className="col-md-3 col-sm-12">
            <div className="blog-warp-1 blog_warp_lay_1">   
 
				<div className="blog_imgg">  
					<div className="publisd-date"> 
						<i className="arrow_right"></i> 
					</div>
				</div>  

                <div className="blog_content_warp">
					<Link className="blog_datev2" to={`${process.env.PUBLIC_URL + blogURL}`}>
					<i className="fa fa-calendar"></i> {props.publishDate}
					</Link>
					<Link to={`${process.env.PUBLIC_URL + blogURL}`} className="btagv2">
					<i className="fa fa-tag"></i>  {props.tag}
					</Link>    
					<h6><Link to={`${process.env.PUBLIC_URL + blogURL}`}>{props.title}</Link></h6> 
					<p>{props.excerpt} </p>
					<Link to={`${process.env.PUBLIC_URL + blogURL}`} className="serv_read">read  more</Link> 
                </div>

            </div>
        </div>
    );
};

export default BlogItem;