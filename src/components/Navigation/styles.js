export default {
  logoLink: {
    height: 55,
    mr: 2,
    display: { xs: "none", md: "none" },
  },
  logo: {
    height: 55,
    mr: 2,
    display: { xs: "none", md: "flex" },
  },
  midLogo: {
    height: 40,
    display: { xs: "flex", md: "none" },
  },
  button: {
    my: 2,
    display: "block",
    color: "#fff",
    "&:hover": {
      color: "red",
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: { xs: "space-between", md: "flex-start" },
  },
  nav: {
    display: { xs: "none", md: "flex" },
    flexGrow: 1,
  },
  menuItem: {
    "&:hover": {
      color: "red",
      background: "#000",
    },
  },
};
