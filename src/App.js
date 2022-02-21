import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Singup } from "./pages/Singup";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import Events from "./pages/Events/Events";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/' element={<Login/>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
