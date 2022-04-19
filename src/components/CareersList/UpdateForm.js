import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Autocomplete, Stack, TextField } from "@mui/material";
import axios from "axios";

export const UpdateForm = ({ open, setOpen, job, setJob }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = React.useState(localStorage.getItem("token"));

  const handleInput = (e) => {
    const newData = { ...job };
    newData[e.target.name] = e.target.value;
    setJob(newData);
    console.log(job);
  };

  const handleSelect = (e, value) => {
    const newData = { ...job };
    newData["type"] = value;
    setJob(newData);
    console.log(job);
  };

  const handleSubmitData = (e) => {
    console.log(job);

    e.preventDefault();
    axios
      .put(`https://bite-mern.herokuapp.com/api/jobs/`, job, {
        headers: { "Content-Type": "application/json", "x-auth-token": user },
      })
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={(e) => handleSubmitData(e)}>
          <DialogTitle sx={{ minWidth: "800px" }}>
            Add New Job Posting
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please add the infromation about the posting
            </DialogContentText>
            <br />
            <Stack spacing={2}>
              <TextField
                label="Job name"
                name="name"
                required
                value={job.name}
                onChange={(e) => handleInput(e)}
              ></TextField>
              <TextField
                label="Location"
                name="location"
                required
                value={job.location}
                onChange={(e) => handleInput(e)}
              ></TextField>
              <Autocomplete
                disablePortal
                name="type"
                required
                value={job.type}
                options={["Part time", "Full time"]}
                onInputChange={(event, value) => handleSelect(event, value)}
                renderInput={(params) => <TextField {...params} label="Type" />}
              />
              <TextField
                label="Expirience"
                name="expirience"
                required
                value={job.expirience}
                onChange={(e) => handleInput(e)}
              ></TextField>
              <TextField
                label="Role"
                name="role"
                required
                value={job.role}
                onChange={(e) => handleInput(e)}
              ></TextField>
              <TextField
                label="Description"
                name="description"
                required
                multiline
                value={job.description}
                rows={5}
                onChange={(e) => handleInput(e)}
              ></TextField>
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                handleClose();
              }}
              type="submit"
            >
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
