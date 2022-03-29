import React, { useState } from "react";
import { Container, Typography, Stack, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import { Chip } from "@mui/material";
import { CareersList } from "../components/CareersList/CareersList";
import axios from "axios";
import { AddDialog } from "../components/CareersList/AddDialog";

export const Careers = () => {
  const [roles, setRoles] = useState("");
  const handleChange = (event) => {
    setRoles(event.target.value);
  };
  const [location, setLocation] = useState("");
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const [rows, setRows] = React.useState([]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get("http://localhost:5006/api/jobs/");
      console.log(response.data);
      setRows(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    sendGetRequest();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <img src="img/careers/jobheader.png" style={{ maxWidth: "1200px" }}></img>
      <Typography variant="h2" sx={{ mt: 3 }}>
        Work with us
      </Typography>
      <Typography variant="subtitle1">
        Work hard with highly motivated team of talented people and great
        teammates to launch perfectly crafted products you will love.
      </Typography>
      <br></br>
      <br />
      <Typography variant="caption" sx={{ mt: 5 }}>
        OPEN POSITIONS
      </Typography>
      <AddDialog open={open} setOpen={setOpen} />
      <Typography variant="h4">Current job openings</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Roles</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={roles}
              label="Roles"
              onChange={handleChange}
            >
              <MenuItem value={10}>Support</MenuItem>
              <MenuItem value={20}>Design</MenuItem>
              <MenuItem value={30}>Developing</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
              onChange={handleChangeLocation}
            >
              <MenuItem value={10}>Moscow, Russia</MenuItem>
              <MenuItem value={20}>Toronto, Canada</MenuItem>
              <MenuItem value={30}>New York, USA</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={11}>
          <Stack
            direction="row"
            sx={{ display: "flow", justifyContent: "space-between" }}
          >
            <Typography variant="h6">Postings</Typography>
            <Button variant="contained" onClick={handleClickOpen}>
              Add Posting
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <Chip label={`${rows.length} postings`} color="secondary" />
        </Grid>
        <Grid item xs={12}>
          <CareersList rows={rows}></CareersList>
        </Grid>
      </Grid>
      <br></br>
    </Container>
  );
};
