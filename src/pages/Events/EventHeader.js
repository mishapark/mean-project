const EventHeader = () => {

    return (

        <header className="header">
                <div className="header__left-block">
                    <div className="header__logo">
                        <img src="icons/logo.svg" alt="Bite Logo"/>
                    </div>
                    <nav className="header__links">
                        <a href="#" className="header__link">Food Delivery</a>
                        <a href="#" className="header__link">Home Services</a>
                    </nav>
                </div>
                <div className="header__right-block">
                    <button className="btn btn_white" data-modal>Contact us</button>
                </div>
            </header>

    );

}
export default EventHeader;