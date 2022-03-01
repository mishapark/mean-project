import React from "react";
import Paper from "@mui/material/Paper";
import styles from "./RestaurantsList.module.css";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import { Link } from "react-router-dom";

const DUMMY_RESTS = [
  {
    index: "1",
    picture: "",
    name: "Pai Northern",
    rating: 4,
    numberOfRatings: 345,
    cuisine: "Thai",
    price: "$$$",
    location: "Downtown",
    operatingHours: "4:00 PM - 10:00 PM",
    options: ["Outdoor", "Indoor"],
  },
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

function RestaurantsList() {
  return (
    <Paper elevation={5} className={styles.container}>
      {DUMMY_RESTS.map((r) => (
        <Link key={r.index} to={r.index} state={r}>
          <RestaurantCard
            picture={r.picture}
            name={r.name}
            rating={r.rating}
            numberOfRatings={r.numberOfRatings}
            cuisine={r.cuisine}
            price={r.price}
            location={r.location}
            operatingHours={r.operatingHours}
            options={r.options}
          />
        </Link>
      ))}
    </Paper>
  );
}

export default RestaurantsList;
