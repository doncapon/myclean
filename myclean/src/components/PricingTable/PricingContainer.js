import React from 'react';
import SectionTitle from "../SectionTitles/SectionTitle";
import PricingList from  './PricingList'
import pricingData from '../../data/PricingTable/pricingTable'
  

const Pricing  = ({classes}) => {
    return (
		<section className={`pricing-section ${classes}`}> 
        	<div className="container">
				{/* Heading */} 
				<SectionTitle 
					title="Our Special Plan"
					subtitle="Subjects to ecstatic children he could ye leave up as built match. Dejection agreeable attention set suspected led offending dmitting an performed supposing by garden agreed matter."
				/>
				{/* End: Heading */ }

				<div className="row"> 

					{
                        pricingData.map(pricing=>(
                            <PricingList
                                key={pricing.id}
                                planIcon={pricing.planIcon}
                                planName={pricing.planName}
                                currencyType={pricing.currencyType}
                                planPrice={pricing.planPrice}
                                subscribePlan={pricing.subscribePlan}
                                planFeatures={pricing.planFeatures}
                                buttonLink={pricing.buttonLink}
                            />
                        ))
                    }
	
				</div>
 
			</div>
		</section>

    );
}

export default Pricing;