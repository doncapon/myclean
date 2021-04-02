import React from 'react';
import SlickSlider from '../UI/Carousel/slick'
import LogoItem from './LogoItem'
import BrandLogos from '../../data/BrandLogo/brandlogo'
  
  
const ClinetCarousel = () => {

    const settings = {
        dots: false,
        arrows:false,
        infinite: true, 
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        slidesToScroll: 1,
          // Responsive breakpoints
          responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                  }
              },
              {
                  breakpoint: 320,
                  settings: {
                    slidesToShow: 1,
                  }
              }
            ]
      };

    return (
        <div className="client-section">
            <div className="container"> 
                <div className="row">
                    <div className="col-12">

                        <SlickSlider settings={settings}>
                            {
                                BrandLogos.map(logo => (
                                    <LogoItem 
                                        key={logo.id} 
                                        logoSrc={logo.logoSrc} 
                                        URL={logo.URL}
                                    />
                                ))
                            }
                        </SlickSlider>
	
                    </div> 
                </div> 
            </div> 
        </div>

    );
}

export default ClinetCarousel;