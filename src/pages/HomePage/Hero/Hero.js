import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Hero.css'

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='px-5 pb-20'>
            <Slider {...settings}>
                <div>
                    <img className='p-2' src="./images/slide1.jpg" alt="" />
                </div>
                <div>
                    <img className='p-2' src="./images/slide2.jpg" alt="" />
                </div>
                <div>
                    <img className='p-2' src="./images/slide3.jpg" alt="" />
                </div>
                <div>
                    <img className='p-2' src="./images/slide4.jpg" alt="" />
                </div>
                <div>
                    <img className='p-2' src="./images/slide5.jpg" alt="" />
                </div>
                <div>
                    <img className='p-2' src="./images/slide6.jpg" alt="" />
                </div>
                <div>
                    <img className='p-2' src="./images/slide7.jpg" alt="" />
                </div>
                <div>
                    <img className='p-2' src="./images/slide8.jpg" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Hero;