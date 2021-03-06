import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { CareerForm } from "../components/CareersList/CareerForm";
import axios from "axios";
import { UpdateForm } from "../components/CareersList/UpdateForm";

export const Career = () => {
  const { id } = useParams();

  const [job, setJob] = React.useState({});

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        `https://bite-mern.herokuapp.com/api/jobs/${id}`
      );
      console.log(response.data);
      setJob(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    sendGetRequest();
  }, []);

  const [user, setUser] = React.useState({
    role: localStorage.getItem("role"),
  });
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Typography variant="h3">{job.name}</Typography>
          <Typography variant="subtitle2">
            {job.location} · {job.type}
          </Typography>
        </Grid>
        <Grid item xs={2} spacing={2}>
          <Button variant="contained" onClick={handleClickOpen}>
            Apply
          </Button>
          {user.role === "Admin" ? (
            <Button variant="contained" onClick={handleClickOpen2}>
              Update
            </Button>
          ) : (
            <></>
          )}
        </Grid>
        <Grid item xs={12}>
          <Divider></Divider>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">What we’re looking for</Typography>
          <Typography variant="subtitle1">{job.description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider></Divider>
        </Grid>
        <Grid item xs={12}>
          <CareerForm open={open} setOpen={setOpen} jobId={id}></CareerForm>
        </Grid>
        <Grid item xs={12}>
          <UpdateForm
            open={open2}
            setOpen={setOpen2}
            job={job}
            setJob={setJob}
          ></UpdateForm>
        </Grid>
      </Grid>
      <br></br>
    </Container>
  );
};
