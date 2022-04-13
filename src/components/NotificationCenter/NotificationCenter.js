import React, { useState, useEffect } from "react";
import axios from "axios";
import Drawer from "@mui/material/Drawer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Notification from "../Notification/Notification";

const NotificationCenter = ({ notificationsOpen, toogleNotifications }) => {
  const [tab, setTab] = useState(0);
  const [notifications, setNotifications] = useState();
  const [requestData, setRequestData] = useState(new Date());

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        `https://bite-mern.herokuapp.com/api/notifications`,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      const notifs = response.data.reduce(
        (result, element, i) => {
          element.type === "event"
            ? result[0].push(element)
            : result[1].push(element);
          return result;
        },
        [[], []]
      );
      setNotifications(notifs);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, [requestData]);

  const handleTabToggle = (event, tab) => setTab(tab);

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={notificationsOpen}
      ModalProps={{
        keepMounted: false,
        onBackdropClick: toogleNotifications,
      }}
    >
      <Tabs
        value={tab}
        onChange={handleTabToggle}
        centered
        textColor="secondary"
        indicatorColor="secondary"
        variant="fullWidth"
      >
        <Tab label="Events" />
        <Tab label="New Restaurants" />
      </Tabs>
      <div style={{ width: 600, padding: 10 }}>
        {notifications ? (
          tab === 0 ? (
            <Notification
              setRequestData={setRequestData}
              notifications={notifications[0]}
            />
          ) : (
            <Notification
              setRequestData={setRequestData}
              notifications={notifications[1]}
            />
          )
        ) : (
          "Loading..."
        )}
      </div>
    </Drawer>
  );
};

export default NotificationCenter;
