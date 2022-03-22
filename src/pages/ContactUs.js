import * as React from "react";
import './Events/Events.css';
import { makeStyles } from "@mui/styles";
import { spacing} from "@mui/system";
import { Container, Grid, CssBaseline, CardMedia, CardContent, Card, Typography, Button} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import { DonutLarge } from "@mui/icons-material";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      height: "400px",
      width: "100%"
    },

    cardForm: {
      height: "300px",
      width: "100%",
      paddingLeft: '100px',
    },
  
    cardContent: {
      flexGrow: 1,
    },

    iconSet: {
        paddingTop: "5px",
    },

    centered: {
        position: "absolute",
        top: "90%"
      }

  }));

  

export const ContactUs = () => {
    const classes = useStyles();
    const navigate = useNavigate();
  const [formData, setFromDate] = useState({
    cname: "",
    phone: "",
  });
  const { cname, phone } = formData;

  const onChange = (e) => {
    setFromDate({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    let data = {
      cname: cname,
      phone: phone,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contacts",
        data,
        config
      );

      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
    return (
      <div>
        <Container maxWidth="lg" className={classes.cardGrid}>
          <div style={{position: 'relative'}} >
            <CardMedia
                component="img"
                className={classes.media}
                image="https://s3-media0.fl.yelpcdn.com/assets/public/hero.yji-78765fccc38b453cb0a31d9d0c514511.jpg"
            />
            <div style={{
              position: 'absolute', 
              color: 'white', 
              top: '70%', 
              left: '50%', 
              transform: 'translateX(-50%)',
              fontSize: '50px',
              fontWeight: 'bold',
            }} >Bite connects people with great local businesses.</div>
          </div>
          <Typography gutterBottom fontSize={24} style={{
              textAlign: 'center',
              fontSize: '50px',
              fontWeight: 'bold',}} className={classes.cardGrid}>
                <b>We will contact you as soon as possible!</b>
                </Typography>
                
          <CardContent className={classes.cardForm}>
              <form onSubmit={(e) => onSubmit(e)}>
                  <div>
                  <Input required placeholder="Your name" name="cname" type="text" value={cname}
                         onChange={(e) => onChange(e)}/>
                  </div>
                  <div>
                  <Input required placeholder="Your phone number" name="phone" type="phone" value={phone}
                         onChange={(e) => onChange(e)}/>
                  </div>
                  
                  <Input type="submit" value="Call me back"/>
              </form>
          </CardContent>
        </Container>

      </div>
    );
  };

  export default ContactUs;