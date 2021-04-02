import React, { Fragment } from "react";     
import BlogData from '../../data/Blog/blog'
import {Link} from "react-router-dom"; 


const BlogContentWrap = () => {
    return (
        <Fragment>

            <div className="col-md-8 col-sm-12 blog-area">
                {
                    BlogData.reverse().slice(0,3).map((post, i)=>(
                        <div className="blog-warp-1 blog_warp_lay_1" key={i}>
                            <div className="blog_imgg"> 
                                <img src={require('../../assets/images/' + post.thumb)} alt="service" />
                            </div>
                            <div className="blog_content_warp">
                                <Link to="#/" className="blog_datee"><i className="fa fa-calendar"></i>  {post.publishDate} </Link>
                                <Link to="#/" className="subtext"><i className="fa fa-tag"></i> {post.tag} </Link>
                                <Link to={`${process.env.PUBLIC_URL + `/blog/${post.title.split(' ').join('-').toLowerCase()}?id=${post.id}`}`} className="subtext"><i className="fa fa-comment-o"> </i>  {post.commentCount} </Link>
                                <h5><Link to={`${process.env.PUBLIC_URL + `/blog/${post.title.split(' ').join('-').toLowerCase()}?id=${post.id}`}`}> {post.title}</Link></h5>
                                <p> {post.content}  </p>
                            </div>
                        </div>
                    ))
                }

                { /* Blog Pagination */}
                <div className="pagination_wrap">
                    <nav className="pagination">
                        <ul className="pager">
                            <li><Link to="#/">&lt;</Link></li>
                            <li><Link to="#/">01</Link></li>
                            <li className="pagi-big"><Link to="#/"> 02 </Link></li>
                            <li><Link to="#/">03</Link></li>
                            <li><Link to="#/">&gt;</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
            { /* End: Left Side :Blog Post */}

        </Fragment>
    );
};

export default BlogContentWrap;