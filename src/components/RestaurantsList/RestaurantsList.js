import React from "react";
import Paper from "@mui/material/Paper";
import styles from "./RestaurantsList.module.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";

function RestaurantsList() {
  return (
    <Paper elevation={5} className={styles.container}>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </Paper>
  );
}

export default RestaurantsList;
