import React from "react"; 
import RequestQuoteForm from "../RequestQuoteForm/RequestQuoteForm";  
import ChooseUsTab from "./ChooseUsTab";  

const ChooseUs = () => {
  return (
    
	<section 
    className="estimat_sectn" id="quote"> 
	    <div className="container">
	        <div className="row">
	            <div className="col-md-4 col-sm-12"> 
					{/* Request Quote Form */}
					<RequestQuoteForm />
	            </div>

				<div className="col-md-8 why_chs">
                     {/* Request Quote Form */}
					<ChooseUsTab />
                </div>
	        </div>
	        {/* row */}
	    </div>
	    {/* container */}
	</section>  

  );
};

export default ChooseUs;
