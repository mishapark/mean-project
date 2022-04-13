import React, { useState } from "react";
import {
  Container,
  Typography,
  Stack,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";
import { Chip } from "@mui/material";
import { CareersList } from "../components/CareersList/CareersList";
import axios from "axios";
import { AddDialog } from "../components/CareersList/AddDialog";
import SearchIcon from "@mui/icons-material/Search";

export const Careers = () => {
  const [roles, setRoles] = useState("");
  const handleChange = (event) => {
    setRoles(event.target.value);
  };
  const [location, setLocation] = useState("");
  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const [search, setSearch] = React.useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const [rows, setRows] = React.useState([]);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        "https://bite-mern.herokuapp.com/api/jobs/"
      );
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
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              label="Search"
              onChange={(e) => handleSearch(e)}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
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
          <CareersList rows={rows} search={search}></CareersList>
        </Grid>
      </Grid>
      <br></br>
    </Container>
  );
};
