import * as React from "react";
import { makeStyles } from "@mui/styles";
import Link from "@mui/material/Link";
import MailOutlineIcon from '@mui/icons-material/MailOutlined';
import { spacing} from "@mui/system";
import { FormControl, InputLabel, Container, Grid, CssBaseline, CardMedia, CardContent, Card, Typography, Button} from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import EventMap from "../components/Events/EventMap";
import Map from "../components/Map/Map";
import { useParams, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
      padding: spacing(8, 6, 0, 8),
    },
  
    cardGrid: {
      padding: "20px 0 0 0",
    },

    cardGridWithTopBottom: {
        padding: "20px 0",
      },

    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
  
    cardMedia: {
      height: "300px",
      width: "300px"
    },
  
    cardContent: {
      flexGrow: 1,
    },

    iconSet: {
        paddingTop: "5px",
    },

  }));

export const Event = (props) => {
    const classes = useStyles();
    const location = useLocation()
    const { name } = location.state

    return (
      <div>
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <Typography variant="h5" align="center" className={classes.cardGridWithTopBottom}> 
            {/* Harbourfront Centre presents Via Katlehong Dance in Via Kanana */}
            {name}
            </Typography>
            <Grid container spacing={3}>
                <Grid item >
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image Title"
                        />
                        
                        
                    </Card>
                </Grid>
                <Grid item >
                    <Card className={classes.card}>
                        <CardContent className={classes.cardMedia}>
                            <Typography gutterBottom >
                                Harbourfront Centre
                            </Typography>
                            <Typography gutterBottom fontSize={11}>
                                235 Queens Quay W <br />
                                Toronto, ON M5J 2G8 <br />
                                Canada <br />
                                Phone number(416) 973-4000 <br />
                            </Typography>
                        </CardContent>
                        
                    </Card>
                </Grid> 

                
            </Grid>
        </Container>
        <Container component="" maxWidth="lg" >
            <Typography gutterBottom fontSize={16} width={600} color="red" className={classes.cardGrid}>
                <b>What/Why:</b>
                </Typography>
            <Typography gutterBottom fontSize={12} width={600} fontFamily = "Arial, Helvetica, sans-serif">
                In partnership with Digidance, Harbourfront Centre announces the North 
                American premiere of the digital broadcast of South African dance company Via 
                Katlehong Dance and contemporary choreographer Gregory Maqoma'sVia Kanana, 
                streaming February 16 - March 6, 2022. Pulsing with rhythmic vibrancy, 
                eight dancers combine the traditional, high-energy dance of Pantsula 
                (born out of South African protest) with tap, step and gumboot - a miners' 
                dance based on handstrokes on the thighs and calves - into an exhilarating 
                exploration of the problems and promise of their homeland. The digital broadcast 
                ofVia Kananawill include a 20-minute pre-show documentary. For tickets and 
                information, visit:harbourfrontcentre.com
            </Typography>
                           
            <Typography gutterBottom fontSize={16} color="red" className={classes.cardGrid}>
               <b>Discuss This Event</b>
            </Typography>
            <Link href="" variant="body2" >
                <MailOutlineIcon className= {classes.iconSet}/>
                {"Email me about updates"}
            </Link>
        </Container>
        <Container component="" maxWidth="lg" >
            <FormControl>
                <InputLabel htmlFor="my-input">Enter Your Reply</InputLabel>
                <TextareaAutosize
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Maximum 4 rows"
                    defaultValue=""
                    style={{ width: 600, marginTop: 50 }}
                />
                <Button variant="contained" component="span" style={{ width: 100, marginTop: 10, marginBottom: 10, backgroundColor: "red" }}>
                    Post
                </Button>
            </FormControl>
        </Container>
      </div>
    );
  };

  export default Event;