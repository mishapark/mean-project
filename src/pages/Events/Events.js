import "./Events.css";
import { useState, useEffect } from "react";
import tabs from "../../components/Events/Tabs";
import SidePanel from "../../components/Events/SidePanel";
import Preview from "../../components/Events/Preview";
import Offers from "../../components/Events/Offers";
import Promotion from "../../components/Events/Promotion";
<<<<<<< HEAD
import axios from 'axios';
import timer from "../../components/Events/Timer"
=======
import ContactUs from "../../components/Events/ContactUs";
import axios from "axios";
import timer from "../../components/Events/Timer";
>>>>>>> 82917680c5d490edd6c1f8435884f2555e61e6ba

const Events = () => {
  const [events, setEvents] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingFeatured, setLoadingFeatured] = useState(true);

  const sendGetRequest = async () => {
    console.log("in events >>>>>>>");
    try {
      let token = localStorage.getItem("token");

      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      await axios
        .get("https://bite-mern.herokuapp.com/api/events", config)
        .then((res) => {
          console.log("res >>>>>>>>>>>>>>>>>>>", res);
          setEvents(res.data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const sendGetRequestFeatured = async () => {
    console.log("in events >>>>>>>");
    try {
      let token = localStorage.getItem("token");

      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      await axios
        .get("https://bite-mern.herokuapp.com/api/featuredEvents", config)
        .then((res) => {
          console.log("res >>>>>>>>>>>>>>>>>>>", res);
          setFeaturedEvents(res.data);
          setLoadingFeatured(false);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("in use efeect");
    if (loading && loadingFeatured) {
      sendGetRequest();
      sendGetRequestFeatured();
    }

    if (!loading && !loadingFeatured) {
      tabs(
        ".tabheader__item",
        ".tabcontent",
        ".tabheader__items",
        "tabheader__item_active"
      );
      timer(".timer", "2022-05-20");
    }
  }, [loading, loadingFeatured]);

<<<<<<< HEAD
    <div>
      <SidePanel />
      <Preview events = {events}/>
      <div className="divider"></div>
      {!loadingFeatured && 
        <Offers featuredEvents = {featuredEvents}/>
      }
      <div className="divider"></div>
      <Promotion />
    </div>
  );
=======
  if (loading && loadingFeatured) {
    return (
      <>
        <h1>Loading Content .....</h1>
      </>
    );
  } else {
    return (
      <div>
        <SidePanel />
        <Preview events={events} />
        <div className="divider"></div>
        {!loadingFeatured && <Offers featuredEvents={featuredEvents} />}
        <div className="divider"></div>
        <Promotion />
        <ContactUs />
      </div>
    );
>>>>>>> 82917680c5d490edd6c1f8435884f2555e61e6ba
  }
};
export default Events;
