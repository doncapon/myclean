import React from 'react';
import {Link} from "react-router-dom";

const FeaturedBlog = ({title,thumb,publishDate,id}) => {

    const blogURL = `blog/${title.split(' ').join('-').toLocaleLowerCase()}?id=${id}`;

    return (
        <div className="recent-post-box">
            <div className="recent_post_img"> 
                <img src={require('../../assets/images/' + thumb)} alt={title} />
            </div>
            <div className="recent-title">
                <Link to={blogURL}>{title}</Link>
                <p> {publishDate} </p>
            </div>
        </div>
    );
};

export default FeaturedBlog;