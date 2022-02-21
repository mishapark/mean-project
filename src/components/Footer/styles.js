const style = {
  logo: {
    height: 55,
  },
  button: {
    my: 2,
    display: "block",
    color: "#fff",
    "&:hover": {
      color: "red",
    },
  },
  nav: {
    display: "flex",
    ml: "-13px",
  },
  addressLine: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: { xs: "column", md: "row" },
  },
};
export default style;
