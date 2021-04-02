import React from 'react'; 

const PricingItem = (props) => {
    return (
        <div className="col-md-3 col-sm-12">
            <div className="member_warp">   
 
				<div className="member_img"> 
					<img src={require('../../assets/images/' + props.img)} alt="service" />
				</div>  
			  
                <div className="member_info">   
					<h6>{props.name} 
                    <small>{props.designation} </small></h6> 
					<div className="team_social"> 
						<ul>
							<li>
								<a href={ `${props.facebookUrl}` } target="_blank"  rel="noopener noreferrer"><i className="fa fa-facebook"/> </a>
							</li>
							<li>
								<a href={ `${props.twitterUrl}` } target="_blank"  rel="noopener noreferrer"><i className="fa fa-twitter"/> </a>
							</li>
							<li>
								<a href={ `${props.linkedinUrl}` } target="_blank"  rel="noopener noreferrer"><i className="fa fa-linkedin"/> </a>
							</li>
						</ul>
					</div>
                </div>

            </div>
        </div>
    );
};

export default PricingItem;