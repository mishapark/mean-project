import * as React from "react";
import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Grid } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { spacing, typography } from "@mui/system";

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
  },

  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Navigation />
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
                  <Button variant="contained" color="primary">
                    View All Hotels
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    View All Events
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Hotel 1
                    </Typography>
                    <Typography gutterBottom variant="h5">
                      Hotel Details...
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
