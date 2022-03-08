import React from "react";
import { makeStyles } from "@mui/styles";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { CardActions } from "@mui/material";
import { CardContent } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { Avatar } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Pagination } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function Blog() {
  const classes = useStyles();

  const cards = [1, 2];

  return (
    <div className="App">
      <Box className={classes.hero}>
        <Box>Stay Up To Date!</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {cards.map(() => (
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://source.unsplash.com/random"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Hotel Blog
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Hotel chain, the best chain!
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.cardActions}>
                  <Box className={classes.author}>
                    <Avatar src="https://source.unsplash.com/random" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        Hotel Guy
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        color="textSecondary"
                        component="p"
                      >
                        March 01, 2021
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default Blog;
