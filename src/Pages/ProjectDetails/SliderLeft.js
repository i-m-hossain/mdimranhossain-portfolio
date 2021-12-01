import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderLeft = ({ project }) => {
    const customSlider = useRef();
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    const gotoNext = () => {
        console.log('object')
        customSlider.current.slickNext()
    }

    const gotoPrev = () => {
        customSlider.current.slickPrev()
    }
    return (
        <div>
            <div className="px-3">
                <div className="d-flex justify-content-center px-5 mb-4">
                    <button className="arrow me-5 px-4 rounded-pill border-0 text-dark fw-bolder" onClick={() => gotoPrev()}>Prev</button>
                    <button className="arrow me-5 px-4 rounded-pill border-0 text-dark fw-bolder" onClick={() => gotoNext()}>Next</button>
                </div>
                <Slider
                    ref={customSlider}
                    {...settings}
                >
                    {
                        project?.images?.map((item, index) => <div key={index}>
                            <img src={item} alt="" className="w-100" />
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default SliderLeft;

