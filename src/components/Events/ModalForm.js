import '../pages/Events/Events.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const ModalForm = () => {
    const navigate = useNavigate();
    const [formData, setFromDate] = useState({
      cname: "",
      email: "",
      phone: "",
    });
    const { cname, phone, email } = formData;
  
    const onChange = (e) => {
      setFromDate({ ...formData, [e.target.name]: e.target.value });
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
  
      let token = localStorage.getItem("token");
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      let data = {
        name: cname,
        email: email,
        phone: phone,
      };
      try {
        const response = await axios.post(
          "http://localhost:5000/api/contacts",
          data,
          config
        );
  
        console.log(response);
        navigate("/events");
      } catch (err) {
        console.log(err.message);
      }
    };
    return (
        <div className="modal">
            <div className="modal__dialog">
                <div className="modal__content">
                <form onSubmit={(e) => onSubmit(e)}>
                  <div>
                  <Input required placeholder="Your name" name="cname" type="text" value={cname}
                         onChange={(e) => onChange(e)}/>
                  </div>
                  <div>
                  <Input required placeholder="Your email" name="email" type="email" value={email}
                         onChange={(e) => onChange(e)}/>
                  </div>
                  <div>
                  <Input required placeholder="Your phone number" name="phone" type="phone" value={phone}
                         onChange={(e) => onChange(e)}/>
                  </div>
                  
                  <Input type="submit" value="Call me back"/>
              </form>
                </div>
            </div>
        </div>
    );
}
export default ModalForm;