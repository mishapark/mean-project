import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Singup } from "./pages/Singup";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import Events from "./pages/Events/Events";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage";
import BlogAdd from "./pages/BlogAdd";
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
import AuthContext from "./context/AuthContext";
import { Rights } from "./pages/Rights";

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
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  // let appRoutes;
  // if (isLoggedIn) {
  //   appRoutes = (

  //   );
  // } else {
  //   appRoutes = (

  //   );
  // }

  const handleNotificationToggle = () =>
    setNotificationsOpen(!notificationsOpen);
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navigation toogleNotifications={handleNotificationToggle} />
          {isLoggedIn && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/restaurants">
                <Route index element={<Restaurants />} />
                <Route path=":id" element={<Restaurant />} />
              </Route>
              <Route path="/events" element={<Events />} />
              <Route path="/event" element={<Event />} />
              <Route path="/rights" element={<Rights />} />
              <Route path="/blogadd" element={<BlogAdd />} />
              <Route path="/blog">
                <Route index element={<Blog />} />
                <Route path=":_id" element={<BlogPage />} />
              </Route>
              <Route path="/careers">
                <Route index element={<Careers />} />
                <Route path=":id" element={<Career />} />
              </Route>
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/signup" element={<Singup />} />
            </Routes>
          )}
          {!isLoggedIn && (
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
              <Route path="/blogadd" element={<BlogAdd />} />
              <Route path="/blog">
                <Route index element={<Blog />} />
                <Route path=":_id" element={<BlogPage />} />
              </Route>
              <Route path="/signup" element={<Singup />} />
              <Route path="/careers">
                <Route index element={<Careers />} />
                <Route path=":id" element={<Career />} />
              </Route>
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          )}
          <NotificationCenter
            notificationsOpen={notificationsOpen}
            toogleNotifications={handleNotificationToggle}
          />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
