import * as React from "react";
import { Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navigation />
      <Typography variant="h1">Hello World</Typography>
      <Footer />
    </div>
  );
};
