import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const roles = ["Admin", "User", "Guest"];

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      email: formData.email.trim() === "" ? "Email is required" : "",
      role: formData.role.trim() === "" ? "Role is required" : "",
    };

    const errorMessages = Object.values(newErrors)
      .filter((error) => error !== "")
      .join("\n");

    if (errorMessages !== "") {
      toast(errorMessages, { type: "error" });
      return;
    }

    try {
      // Make a POST request to the server (replace 'http://localhost:5000' with your server endpoint)
      const response = await fetch("http://localhost:5000/api/User/adduser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast("Form submitted successfully");
        // Optionally, reset the form after successful submission
        setFormData({
          name: "",
          email: "",
          role: "",
        });
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        select
        label="Role"
        variant="outlined"
        fullWidth
        margin="normal"
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        <MenuItem value="" disabled>
          Select Role
        </MenuItem>
        {roles.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </TextField>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      <ToastContainer />
    </form>
  );
};

export default UserForm;
