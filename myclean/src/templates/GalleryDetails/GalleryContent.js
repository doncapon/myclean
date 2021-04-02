import React, { Fragment } from "react";   
import SlickSlider from "../../components/UI/Carousel/slick";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
 

const GalleryContentWrap = ({gallery}) => {


    return (
        <Fragment>
  
            <section className="single-work-page">
                <div className="container">  
                    {/* Heading */} 
                    <SectionTitle 
                        title="Work with big bite "
                        subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter ."
                    />
                    {/* End: Heading */ }  
        
                    <div className="row"> 
                        <div className="col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="portfolioitem col-sm-12">
                                    <div className="carousel slide" id="blog-post-slider">
                                        <SlickSlider settings={{
                                            arrows: true,
                                            dots: false
                                        }}>
                                        {
                                        gallery.previewImages.map((previewImg, i) => (
                                            <div key={i}>
                                                <img src={require('../../assets/images/' + previewImg)} alt={gallery.title} />
                                            </div>
                                        ))
                                        }
                                        </SlickSlider> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="portfoliodesc col-md-8">
                                        <div className="project-details">
                                            <h4>{gallery.title}</h4>
                                            <hr/>
                                            <p>{gallery.content}</p> 
                                        </div>
                                        <div className="port_single_share">
                                            <ul className="list-inline social-icons">
                                                <li>
                                                    <a className="facebook" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}>
                                                        <i className="fa fa-facebook"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="twitter" href={`https://twitter.com/home?status=${window.location.href}`}>
                                                        <i className="fa fa-twitter"/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="reddit" href={`http://reddit.com/submit?url=${window.location.href}&title=${gallery.title}`}>
                                                        <i className="fa fa-reddit"/>
                                                    </a>
                                                </li>
                                                <li> 
                                                    <a className="pinterest" href={`https://pinterest.com/pin/create/button/?url=${window.location.href}&media=&description=`}>
                                                        <i className="fa fa-pinterest"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                <div className="portfoliodesc portfolio-single-detail col-md-4">
                                <div className="project-details">
                                    <h4>Project Detail</h4>
                                    <hr/>
                                    <ul className="list-unstyled project-detail-list">
                                        <li><span>Client Name</span> {gallery.clientName} </li>
                                        <li><span>Company Name </span> {gallery.companyName}</li>
                                        <li><span>Work Type</span> {gallery.workType}</li>
                                        <li><span>Project Date</span> {gallery.projectDate}</li>
                                    </ul>
                                </div>
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section> 

        </Fragment>
    );
};

export default GalleryContentWrap;