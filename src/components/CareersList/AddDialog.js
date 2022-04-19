import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Autocomplete, Stack, TextField } from "@mui/material";
import axios from "axios";

export const AddDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = React.useState(localStorage.getItem("token"));

  const [newJob, setNewJob] = React.useState({});

  const handleInput = (e) => {
    const newData = { ...newJob };
    newData[e.target.name] = e.target.value;
    setNewJob(newData);
    console.log(newJob);
  };

  const handleSelect = (e, value) => {
    const newData = { ...newJob };
    newData["type"] = value;
    setNewJob(newData);
    console.log(newData);
  };

  const handleSubmitData = (e) => {
    console.log(newJob);

    e.preventDefault();
    axios
      .post(`https://bite-mern.herokuapp.com/api/jobs/`, newJob, {
        headers: { "Content-Type": "application/json", "x-auth-token": user },
      })
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmitData}>
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
                onChange={(e) => handleInput(e)}
              ></TextField>
              <TextField
                label="Location"
                name="location"
                required
                onChange={(e) => handleInput(e)}
              ></TextField>
              <Autocomplete
                disablePortal
                name="type"
                options={["Part time", "Full time"]}
                onInputChange={(event, value) => handleSelect(event, value)}
                renderInput={(params) => <TextField {...params} label="Type" />}
              />
              <TextField
                label="Expirience"
                name="expirience"
                required
                onChange={(e) => handleInput(e)}
              ></TextField>
              <TextField
                label="Role"
                name="role"
                required
                onChange={(e) => handleInput(e)}
              ></TextField>
              <TextField
                label="Description"
                name="description"
                required
                multiline
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
