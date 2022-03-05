import React from "react";
import { useLocation } from "react-router-dom";
import RestaurantDetails from "../components/RestaurantDetails/RestaurantDetails";

function Restaurant() {
  const location = useLocation();
  const data = location.state;

  return <RestaurantDetails data={data} />;
}

export default Restaurant;
