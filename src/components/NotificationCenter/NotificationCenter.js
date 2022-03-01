import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const NotificationCenter = ({ notificationsOpen, toogleNotifications }) => {
  const [tab, setTab] = useState(1);

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
        <Tab label="Today" />
        <Tab label="Notifications" />
      </Tabs>
      <div style={{ width: 400 }}>
        {tab === 0 && <h1>Hello</h1>}
        {tab === 1 && <h1>Bye</h1>}
      </div>
    </Drawer>
  );
};

export default NotificationCenter;
