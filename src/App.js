import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Singup } from "./pages/Singup";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import Events from "./pages/Events/Events";
import Blog from "./pages/Blog";
import Restaurants from "./pages/Restaurants";
import Restaurant from "./pages/Restaurant";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Careers } from "./pages/Careers";
import { Career } from "./pages/Career";
import NotificationCenter from "./components/NotificationCenter/NotificationCenter";
import Event from "./pages/Event";
import ContactUs from "./pages/ContactUs";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ff151f",
    },
  },
  typography: {
    fontFamily: `"Dosis", sans-serif`,
    fontSize: 17,
  },
});

function App() {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const handleNotificationToggle = () =>
    setNotificationsOpen(!notificationsOpen);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation toogleNotifications={handleNotificationToggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/' element={<Login/>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/restaurants">
            <Route index element={<Restaurants />} />
            <Route path=":id" element={<Restaurant />} />
          </Route>
          <Route path="/events" element={<Events />} />
          <Route path="/event" element={<Event />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/careers">
            <Route index element={<Careers />} />
            <Route path=":id" element={<Career />} />
          </Route>
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <NotificationCenter
          notificationsOpen={notificationsOpen}
          toogleNotifications={handleNotificationToggle}
        />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
