import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "./AppBar";
import Toolbar from "./Toolbar";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

const Navigation = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-start" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/"
              sx={rightLink}
            >
              {"Home"}
            </Link>

            <Link
              variant="h6"
              underline="none"
              href="/restraunts"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Restraunts"}
            </Link>

            <Link
              variant="h6"
              underline="none"
              href="/events"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Events"}
            </Link>

            <Link
              variant="h6"
              underline="none"
              href="/blog"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Blog"}
            </Link>
          </Box>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {"WebSite Name"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/login"
              sx={rightLink}
            >
              {"Login"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/signup"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Sign Up"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default Navigation;
