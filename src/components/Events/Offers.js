import '..//..//pages/Events/Events.css';
import { useState } from 'react';
import slider from './Slider';
import { useEffect } from 'react';
import Link from "@mui/material/Link";

const Offers = (props) => {
    const  { featuredEvents } = props;
    console.log("featuredEvents", featuredEvents)
    const [featuredEventIndex, setFeaturedEventIndex] = useState(0);
    const [featuredEvent, setFeaturedEvent] = useState(featuredEvents[0]);
   

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

    useEffect(() => {
        setFeaturedEvent(featuredEvents[featuredEventIndex])
    }, [featuredEventIndex])

    const handlePrevClick = () => {
        if (featuredEventIndex === 0) {
            setFeaturedEventIndex(3)
            
        } else {
            setFeaturedEventIndex(featuredEventIndex - 1);
        }
    }

    const handleNextClick = () => {
        if (featuredEventIndex === 3) {
            setFeaturedEventIndex(0)
        } else {
            setFeaturedEventIndex(featuredEventIndex + 1);
        }
    }
    
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
                    
                </div>
                <div className="container">
                    <div className="offer__advantages">
                        <h1>Featured Events</h1>
                        <div className="offer__advantages-text">
                            <div style={{
                                            color: 'black', 
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                          }}>
                                <Link href={"/event?name=" + featuredEvent.name + "&city=" + featuredEvent.city + "&country=" + featuredEvent.country + "&description=" + featuredEvent.description 
                                            + "&img=" + featuredEvent.image_url + "&url=" + featuredEvent.event_site_url + "&address=" + featuredEvent.address}
                                           >{featuredEvent.name}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="offer__slider">
                        <div className="offer__slider-counter">
                            <div className="offer__slider-prev" onClick={handlePrevClick}>
                                <img src="icons/left.svg" alt="prev"/>
                            </div>
                            <span id="current">03</span>
                            /
                            <span id="total">04</span>
                            <div className="offer__slider-next" onClick={handleNextClick}>
                                <img src="icons/right.svg" alt="next"/>
                            </div>
                        </div>
                        <div className="offer__slider-wrapper">
                            <div className="offer__slider-inner">
                                {featuredEvents.map((t) => {
                                    return (
                                    <div className="offer__slide">
                                        <img src={t.image_url} alt=""/>
                                        {/* <div style={{
                                            position: 'absolute', 
                                            color: 'black', 
                                            top: '85%', 
                                            left: '50%', 
                                            transform: 'translateX(-50%)',
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                          }} ><Link href={"/event?name=" + t.name + "&city=" + t.city + "&country=" + t.country + "&description=" + t.description + "&img=" + t.image_url + "&url=" + t.event_site_url +
                                                          "&address=" + t.address}
                                           >{t.name}</Link>
                                        </div> */}
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );

}
export default Offers;