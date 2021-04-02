import React from 'react';
import PromoList from './PromoList';
import PromosData from '../../data/WelcomePromo/promo';
import SectionTitle from "../SectionTitles/SectionTitle";


function PromoContainer() {
    return (
        <section className="service_list_section">
            <div className="container">
                {/* Start: Heading */}
                <SectionTitle 
                    title="Welcome to klinarmen" 
                    subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter." 
                />

                <div className="row service_list_warp">
                    {PromosData.map(promo=>(
                        <PromoList 
                            key={promo.id} 
                            title={promo.title} 
                            text={promo.text} 
                            img={promo.img}
                            link={promo.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PromoContainer;