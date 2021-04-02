import React from 'react';
import testimonialData from '../../../data/Testimonials/home-two'
import TestimonialItem from  './TestimonialItem'
import SectionTitle from "../../SectionTitles/SectionTitleTwo";
import SlickSlider from '../../UI/Carousel/slick'

/* Baclground Image */
import testimonialBg from '../../../assets/images/testimonial.jpg' 
 

    const Testimonials = () => {

        const settings = {
            dots: true,
            arrows:false,
            infinite: true, 
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 2,
              // Responsive breakpoints
              responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 2,
                    }
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                    }
                  } 
     
                ]
          };


        return (

            <section className="testimonials-section testimonials_sec_v2" style={{backgroundImage: `url("${testimonialBg}")`}} > 
                <div className="container"> 
                    <div className="row">
                        <div className="col-sm-12">	
                            {/* Heading */} 
                            <SectionTitle 
                                title="What our clients Say"
                                subtitle="Lorem ipsum dolor sit ametet verear info omnr noluisse eumdi congue refor midans was at atomorum his idpri te hinc after at expetendasts sit ametet verear info omnr noluisse eumdiam congue noluisse eumdi congue."
                            />
                            {/* End: Heading */ }  
                        </div>  

                        <div className="col-sm-12"> 

                            
                        <SlickSlider settings={settings}>
                                {
                                    testimonialData.map(testimonial => (
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