import React from 'react'; 
import quoteIcon from '../../../assets/images/comma.png'


function TestimonialItem(props) {
    return (
 
        <div className="item" key={props.key}>
            <div className="testimonial-box">

                <div className="testi_images"> 
                    <img src={require('../../../assets/images/' + props.authorThumb)} alt="testimonial"/>
                </div>
                <div className="cus-title">
                    <span className="tes-nam">{props.author}</span>
                    <span className="tes-degree">{props.designation}</span>
                </div>
                <div className="testimonial_content"> 
                    <img src={quoteIcon} alt="testimonial"/>
                    <p>{props.quote}</p>
                </div>
            </div>
        </div> 

    );
}

export default TestimonialItem;