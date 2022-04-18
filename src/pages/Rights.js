import React from "react";
import axios from "axios";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const Rights = () => {
  const [users, setUsers] = React.useState([]);
  const sendGetRequest = async () => {
    try {
      const response = await axios.get(
        "https://bite-mern.herokuapp.com/api/user/"
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  React.useEffect(() => {
    sendGetRequest();
  }, []);

  const handleSubmitData = (id) => {
    axios
      .put(
        `http://localhost:5000/api/user/`,
        { _id: id },
        {
          headers: { "Content-Type": "application/json" },
        }
      )
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <div>
      <Container>
        <TableContainer component={Paper} sx={{ m: 5, minWidth: "650px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Make admin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  key={user._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.name}
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      onClick={() => handleSubmitData(user._id)}
                    >
                      Make admin
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};
