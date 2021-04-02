import React from 'react';
import SlickSlider from '../../UI/Carousel/slick'
import ServicesData from '../../../data/Services/service-one.json' 
import ServiceItem from "./ServiceItem";
import SectionTitle from "../../SectionTitles/SectionTitleTwo";


const Service = (props) => { 

    const settings = {
        dots: true,
        arrows:false,
        infinite: true, 
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
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

        <section className="service_section service_sec_v2">
            <div className="container"> 
                {/* Heading */}
                <SectionTitle
                    title="Our Services"
                    subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter."
                />
                {/* End: Heading */}

                <div className="row"> 

                    <div className="col"> 
                        <SlickSlider settings={settings}>
                            {
                                ServicesData.map(service => (
                                    <div key={service.id}>
                                        <ServiceItem 
                                        key={service.id} 
                                        id={service.id} 
                                        title={service.title}  
                                        thumb={service.thumb} 
                                        btnText={service.btnText} 
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
    }
;

export default Service;