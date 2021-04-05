import React from 'react'; 
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import ReservationForm from "./ReservationForm";


const ReservationPage = () => {
    return (
        <section className="contact-section contact_page">
            <div className="container">

                {/* Start: Heading */}
                <SectionTitle 
                
                title=" Make a reservation " 
                subtitle="to be completed later" 

                />
 
                <div className="row">
                    <div className="col-sm-12">
                        <ReservationForm />
                    </div>
                </div> 
            </div>
        </section>
    );
};

export default ReservationPage;