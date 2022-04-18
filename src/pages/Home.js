import * as React from "react";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, spacing } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: spacing(8, 6, 0, 8),
  },

  cardGrid: {
    padding: "20px 0",
  },

  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  cardMedia: {
    paddingTop: "100%",
    height: "300",
    width: "300",
  },

  cardContent: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [topRestaurants, setTopRestaurants] = useState([]);

  useEffect(() => {
    sendGetRequest();
  }, [topRestaurants]);

  const sendGetRequest = async () => {
    try {
      const config = {
        headers: {
          Authorization:
            "Bearer Tvh58J-u_HLHzoJyB3B_amiAm6WQyC7AhYoTSDBerhb7pSDvSq-X2ZuPrn0WagikTy6TuSQ11lsw76EOqRhDRY6c8uzqq4vQGOVvDY5fLfodhLrT-ZIp1syty0ldYnYx",
          accept: "application/json",
          "x-requested-with": "xmlhttprequest",
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          term: "restaurants",
          location: "toronto",
          sort_by: "rating",
          limit: 12,
        },
      };

      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",
        config
      );
      setTopRestaurants(response.data.businesses);
      console.log(response.data.businesses);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <CssBaseline />
      <div></div>

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              fontStyle="italic"
            >
              Bite!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              gutterBottom
            >
              A Place to find Hotels for all needs
            </Typography>

            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      navigate("/restaurants");
                    }}
                  >
                    View All Restaurants
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                      navigate("/events");
                    }}
                  >
                    View All Events
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Box>
            <Typography variant="h3" align="center" mt={10} mb={10}>
              Top 'Most Rated' Restaurants
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {topRestaurants.map((restaurant) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={restaurant.image_url}
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h4">
                      {restaurant.name}
                    </Typography>
                    <Typography gutterBottom variant="h5">
                      Rating: {restaurant.rating}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={restaurant.url}>
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Home;
