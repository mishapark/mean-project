import '..//..//pages/Events/Events.css';
import Link from "@mui/material/Link";

const Preview = () => {

    return (

        <div className="preview">
                <div className="bgc_blue"></div>
                <div className="container">
                    <div className="tabcontainer">
                        <div className="tabcontent">
                            <img src="img/tabs/vegy.jpg" alt="vegy"/>
                            <div className="tabcontent__descr">
                                <Link href="/event" variant="body2">
                                    Event 1
                                </Link>
                            </div>
                        </div>
                        <div className="tabcontent">
                            <img src="img/tabs/elite.jpg" alt="elite"/>
                            <div className="tabcontent__descr">
                                <Link href="/event" variant="body2">
                                    Event 2
                                </Link>                                    
                            </div>
                        </div>
                        <div className="tabcontent">
                            <img src="img/tabs/post.jpg" alt="post"/>
                            <div className="tabcontent__descr">
                                <Link href="/event" variant="body2">
                                    Event 3
                                </Link>                                  
                            </div>
                        </div>
                        <div className="tabcontent">
                            <img src="img/tabs/vegy.jpg" alt="vegy"/>
                            <div className="tabcontent__descr">
                                <Link href="/event" variant="body2">
                                    Event 4
                                </Link>
                            </div>
                        </div>
                        <div className="tabheader">
                            <h3>Choose your Event</h3>
                            <div className="tabheader__items">
                                <div className="tabheader__item">Event 1</div>
                                <div className="tabheader__item">Event 2</div>
                                <div className="tabheader__item">Event 3</div>
                                <div className="tabheader__item">Event 4</div>
                            </div>
                        </div>
                    </div>
                    <div className="preview__life">Live with full life!</div>
                </div>
            </div>

    );

}
export default Preview;