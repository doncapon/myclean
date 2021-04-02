import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne"; 
import Slider from '../components/Slider/SliderOne'
import WelocmePromo from '../components/WelcomePromo/PromoContainer'
import Services from '../components/Services/home-one/ServiceContainer' 
import FunFact from '../components/FunFact/FunFactContainer'
import ChooseUs from '../components/WhyChooseUs/ChooseUs';
import Gallery from '../components/Gallery/Gallery'; 
import Team from '../components/Team/TeamContainer'; 
import PricingTable from '../components/PricingTable/PricingContainer';  
import Testimonial from '../components/Testimonials/home-one/TestimonialContent';  
import Blog from '../components/Blog/home-one/BlogContainer';  
import LogoContainer from '../components/BrandLogo/LogoContainer';  

 
const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>klinarmen | Home</title>
        <meta
          name="description"
          content="Cleaning  React JS Template."
        />
      </MetaTags>
      <LayoutOne>
   
      <Slider />
      <WelocmePromo/>  
      <Services /> 
      <FunFact />   
      <ChooseUs />   
      <Gallery />
      <Team />
      <PricingTable />  
      <Testimonial /> 
      <Blog /> 
      <LogoContainer /> 

      </LayoutOne>
    </Fragment>
  );
};

export default Home;
