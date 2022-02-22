import React, { useState } from 'react'
import { Container, Typography, Stack } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid } from '@mui/material';
import { Chip } from '@mui/material';
import { CareersList } from '../components/CareersList/CareersList';

export const Careers = () => {
    const [roles, setRoles] = useState('');
    const handleChange = (event) => {
        setRoles(event.target.value);
      };
      const [location, setLocation] = useState('');
    const handleChangeLocation = (event) => {
        setLocation(event.target.value);
      };
  return (
    <Container maxWidth="lg">
        <Typography variant="h2" sx={{mt:3}}>
            Work with us
        </Typography>
        <Typography variant="subtitle1">
        Work hard with highly motivated team of talented people and great teammates to launch
perfectly crafted products you will love.
        </Typography>
        <img src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80' style={{maxWidth:"1200px"}}>
        </img>
        <br></br>
        <br/>
        <Typography variant="caption" sx={{mt:5}}>
        OPEN POSITIONS
        </Typography>
        <Typography variant="h4">
        Current job openings
        </Typography>
        <Grid container spacing={2} sx={{mt:2}}>
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
                <Typography variant="h6">
                    Design
                </Typography>
            </Grid>
            <Grid item xs={1}>
                <Chip label="8 Openings" color="secondary" />
            </Grid>
            <Grid item xs={12}>
                <CareersList></CareersList>
            </Grid>
        </Grid>
        <br></br>
    </Container>
  )
}
