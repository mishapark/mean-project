import { Button, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { CareerForm } from '../components/CareersList/CareerForm'

export const Career = () => {
  return (
    <Container maxWidth="lg" sx={{mt:6}}>
        <Grid container spacing={2}>
            <Grid item xs={10}>
            <Typography variant='h3'>
            UX /UI Designer
            </Typography>
            <Typography variant="subtitle2">
            Moscow, Russia · Full time
            </Typography>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained">Apply</Button>
            </Grid>
            <Grid item xs={12}>
                <Divider></Divider>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">
                What we’re looking for
                </Typography>
                <Typography variant="subtitle1">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5">
                Why to apply
                </Typography>
                <Typography variant="subtitle1">
                We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider></Divider>
            </Grid>
            <Grid item xs={12}>
                <CareerForm></CareerForm>
            </Grid>
        </Grid>
        <br></br>
    </Container>
  )
}
