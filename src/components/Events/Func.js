import { useCallback, useEffect } from "react";
import tabs from "../../components/Events/Tabs";
import modal from "../../components/Events/Modal";
import timer from "../../components/Events/Timer";
import calc from "../../components/Events/Calc";
import forms from "../../components/Events/Forms";
import openModal from "../../components/Events/Modal";

const Func = () => {
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
    calc();
    forms("form", modalTimerId);
    };

export default Func;