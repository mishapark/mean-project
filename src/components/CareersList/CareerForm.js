import { Grid, Typography, TextField, Button } from '@mui/material'
import React from 'react'

export const CareerForm = () => {
  return (
    <>
        <Typography variant='h5'>
            Apply for this job
        </Typography>
        <Typography variant='caption'>
            Please, fill the information
        </Typography>
        <br/>
        <Grid container spacing={2} sx={{mt:2}}>
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
                    >
                    Upload Resume
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </Grid>
            <Grid item xs={6}>
            <Button
                    variant="contained"
                    component="label"
                    >
                    Upload Cover Letter
                    <input
                        type="file"
                        hidden
                    />
                </Button>
            </Grid>
            <Grid item xs={12}>
                <TextField label="Message" variant="outlined" fullWidth multiline rows={3} />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained">Apply</Button>
            </Grid>
        </Grid>
    </>
  )
}
