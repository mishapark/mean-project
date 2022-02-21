import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import styles from "./styles";

const pages = [
  { name: "Home", link: "/" },
  { name: "Restaurants", link: "/restaurants" },
  { name: "Events", link: "/events" },
  { name: "Blog", link: "/blog" },
];

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <Container disableGutters>
        <div className="footer-left">
          <Box component={"div"} sx={styles.logo}>
            <Link to="/" style={{ display: "inherit" }}>
              <img src={Logo} style={styles.logo} />
            </Link>
          </Box>
          <Box sx={styles.nav}>
            {pages.map((page) => (
              <Link key={page} to={page.link}>
                <Button sx={styles.button}>{page.name}</Button>
              </Link>
            ))}
          </Box>
          <p className="footer-company-name">Bite © 2022</p>
        </div>
        <div className="footer-center">
          <div style={styles.addressLine}>
            <HomeIcon color="secondary" style={styles.icon} />
            <p>
              <span>205 Humber College Blvd, Etobicoke </span>
            </p>
          </div>
          <div style={styles.addressLine}>
            <LocalPhoneIcon color="secondary" style={styles.icon} />
            <p>(416) 675-3111</p>
          </div>
          <div style={styles.addressLine}>
            <AlternateEmailIcon color="secondary" style={styles.icon} />
            <p>
              <a href="mailto:bite@humber.com">bite@humber.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Our company delivers the best content and information on the most
            awesome restaurants in your city!
          </p>
          <div className="footer-icons">
            <a href="#">
              <FacebookIcon color="secondary" />
            </a>
            <a href="#">
              <LinkedInIcon color="secondary" />
            </a>
            <a href="#">
              <TwitterIcon color="secondary" />
            </a>
            <a href="#">
              <GitHubIcon color="secondary" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
