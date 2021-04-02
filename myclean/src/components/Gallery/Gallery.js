import React from 'react';
import {Link} from 'react-router-dom';
import SectionTitle from "../SectionTitles/SectionTitle";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import GalleryData from '../../data/Gallery/gallery'

const GalleryContent  = ({classes}) => {
    
    return (
            <section className={`work-section ${classes}`} >
                <div className="container">
                    {/* Heading */}
					<SectionTitle
						title="Cleaning Work"
						subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter."
					/>
					{/* End: Heading */}
                    <div className="projects-list">  
        
                        <Tab.Container defaultActiveKey="all">
                            <Nav variant="pills" className="acount__nav justify-content-center nav nav-pills">
                                <Nav.Item>
                                    <Nav.Link eventKey="all">all projects</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="office">office cleaning</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="pool">Pool cleaning</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="carpet">Carpet cleaning</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="house">House cleaning</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="all">  

                                    { 
                                        GalleryData.reverse().slice(0, 8).map((gallery, i) => ( 
                                            <div className="colm" key={i}>
                                                <div className="single-project-item" style={{
                                                backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                                }}>
                                                    <div className="project-hover"> 
                                                        <h6><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h6>
                                                        <span>{gallery.tag}</span>
                                                        <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                    </div>
                                                </div> 
                                            </div>
                                        ))
                                    } 
                                    
                                </Tab.Pane>


                                <Tab.Pane eventKey="office">
                                    { 
                                    GalleryData.reverse().slice(0, 4).map((gallery, i) => ( 
                                        <div className="colm" key={i}>
                                            <div className="single-project-item" style={{
                                            backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                            }}>
                                                <div className="project-hover"> 
                                                    <h6><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h6>
                                                    <span>{gallery.tag}</span>
                                                    <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                </div>
                                            </div> 
                                        </div>
                                    ))
                                    } 
                                </Tab.Pane>

                                <Tab.Pane eventKey="house">
                                    { 
                                    GalleryData.reverse().slice(0, 6).map((gallery, i) => ( 
                                        <div className="colm" key={i}>
                                            <div className="single-project-item" style={{
                                            backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                            }}>
                                                <div className="project-hover"> 
                                                    <h6><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h6>
                                                    <span>{gallery.tag}</span>
                                                    <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                </div>
                                            </div> 
                                        </div>
                                    ))
                                    } 
                                </Tab.Pane>

                                <Tab.Pane eventKey="carpet">
                                    { 
                                    GalleryData.reverse().slice(0, 8).map((gallery, i) => ( 
                                        <div className="colm" key={i}>
                                            <div className="single-project-item" style={{
                                            backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                            }}>
                                                <div className="project-hover"> 
                                                    <h6><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h6>
                                                    <span>{gallery.tag}</span>
                                                    <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                </div>
                                            </div> 
                                        </div>
                                    ))
                                    } 
                                </Tab.Pane>

                                <Tab.Pane eventKey="pool">
                                    { 
                                    GalleryData.reverse().slice(0, 4).map((gallery, i) => ( 
                                        <div className="colm" key={i}>
                                            <div className="single-project-item" style={{
                                            backgroundImage: `url(${require('../../assets/images/' + gallery.thumb)})`
                                            }}>
                                                <div className="project-hover"> 
                                                    <h6><Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`}>{gallery.title}</Link></h6>
                                                    <span>{gallery.tag}</span>
                                                    <Link to={`${process.env.PUBLIC_URL + `/gallery/${gallery.title.split(' ').join('-').toLowerCase()}?id=${gallery.id} `}`} className="project-link"><i className="icon_link"></i></Link>
                                                </div>
                                            </div> 
                                        </div>
                                    ))
                                    } 
                                </Tab.Pane>



                            </Tab.Content>

                        </Tab.Container>

                    </div>  
                </div>
            </section>

  );
};


export default GalleryContent;


