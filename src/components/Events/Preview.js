import '..//..//pages/Events/Events.css';
import Link from "@mui/material/Link";
import * as React from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";

const Preview = (events) => {
    console.log('in Proeview >>>>>>' , events)
    return (
        <Container component="main" maxWidth="lg" className="preview">
            <div className="bgc_blue"></div>
            <Container component="main" maxWidth="lg" className="container">
                <Grid className="tabcontainer" >
                    {events.events.map((t) => (
                        <div className="tabcontent">
                            <img
                                src={t.image_url}
                                alt="vegy"
                            />
                            
                            <div className="tabcontent__descr">
                                <Link href={"/event?name=" + t.name + "&city=" + t.city + "&country=" + t.country + "&description=" + t.description + "&img=" + t.image_url + "&url=" + t.event_site_url +
                                 "&address=" + t.address}
                                
                                >
                                    {t.description}
                                </Link>
                            </div>
                        </div>
                    ))}
                    <div className="tabheader">
                        <h3>Choose your Event</h3>
                        <div className="tabheader__items">
                            {events.events.map((t) => (
                                <div className="tabheader__item">{t.name}</div>
                            ))}
                        </div>
                    </div>
                </Grid>
                <div className="preview__life">Live with full life!</div>
            </Container>
        </Container>
    );

}
export default Preview;