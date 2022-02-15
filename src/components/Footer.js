import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <Box
          component="footer"

          // px={{ xs: 3, sm: 10 }}
          // py={{ xs: 5, sm: 10 }}
          // color="white"
          // bgcolor="#282d32"
          // component="footer"
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Help</Box>
                <Box>
                  <Link href="/" color="inherit">
                    Contact
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Support
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Support2
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Help</Box>
                <Box>
                  <Link href="/" color="inherit">
                    Contact
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Support
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Support2
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Help</Box>
                <Box>
                  <Link href="/" color="inherit">
                    Contact
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Support
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Support2
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Box
              textAlign="center"
              pt={{ xs: 5, sm: 10 }}
              pb={{ xs: 5, sm: 10 }}
            >
              YelpLike Website
            </Box>
          </Container>
        </Box>
      </footer>
    </div>
  );
};

export default Footer;
