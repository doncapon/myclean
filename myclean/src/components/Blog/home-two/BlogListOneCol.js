import React from 'react'; 
import {Link} from 'react-router-dom'


const BlogItem = (props) => {
	const blogURL = `/blog/${props.title.split(' ').join('-').toLocaleLowerCase()}?id=${props.id}`;
    return (
        <div className="col-md-6 col-sm-12">
            <div className="blog-warp-1 blog_warp_lay_1">   
				<div className="blog_imgg">  
					<img src={require('../../../assets/images/' + props.thumb)} alt="service" />
					<div className="publisd-date"> 
						<Link to={`${process.env.PUBLIC_URL + blogURL}`}><i className="arrow_right"></i> </Link> 
					</div> 

					<div className="blog_content_v2">
						<Link className="blog_datev2" to={`${process.env.PUBLIC_URL + blogURL}`}>
						<i className="fa fa-calendar"></i> {props.publishDate}
						</Link>
						<Link to={`${process.env.PUBLIC_URL + blogURL}`} className="btagv2">
						<i className="fa fa-tag"></i>  {props.tag}
						</Link>    
						<h6><Link to={`${process.env.PUBLIC_URL + blogURL}`}>{props.title}</Link></h6>  
					</div>
				</div> 
            </div>
        </div>
    );
};

export default BlogItem;