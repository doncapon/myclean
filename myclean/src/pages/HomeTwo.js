import React, { Fragment } from "react"; 
import MetaTags from "react-meta-tags";
import LayoutTwo from "../layouts/LayoutTwo";
import Slider from '../components/Slider/SliderTwo'
import About from '../components/About/home-two'
import Service from '../components/Services/home-two/ServiceContainer'
import FunFact from '../components/FunFact/FunFactContainer'
import RequestQuoteForm from '../components/RequestQuoteForm/RequestQuoteFormTwo'
import Gallery from '../components/Gallery/Gallery'; 
import PricingTable from '../components/PricingTable/PricingContainer';  
import Testimonial from '../components/Testimonials/home-two/TestimonialContent';   
import Blog from '../components/Blog/home-two/BlogContainer'; 
import LogoContainer from '../components/BrandLogo/LogoContainer';  

const Home = () => {
  return (  
    <Fragment>
      <MetaTags>
        <title>klinarmen | Home Two</title>
        <meta
          name="description"
          content="Cleaning  React JS Template."
        />
      </MetaTags>
      <LayoutTwo>
  
      <Slider />
      <About /> 
      <Service />
      <RequestQuoteForm />
      <Gallery classes="work_sec_v2" />
      <FunFact classes="confacts_sec_v2" />
      <PricingTable classes="pricing_v2" />
      <Testimonial />
      <Blog />
      {/* <GalleryContentTwo /> */}
      {/* <Funfact />   */}
      {/* <PricingList />  */}
      {/* <TestimonialTwo /> */}
      {/* <BlogListTwo />  */}
      <LogoContainer /> 

      </LayoutTwo>
    </Fragment>
  );
};

export default Home;
