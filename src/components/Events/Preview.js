import '..//..//pages/Events/Events.css';
import Link from "@mui/material/Link";
import * as React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

// const events = {
//     metadata: [{
//         id: 1,
//         name: 'Event 1',
//         data: "img/tabs/vegy.jpg",
//     },
//     {
//         id: 2,
//         name: 'Event 2',
//         data: "img/tabs/elite.jpg",
//     },
//     {
//         id: 3,
//         name: 'Event 3',
//         data: "img/tabs/vegy.jpg",
//     },
//     {
//         id: 4,
//         name: 'Event 4',
//         data: "img/tabs/vegy.jpg",
//     }]

// };

const Preview = () => {

    return (
        <Container component="main" maxWidth="lg" className="preview">
            <div className="bgc_blue"></div>
            <Container component="main" maxWidth="lg" className="container">
                <Grid className="tabcontainer" >
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
                </Grid>
                <div className="preview__life">Live with full life!</div>
            </Container>
        </Container>
    );

}
export default Preview;