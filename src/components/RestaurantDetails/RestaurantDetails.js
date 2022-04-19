import React from "react";
import { Container } from "@mui/material";
import Rating from "@mui/material/Rating";
import styles from "./RestaurantDetails.module.css";

function RestaurantDetails({ data }) {
  return (
    <>
      <div
        className={styles.upper}
        style={{
          background: `url(${data.picture})
    center bottom no-repeat`,
        }}
      >
        <Container disableGutters>
          <h1 className={styles.name}>{data.name}</h1>
          <div className={styles.rating}>
            <Rating
              name="read-only"
              value={data.rating}
              readOnly
              size="large"
            />
            <div className={styles.ratingNumber}>
              {data.numberOfRatings} reviews
            </div>
          </div>
          <div>
            <span className={styles.tags}>{data.cuisine}</span>
            <span>
              {" "}
              · {data.price} · {data.location}
            </span>
          </div>
          <div className={styles.time}>{data.operatingHours}</div>
        </Container>
      </div>
    </>
  );
}

export default RestaurantDetails;
