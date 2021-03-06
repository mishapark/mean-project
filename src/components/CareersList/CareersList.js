import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";

export const CareersList = ({ rows, search }) => {
  const [id, setId] = React.useState({});
  const handleDelete = (newId) => {
    setId({
      id: newId,
    });
    axios.delete("https://bite-mern.herokuapp.com/api/jobs/", id, {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
  };

  const [user, setUser] = React.useState({
    role: localStorage.getItem("role"),
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          {user.role === "Admin" ? (
            <TableRow>
              <TableCell>Job</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Apply</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          ) : (
            <TableRow>
              <TableCell>Job</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Apply</TableCell>
            </TableRow>
          )}
        </TableHead>
        {user.role === "Admin" ? (
          <TableBody>
            {rows
              .filter((s) =>
                s.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link to={`/careers/${row._id}`}>{row.name}</Link>
                  </TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>
                    <Link to={`/careers/${row._id}`}>
                      <Button variant="contained">Apply</Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(row._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        ) : (
          <TableBody>
            {rows
              .filter((s) =>
                s.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Link to={`/careers/${row._id}`}>{row.name}</Link>
                  </TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.location}</TableCell>
                  <TableCell>
                    <Link to={`/careers/${row._id}`}>
                      <Button variant="contained">Apply</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};
