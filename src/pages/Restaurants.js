import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantsList from "../components/RestaurantsList/RestaurantsList";
import Map from "../components/Map/Map";

function Restaurants() {
  const [restaurants, setRestaurants] = useState();

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        `https://bite-mern.herokuapp.com/api/restaurants/`,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      setRestaurants(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return restaurants ? (
    <div style={{ display: "flex" }}>
      <RestaurantsList restaurants={restaurants} />
      <Map restaurants={restaurants} />
    </div>
  ) : (
    "Loading"
  );
}

export default Restaurants;
