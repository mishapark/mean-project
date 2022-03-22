import '..//..//pages/Events/Events.css';
import slider from './Slider';
import { useEffect } from 'react';

const Offers = () => {
    useEffect(() => {
        slider({
            container: '.offer__slider',
            slide: '.offer__slide',
            nextArrow: '.offer__slider-next',
            prevArrow: '.offer__slider-prev',
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper',
            field: '.offer__slider-inner'
        });
    }, [])
    
    return (

        <div className="offer">
                <div className="bgc_y"></div>
                <div className="container">
                    <div className="offer__text">
                        <h2 className="title">What can we offer you?</h2>
                        <div className="offer__descr">
                        Our main idea is proper nutrition. It can be simple and delicious. We are not just a delivery, we are a service! We took care of all the calculations of BZHU, calories, portion sizes and other important but boring aspects. You can only have healthy, satisfying and proper food, which we bring right under the door.
                        </div>
                    </div>
                    <div className="offer__action">
                        <button className="btn btn_dark" data-modal>Contact us</button>
                    </div>
                </div>
                <div className="container">
                    <div className="offer__advantages">
                        <h1>Featured Events</h1>
                        <div className="offer__advantages-text">
                            Enjoy with featured events
                        </div>
                    </div>
                    <div className="offer__slider">
                        <div className="offer__slider-counter">
                            <div className="offer__slider-prev">
                                <img src="icons/left.svg" alt="prev"/>
                            </div>
                            <span id="current">03</span>
                            /
                            <span id="total">04</span>
                            <div className="offer__slider-next">
                                <img src="icons/right.svg" alt="next"/>
                            </div>
                        </div>
                        <div className="offer__slider-wrapper">
                            <div className="offer__slider-inner">
                                <div className="offer__slide">
                                    <img src="img/slider/pepper.jpg" alt="pepper"/>
                                </div>
                                <div className="offer__slide">
                                    <img src="img/slider/food-12.jpg" alt="food"/>
                                </div>
                                <div className="offer__slide">
                                    <img src="img/slider/olive-oil.jpg" alt="oil"/>
                                </div>
                                <div className="offer__slide">
                                    <img src="img/slider/paprika.jpg" alt="paprika"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );

}
export default Offers;