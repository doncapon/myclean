import React from 'react';
import {Link} from 'react-router-dom';

 
const PromoItem = (props) => {

    return (
        
        <div className="col-md-4 col-sm-12"> 
            <div className="serv_list">
                <div className="serv_list_img"> 
                    <Link to={props.link}> 
                        <img src={require('../../assets/images/' + props.img)} alt="service" />
                    </Link>
                </div>
                <h4>{props.title}</h4>
                <div className="service_list_pa"> 
                    <p>{props.text}</p>
                </div>   
            </div>
        </div>  

    );
}

export default PromoItem;