const Promotion = () => {

    return (

        <div className="promotion">
                <div className="bgc_y"></div>
                <div className="container">
                    <div className="promotion__text">
                        <div className="title">Special offer for new customers!</div>
                        <div className="promotion__descr">
                                We value every customer and offer you to become one of them on very favorable terms.
                                Everyone who orders food delivery for a week will be given a discount in the amount of <span>20%!</span>
                            <br/><br/>
                            The promotion will end on May 20 at 00:00
                        </div>
                    </div>
                    <div className="promotion__timer">
                        <div className="title">It remains until the end of the promotion:</div>
                        <div className="timer">
                            <div className="timer__block">
                                <span id="days">12</span>
                                days
                            </div>
                            <div className="timer__block">
                                <span id="hours">20</span>
                                hours
                            </div>
                            <div className="timer__block">
                                <span id="minutes">56</span>
                                minutes
                            </div>
                            <div className="timer__block">
                                <span id="seconds">20</span>
                                seconds
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );

}
export default Promotion;