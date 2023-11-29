// UserList.jsx
import React, { useEffect, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { fetchUsers, deleteUser } from "../api.js";
import DeleteIcon from "@mui/icons-material/Delete";

const UserList = () => {
  const [userDataList, setUserDataList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      setUserDataList(data);
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    const success = await deleteUser(userId);

    if (success) {
      const updatedData = userDataList.filter((user) => user.id !== userId);
      setUserDataList(updatedData);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userDataList.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleDeleteUser(user.id)}
                  color="secondary"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserList;
