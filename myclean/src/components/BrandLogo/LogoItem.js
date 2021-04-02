import React from 'react'; 

const LogoItem =(props) => {
    return (
        <div className="client-box"> 
            <img src={require('../../assets/images/' + props.logoSrc)} alt="logo"/>
        </div>
    );
}

export default LogoItem;