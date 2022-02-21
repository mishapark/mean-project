import "./Events.css";
import tabs from "../../components/Events/Tabs";
import modal from "../../components/Events/Modal";
import timer from "../../components/Events/Timer";
import cards from "../../components/Events/Cards";
import calc from "../../components/Events/Calc";
import forms from "../../components/Events/Forms";
import { openModal } from "../../components/Events/Modal";
import SidePanel from "../../components/Events/SidePanel";
import Preview from "../../components/Events/Preview";
import Offers from "../../components/Events/Offers";
import Order from "../../components/Events/Order";
import Promotion from "../../components/Events/Promotion";
import ContactUs from "../../components/Events/ContactUs";

const Events = () => {
  window.addEventListener("DOMContentLoaded", function () {
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
    cards();
    calc();
    forms("form", modalTimerId);
  });

  return (
    <div>
      <SidePanel />
      <Preview />
      <div className="divider"></div>
      <Offers />
      <div className="divider"></div>
      <Order />
      <div className="divider"></div>
      <Promotion />
      <ContactUs />
    </div>
  );
};
export default Events;
