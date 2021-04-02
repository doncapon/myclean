import React from 'react';
import SlickSlider from '../UI/Carousel/slick'
import SliderData from '../../data/Slider/home-two'
import {Link} from "react-router-dom"; 


    const NextArrow = ({className, onClick}) => {
        return (
            <button className={className} onClick={onClick}><i className="arrow_right"/></button>
        )
    };

    const PrevArrow = ({className, onClick}) => {
        return (
            <button className={className} onClick={onClick}><i className="arrow_left"/></button>
        )
    };

    const Slider = () => {

        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            infinite: true,
            dots: false, 
            autoplay: true,
            autoplaySpeed: 5000,
            nextArrow: <NextArrow/>,
            prevArrow: <PrevArrow/>,
            responsive: [
                {
                    breakpoint: 650,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        };

        return (
            <div className="slides_wrapper slides_wrapper_v2">
                <div className="slider_home">
                    <SlickSlider settings={settings}>
                        {
                            SliderData.map(item => (
                                <div key={item.id}>
                                    <div className="single_slider"
                                        style={{backgroundImage: `url(${require('../../assets/images/' + item.bg)})`}}>
                                        <div className="slider_item_tb">
                                            <div className="slider_item_tbcell">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12"> 
                                                            <h5>{item.smallTitle}</h5>
                                                            <h2>{item.title}</h2>
                                                            <p>{item.description}</p>
                                                            <div className="slider_btn">
                                                                <Link to={`${process.env.PUBLIC_URL + item.btnLink}`} className="slider_btn_one">{item.btnText}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </SlickSlider>
                </div>
            </div>
        );
    };

export default Slider;