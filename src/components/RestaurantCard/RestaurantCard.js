import { Card } from "@mui/material";
import React from "react";
import styles from "./RestaurantCard.module.css";
import DoneIcon from "@mui/icons-material/Done";
import Rating from "@mui/material/Rating";

function RestaurantCard({
  picture,
  name,
  rating,
  // numberOfRatings,
  cuisine,
  price,
  location,
  operatingHours,
  options,
}) {
  return (
    <Card className={styles.container}>
      <div className={styles.pic}>
        <img src={picture} className={styles.img} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.restName}>{name}</h2>
        <div className={styles.rating}>
          <Rating name="read-only" value={rating} readOnly size="small" />
          {/* <div className={styles.ratingNumber}>{numberOfRatings}</div> */}
        </div>
        <div>
          <span className={styles.tags}>{cuisine}</span>
          <span>
            {" "}
            · {price} · {location}
          </span>
        </div>
        <div className={styles.time}>{operatingHours}</div>
        <div className={styles.options}>
          {options &&
            options.map((o) => (
              <div key={o} className={styles.option}>
                <DoneIcon color="success" sx={{ fontSize: 20, mr: 0.5 }} />
                {o}
              </div>
            ))}
        </div>
      </div>
    </Card>
  );
}

export default RestaurantCard;
