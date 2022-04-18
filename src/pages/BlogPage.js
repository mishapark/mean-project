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
import { borders } from "@mui/system";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: (data) =>
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.imgUrl})`,
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
    paddingTop: theme.spacing(10),
  },
  media: {
    height: 240,
  },
  borderContent: {
    border: "1px solid black",
    width: 80,
    height: 80,
    borderRadius: 8,
  },
}));

function Blog() {
  const location = useLocation();
  const data = location.state;
  const classes = useStyles(data);

  return (
    <div className="App">
      <Box className={classes.hero}>
        <Box>{data.title}</Box>
      </Box>
      <Typography gutterBottom variant="h6">
        Date Published: {data.date}
      </Typography>
      <Box m={10} p={15} sx={{ border: 1, borderRadius: 16 }}>
        <Typography gutterBottom variant="h6">
          {data.description}
        </Typography>
      </Box>
    </div>
  );
}

export default Blog;
