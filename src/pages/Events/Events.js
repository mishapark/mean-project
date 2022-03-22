import "./Events.css";
import {useState, useEffect} from "react";
import tabs from "../../components/Events/Tabs";
import modal from "../../components/Events/Modal";
import timer from "../../components/Events/Timer";
import forms from "../../components/Events/Forms";
import { openModal } from "../../components/Events/Modal";
import SidePanel from "../../components/Events/SidePanel";
import Preview from "../../components/Events/Preview";
import Offers from "../../components/Events/Offers";
import Order from "../../components/Events/Order";
import Promotion from "../../components/Events/Promotion";
import ContactUs from "../../components/Events/ContactUs";
import axios from 'axios';

const Events = () => {
  console.log('in Events component');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const sendGetRequest = async () => {
    console.log("in events >>>>>>>");
    try {
      let token = localStorage.getItem('token');

      let config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
      await axios.get(
        'http://localhost:5000/api/events',
        config
      ).then((res) =>  {
        console.log('res >>>>>>>>>>>>>>>>>>>', res);
        setEvents(res.data)
        setLoading(false);
      }).catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect (() => {
    console.log('in use efeect')
    if(loading) {
      sendGetRequest();
    }
   
    if(!loading)
 {
  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    50000
  );
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal", modalTimerId);
  timer(".timer", "2022-06-11");
  //calc();
  forms("form", modalTimerId);
 }    
}, [loading]
  );

  if(loading) {
    return (
      <><h1>Loading Content .....</h1></>
    )
  } else {  
  return (

    <div>
      <SidePanel />
      <Preview events = {events}/>
      <div className="divider"></div>
      <Offers />
      <div className="divider"></div>
      <Order />
      <div className="divider"></div>
      <Promotion />
      <ContactUs />
    </div>
  );
  }
};
export default Events;
