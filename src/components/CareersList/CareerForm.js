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

export const CareerForm = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <form>
          <DialogTitle sx={{ minWidth: "800px" }}>
            Apply for this job
          </DialogTitle>
          <DialogContent>
            <DialogContentText>Fill in the infromation</DialogContentText>
            <br />
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12}>
                <TextField label="Full name" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email" variant="outlined" fullWidth />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  component="label"
                  startIcon={<SaveIcon />}
                >
                  Upload Resume
                  <input type="file" hidden />
                </Button>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained">Apply</Button>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() => {
                handleClose();
                window.location.reload(false);
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
