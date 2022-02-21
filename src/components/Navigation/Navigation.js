import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/icons/logo.png";
import { Link } from "react-router-dom";
import styles from "./styles";

const pages = [
  { name: "Home", link: "/" },
  { name: "Restaurants", link: "/restaurants" },
  { name: "Events", link: "/events" },
  { name: "Blog", link: "/blog" },
];
const settings = ["signup", "login"];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
      <Container disableGutters>
        <Toolbar disableGutters sx={styles.toolbar}>
          <Box component={"div"} sx={styles.logo}>
            <Link to="/" style={{ display: "inherit" }}>
              <img src={Logo} style={styles.logo} />
            </Link>
          </Box>
          <Box sx={styles.nav}>
            {pages.map((page) => (
              <Link key={page} to={page.link} onClick={handleCloseNavMenu}>
                <Button sx={styles.button}>{page.name}</Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={styles.menuItem}
                >
                  <Link to={page.link}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Link to="/" style={styles.midLogo}>
            <Box
              component="img"
              sx={styles.midLogo}
              alt="Your logo."
              src={Logo}
            />
          </Link>

          <Box>
            <Tooltip title="Open settings">
              <IconButton color="secondary" onClick={handleOpenUserMenu}>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                  sx={styles.menuItem}
                >
                  <Link to={`/${setting}`}>
                    {setting.charAt(0).toUpperCase() + setting.slice(1)}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
