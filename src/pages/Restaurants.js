import React from "react";
import RestaurantsList from "../components/RestaurantsList/RestaurantsList";
import Map from "../components/Map/Map";

function Restaurants() {
  return (
    <div style={{ display: "flex" }}>
      <RestaurantsList />
      <Map />
    </div>
  );
}

export default Restaurants;
