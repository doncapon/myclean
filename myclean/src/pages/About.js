import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import WelocmePromo from '../components/WelcomePromo/PromoContainer'
import Testimonial from '../components/Testimonials/home-one/TestimonialContent'; 
import ChooseUs from '../components/WhyChooseUs/ChooseUs';
import Team from '../components/Team/TeamContainer'; 
import LogoContainer from '../components/BrandLogo/LogoContainer'; 
import PageHeader from '../components/PageHeader'


const About = () => {
 
    return(
        <Fragment>
            <MetaTags>
              <title>klinarmen | About</title>
              <meta
                name="description"
                content="Cleaning  React JS Template."
              />
            </MetaTags>

            <LayoutOne>
            
                <PageHeader
                    bgImg={require('../assets/images/page_bg.jpg')}
                    title="About Us" 
                />

                <WelocmePromo />
                <Testimonial />
                <ChooseUs />
                <Team />
                <LogoContainer />
        
            </LayoutOne>
        </Fragment>
            
    ); 
};

export default About;   