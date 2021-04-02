import React , {Fragment } from 'react';  
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Contact from "../templates/Contact/index";
import PageHeader from '../components/PageHeader'

const ContactPage = () => {
    
    return(

        <Fragment>
            <MetaTags>
              <title>klinarmen | Contact Us</title>
              <meta
                name="description"
                content="Cleaning  React JS Template."
              />
            </MetaTags>

            <LayoutOne>
              <PageHeader
                bgImg={require('../assets/images/page_bg.jpg')}
                title="Contact Us" 
              />
              
              <Contact />
 
            </LayoutOne>
        </Fragment>

      );
  }

     

export default ContactPage;   