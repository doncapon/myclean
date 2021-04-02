import React from 'react';
import FunfactItem from "./FunFactItem";
import Funfacts from '../../data/Funfact/funfact'

import funfactbg from '../../assets/images/fact.jpg'


 
const Funfact  = ({classes}) => {
    return ( 
        <div className={`confacts-section ${classes}`} style={{backgroundImage: `url(${funfactbg})`}}>
            <div className="container">
                <div className="row funfact_wapr">
                    {
                        Funfacts.map(funfact=>(
                            <FunfactItem 
                            key={funfact.id} 
                            counterNumber={funfact.counterNumber} 
                            counterText={funfact.counterText} 
                            counterIcon={funfact.counterIcon} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Funfact;