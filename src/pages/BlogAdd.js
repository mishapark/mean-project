import { useState, useEffect } from "react";
import { TextField, Typography } from "@mui/material";
import { Button, Paper } from "@mui/material";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";

const useStyles = makeStyles((theme) => ({
  buttonCss: {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  },
}));

const BlogAdd = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    imgurl: "",
  });

  const { title, date, description, imgurl } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

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
      title,
      date,
      description,
      imgurl,
    };
    try {
      const response = await axios.post(
        "https://bite-mern.herokuapp.com/api/blog/",
        data,
        config
      );
    } catch (e) {
      console.log(e.response.data.errors);
    }
    navigate("/blog");
  };

  useEffect(() => {
    console.log("in use effect");
    sendGetRequest();
  }, [isAdmin]);

  const sendGetRequest = async () => {
    try {
      let token = localStorage.getItem("token");

      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      const checkIsAdmin = await axios.get(
        "https://bite-mern.herokuapp.com/api/blog/isadmin",
        config
      );

      setIsAdmin(checkIsAdmin.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (isAdmin) {
    return (
      <Paper>
        <Box ml={50} mr={50} p={10}>
          <Typography variant="h1">Add new Blog</Typography>
          <Box pt={5}>
            <form onSubmit={(e) => onSubmit(e)}>
              <TextField
                m={5}
                fullWidth="true"
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
                required
                label={"Title"}
              />
              <br></br>
              <br></br>
              <TextField
                multiline="true"
                fullWidth="true"
                name="description"
                value={description}
                onChange={(e) => onChange(e)}
                required
                label={"Description"}
              />
              <br></br>
              <br></br>
              <TextField
                fullWidth="true"
                name="date"
                value={date}
                onChange={(e) => onChange(e)}
                required
                label={"Date"}
              />
              <br></br>
              <br></br>
              <TextField
                fullWidth="true"
                name="imgurl"
                value={imgurl}
                onChange={(e) => onChange(e)}
                required
                label={"Image URL"}
              />
              <br></br>
              <br></br>

              <input type="submit" value="Add Blog" />
            </form>
          </Box>
        </Box>
      </Paper>
    );
  } else {
    return (
      <>
        <h1>You're not an Admin. Only Admins can add blogs.</h1>
      </>
    );
  }
};

export default BlogAdd;
