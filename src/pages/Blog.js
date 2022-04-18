import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
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
import { useState, useEffect } from "react";
import axios from "axios";

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

function Blogs() {
  const classes = useStyles();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    sendGetRequest();
  }, []);

  const sendGetRequest = async () => {
    try {
      // let token = localStorage.getItem("token");

      // let config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "x-auth-token": token,
      //   },
      // };
      // const response = await axios.get(
      //   "http://localhost:5000/api/todos/",
      //   config
      // );
      // test fix
      const response = await axios.get(
        "https://bite-mern.herokuapp.com/api/blog/"
      );
      setBlogs(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  // const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="App">
      <Box className={classes.hero}>
        <Box>Stay Up To Date!!</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Read our latest Blogs and Stories
        </Typography>
        <Grid container spacing={3}>
          {blogs.map((blog) => (
            <Blog blog={blog} classes={classes} key={blog._id} />
          ))}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

const Blog = ({ blog, classes }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      {/* <Link to="/blogpage"> */}
      <Link key={blog._id} to={blog._id} state={blog}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={blog.imgUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {blog.title}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                {blog.description}
              </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.cardActions}>
            <Box className={classes.author}>
              <Avatar src="https://source.unsplash.com/random" />
              <Box ml={2}>
                {/* <Typography variant="subtitle2" component="p">
                  {blog.author}
                </Typography> */}
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  component="p"
                >
                  {blog.date}
                </Typography>
              </Box>
            </Box>
            <Box>
              <BookmarkBorderIcon />
            </Box>
          </CardActions>
        </Card>
      </Link>
    </Grid>
  );
};

export default Blogs;
