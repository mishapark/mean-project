import './Events.css';
import tabs from '../../components/Tabs';
import modal from '../../components/Modal';
import timer from '../../components/Timer';
import cards from '../../components/Cards';
import calc from '../../components/Calc';
import forms from '../../components/Forms';
import slider from '../../components/Slider';
import {openModal} from '../../components/Modal';
import SidePanel from '../../components/SidePanel';
import Preview from '../../components/Preview';
import Offers from '../../components/Offers';
import Order from '../../components/Order';
import Promotion from '../../components/Promotion';
import ContactUs from '../../components/ContactUs';
import Navigation from "..//../components/Navigation";
import Footer from "..//../components/Footer";

const Events = () => {

    window.addEventListener('DOMContentLoaded', function() {
        const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);
    
        tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
        modal('[data-modal]', '.modal', modalTimerId);
        timer('.timer', '2022-06-11');
        cards();
        calc();
        forms('form', modalTimerId);
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
    });
    return (
        <div>
            <Navigation />
            <SidePanel />
            <Preview />
            <div className="divider"></div>
            <Offers />
            <div className="divider"></div>
            <Order />
            <div className="divider"></div>
            <Promotion />
            <ContactUs />
            <Footer />
        </div>
        
 );
};
export default Events;