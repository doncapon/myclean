import React , {Fragment } from 'react';  
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Reservation from "../templates/Reservation/index";
import PageHeader from '../components/PageHeader'

const ReservationPage = () => {
    
    return(

        <Fragment>
            <MetaTags>
              <title>klinarmen | Reservation</title>
              <meta
                name="description"
                content="Cleaning  React JS Template."
              />
            </MetaTags>

            <LayoutOne>
              <PageHeader
                bgImg={require('../assets/images/page_bg.jpg')}
                title="Reservation" 
              />
              
              <Reservation />
 
            </LayoutOne>
        </Fragment>

      );
  }

     

export default ReservationPage;   