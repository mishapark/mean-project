import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Autocomplete, Stack, TextField } from "@mui/material";
import axios from "axios";
import SaveIcon from "@mui/icons-material/Save";

export const CareerForm = ({ open, setOpen, jobId }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const [myFile, setFile] = React.useState();
  const [formData2, setFromDate] = React.useState({
    job: jobId,
    name: "",
    message: "",
    email: "",
  });
  const { name, email, message } = formData2;

  const onChange = (e) => {
    setFromDate({ ...formData2, [e.target.name]: e.target.value });
  };

  const onChange2 = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const data = new FormData();
    data.append("name", name);
    data.append("message", message);
    data.append("job", jobId);
    data.append("email", email);
    data.append("myFile", myFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/application/",
        data,
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={(e) => onSubmit(e)}>
          <DialogTitle sx={{ minWidth: "800px" }}>
            Apply for this job
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Fill in the infromation</DialogContentText>
            <br />

            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <TextField
                  label="Full name"
                  variant="outlined"
                  name="name"
                  onChange={(e) => onChange(e)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  onChange={(e) => onChange(e)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<SaveIcon />}
                >
                  Upload Resume
                  <input
                    type="file"
                    name="myFile"
                    onChange={(e) => onChange2(e)}
                    hidden
                  />
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  name="message"
                  onChange={(e) => onChange(e)}
                  rows={3}
                />
              </Grid>
            </Grid>
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
    </>
  );
};
