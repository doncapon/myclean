import React from 'react';   
import VideoPopup from "./VideoPopup"; 
import SectionTitle from "../../SectionTitles/SectionTitle";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
  

const AboutContent = () => {

  return (
 
	<section className="about-section about_sec_v2">
        <div className="container"> 
            <div className="row">
                <div className="col-md-6 col-sm-12 about_bottom_warp">

                    {/* Start: Heading */}
                    <SectionTitle 
                    
                    title=" We Are klinarmen " 
                    subtitle=" Lorem ipsum dolor sit amet cons ectetur adipi scing elited hasellus id lectus quis duia euismod con placet ssa nec elit egestas efficitur Lorem ipsum dolor sit amet cons ect etur adipi scing elited hasellus id lectus quis dui" 

                    />

                    <div className="about_det_warp"> 

                        {/*Start:  Accordion*/}
                        <Accordion preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Our History
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reici endis cum aliquid quam, consequatur, quisquam consectetur tofa ccumsan ipsum velit culpa charms of pleasure of the mont.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Our Mission
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reici endis cum aliquid quam, consequatur, quisquam consectetur tofa ccumsan ipsum velit culpa charms of pleasure of the mont.
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Our Vision
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos reici endis cum aliquid quam, consequatur, quisquam consectetur tofa ccumsan ipsum velit culpa charms of pleasure of the mont.
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                        {/*End:  Accordion */}

                    </div>
                </div>

                {  /*Start: About Video  */} 
                <div className="col-md-6 col-sm-12"> 
 
                    { /*  VIDEO POPUP */}
                    <VideoPopup />

                </div> 
                {/*End: About Video  */}

            </div>
            {/* row */}
        </div>
        {/* container */}
    </section>


  );
};

export default AboutContent;
