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
                    title="Welcome To UBW GLOBAL RESOURCES LIMITED" 
                    subtitle="Our standard is first-class" 
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