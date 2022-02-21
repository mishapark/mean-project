import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./Map.module.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWFzdDExNiIsImEiOiJja3p3amI3bjIwMWFjMm5wNGd3ams4bTAxIn0.rAK46NmSQxluVeBizRO86g";

function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-79.41);
  const [lat, setLat] = useState(43.65);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div className={styles.container}>
      <div ref={mapContainer} className={styles.map} />
    </div>
  );
}

export default Map;
