import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./Map.module.css";
import axios from "axios";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWFzdDExNiIsImEiOiJja3p3amI3bjIwMWFjMm5wNGd3ams4bTAxIn0.rAK46NmSQxluVeBizRO86g";

const Marker = () => {
  return <div className={styles.marker} />;
};

function Map({ restaurants }) {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-79.47);
  const [lat, setLat] = useState(43.67);
  const [zoom, setZoom] = useState(12);

  useEffect(async () => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    restaurants.map(async (r) => {
      try {
        await axios
          .get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${r.location}.json?proximity=-79.41,43.65&access_token=${mapboxgl.accessToken}`,
            {
              headers: {
                "x-auth-token": localStorage.getItem("token"),
              },
            }
          )
          .then((response) => {
            const ref = React.createRef();
            ref.current = document.createElement("div");
            ReactDOM.render(<Marker />, ref.current);

            new mapboxgl.Marker(ref.current)
              .setLngLat(response.data.features[0].center)
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                  `<h3>${r.name}</h3><p>${r.location}</p>`
                )
              )
              .addTo(map);
          });
      } catch (err) {
        console.log(err.message);
      }
    });

    return () => map.remove();
  }, []);

  return <div className={styles.mapContainer} ref={mapContainerRef} />;
}

export default Map;
