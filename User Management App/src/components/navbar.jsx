import React from "react";
import { styled } from "@mui/system";

const Navbar = () => {
  return (
    <Nav>
      <h3 className="logo">User Management App</h3>
      <ul>
        <li>
          <a href="/adduser">Add User</a>
        </li>
        <li>
          <a href="/userdata">User Data</a>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled("nav")({
  backgroundColor: "black", // Replace with your preferred background color
  padding: "10px",
  color: "#fff", // Replace with your preferred text color
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  a: {
    textDecoration: "none",
    color: "white",
  },

  ul: {
    listStyle: "none",
    display: "flex",
    gap: "10px",
    margin: "0",
    padding: "0",

    li: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
});

export default Navbar;
