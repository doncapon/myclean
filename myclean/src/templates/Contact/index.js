import React from 'react'; 
import ContactMap from "./ContactMap";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ContactForm from "./ContactForm";


const ContactPage = () => {
    return (
        <section className="contact-section contact_page">
            <div className="container">

                {/* Start: Heading */}
                <SectionTitle 
                
                title=" Get in touch " 
                subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter ." 

                />
 
                <div className="row">
                    <div className="col-sm-12"> 
                        <div id="map" className="map-container">
                            {/* contact map */}
                            <ContactMap latitude="47.444" longitude="-122.176" />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <ContactForm />
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default ContactPage;