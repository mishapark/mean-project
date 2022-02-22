import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export const CareersList = () => {
    function createData(job, role, location) {
        return { job, role, location };
      }
      
      const rows = [
          createData("Job1", "Design", "Moscow, Russia"),
          createData("Job2", "Design", "Moscow, Russia"),
          createData("Job3", "Design", "Moscow, Russia"),
          createData("Job4", "Design", "Moscow, Russia"),
          createData("Job5", "Design", "Moscow, Russia"),
          createData("Job6", "Design", "Moscow, Russia"),
          createData("Job7", "Design", "Moscow, Russia"),
          createData("Job8", "Design", "Moscow, Russia"),
      ];
      
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Job</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>Apply</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.job}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.job}
              </TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell align='right'>
                <Button variant="contained">Apply</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
