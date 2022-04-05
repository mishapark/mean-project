import { Card } from "@mui/material";
import axios from "axios";
import React from "react";
import styles from "./Notification.module.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";

function Notification({ notifications, setRequestData }) {
  const deleteNotification = async (id) => {
    try {
      await axios
        .delete(`http://localhost:5000/api/notifications?id=${id}`)
        .then(() => setRequestData(new Date()));
    } catch (err) {
      console.log(err.message);
    }
  };

  return notifications.map((n) => (
    <Card className={styles.container} key={n.name}>
      <div className={styles.pic}>
        {n.type === "event" ? (
          <EventAvailableIcon sx={{ color: "#ff151f" }} />
        ) : (
          <RestaurantIcon sx={{ color: "#ff151f" }} />
        )}
      </div>
      <div className={styles.info}>
        <div className={styles.notifName}>{n.name}</div>
      </div>
      <IconButton onClick={() => deleteNotification(n._id)}>
        <ClearIcon />
      </IconButton>
    </Card>
  ));
}

export default Notification;
