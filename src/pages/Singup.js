import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";

export const Singup = () => {
  const navigate = useNavigate();
  const [formData, setFromDate] = useState({
    email: "",
    name: "",
    password: "",
  });
  const { name, email, password } = formData;

  const onChange = (e) => {
    setFromDate({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user",
        data,
        config
      );

      console.log(response);
      localStorage.setItem("token", response.data.token);
      console.log(decode(response.data.token));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={(e) => onSubmit(e)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            minLength="4"
            autoComplete="new-password"
            value={password}
            onChange={(e) => onChange(e)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: "#3F50B5" }}
          >
            Sign Up
          </Button>
          <Link to="/login" variant="body2">
            Already have an account? Sign in
          </Link>
        </Box>
      </Box>
    </Container>
  );
};
