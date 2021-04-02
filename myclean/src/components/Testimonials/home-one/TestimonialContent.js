import React from 'react';
import SlickSlider from '../../UI/Carousel/slick'
import testimonialData from '../../../data/Testimonials/home-one'
import TestimonialItem from  './TestimonialItem'
import SectionTitle from "../../SectionTitles/SectionTitle";

import testimonialBg from '../../../assets/images/testimonial.jpg' 
 
 
    const Testimonials = () => {

        const settings = {
            dots: true,
            arrows:false,
            infinite: true, 
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 2
          };

        return (

            <section className="testimonials-section" style={{backgroundImage: `url("${testimonialBg}")`}} > 
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-5 col-sm-12">	
                            {/* Heading */} 
                            <SectionTitle 
                                title="What our clients Say"
                                subtitle="Lorem ipsum dolor sit ametet verear info omnr noluisse eumdi congue refor midans was at atomorum his idpri te hinc after at expetendasts sit ametet verear info omnr noluisse eumdiam congue noluisse eumdi congue."
                            />
                            {/* End: Heading */ }  
                        </div>  

                        <div className="col-md-7 col-sm-12"> 

                            <SlickSlider settings={settings}>
                                {
                                    testimonialData.map(testimonial=> (
                                        <div key={testimonial.id}>
                                            <TestimonialItem 
                                                author={testimonial.author}
                                                authorThumb={testimonial.authorThumb} 
                                                quote={testimonial.quote} 
                                                designation={testimonial.designation} 
                                            />
                                        </div>
                                    ))
                                }
                            </SlickSlider>

                        </div>
                    </div>
                </div>
            </section>
        );
    };

export default Testimonials;