import React from "react";
import Paper from "@mui/material/Paper";
import styles from "./RestaurantsList.module.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Link } from "react-router-dom";

const DUMMY_RESTS = [
  {
    index: "2",
    picture: "",
    name: "Richmond Station",
    rating: 5,
    numberOfRatings: 765,
    cuisine: "Canadian",
    price: "$$$$",
    location: "Richmondhill",
    operatingHours: "3:00 PM - 9:00PM",
    options: ["Delivery", "Takeout"],
  },
];

function RestaurantsList({ restaurants }) {
  return restaurants ? (
    <Paper elevation={5} className={styles.container}>
      {restaurants.map((r) => (
        <Link key={r._id} to={r._id} state={r}>
          <RestaurantCard
            picture={r.picture}
            name={r.name}
            rating={r.rating}
            // numberOfRatings={r.numberOfRatings}
            cuisine={r.cuisine}
            price={r.price}
            location={r.location}
            operatingHours={r.hours}
            options={r.options}
          />
        </Link>
      ))}
    </Paper>
  ) : (
    "Loading..."
  );
}

export default RestaurantsList;
