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
                    <img className='p-2' src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/39887320_267442953744000_4384757908059979776_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=UPB6NEdYGA0AX_K06z3&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-DNG73XuWQELIlfPlbKnDKvdArkTnKrKlXzi64Zqvl7Q&oe=61F55D68" alt="" />
                </div>
                <div>
                    <img className='p-2' src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/39948733_2246030412345066_3947647270891028480_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=ykSn_rz8tlsAX9JPdC3&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-7xkdOt2b_xRHcXUnHIRFpwG-TR3DGLPBNr470uRI0oA&oe=61F6E25E" alt="" />
                </div>
                <div>
                    <img className='p-2' src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/39603590_2130882043826729_8254165709634928640_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=yk-MXw2k5NUAX-qMfPq&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8zzvVz9dLWxyoU0MyVcyHxsYYnWUxl2Mzc6akCU10N5A&oe=61F565AA" alt="" />
                </div>
                <div>
                    <img className='p-2' src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/39395120_2192237331046688_5951608496431562752_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=TR3vYeDQzGQAX8qYnY4&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_funAj7BvbKbDhh7ZeQ89Prto719Q9tHFyKZHog_lKmg&oe=61F688A3" alt="" />
                </div>
                <div>
                    <img className='p-2' src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/39156993_1864156783619988_8875140069929779200_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=Y1PUMWZ-G7gAX_lT_aq&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8ZP7WSfYZg7lq8xwfTAt_0vXoGZdy5onfjpWXL_ul0uQ&oe=61F5287A" alt="" />
                </div>
                <div>
                    <img className='p-2' src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/39339411_227708251229376_6206747386518175744_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=I5SiNO-ia_AAX8ptQiI&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-HySnVwkP6yuv0HSa4YCaAGqmwM5aWn1aOY5mranxYfA&oe=61F5BBEE" alt="" />
                </div>
                <div>
                    <img className='p-2' src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/39332682_742969262722386_8418751729750769664_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=wU0LFKkLBNUAX9AEcAG&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8aw1PWeBhCWVRHapIBsQNf1ZS11W2GUYis6tCtg4P3zQ&oe=61F5A7AD" alt="" />
                </div>
                <div>
                    <img className='p-2' src="https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/39603590_2130882043826729_8254165709634928640_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=yk-MXw2k5NUAX-qMfPq&_nc_ht=scontent-atl3-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8zzvVz9dLWxyoU0MyVcyHxsYYnWUxl2Mzc6akCU10N5A&oe=61F565AA" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Hero;