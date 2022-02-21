import { Card } from "@mui/material";
import React from "react";
import styles from "./RestaurantCard.module.css";
import DoneIcon from "@mui/icons-material/Done";

function RestaurantCard() {
  return (
    <Card className={styles.container}>
      <div className={styles.pic}>
        <img
          src="https://s3-media0.fl.yelpcdn.com/bphoto/n9RGi8WEuExXkVb2FEGEzQ/ls.jpg"
          className={styles.img}
        />
      </div>
      <div className={styles.info}>
        <h2>Pai Northern</h2>
        <div className={styles.rating}>333</div>
        <div>
          <span className={styles.tags}>Thai</span>
          <span> · $$ · Downtown</span>
        </div>
        <div className={styles.time}>Closed until 4:00 PM</div>
        <div className={styles.options}>
          <DoneIcon color="success" sx={{ fontSize: 20, mr: 0.5 }} />
          Outdoor
        </div>
      </div>
    </Card>
  );
}

export default RestaurantCard;
