const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid"); // Import uuid

// Global user data list
const userDataList = [];

// Middleware to parse the request body as JSON
router.use(express.json());

// Route to get user data
router.get("/getusers", (req, res) => {
  res.status(200).json(userDataList);
});

// Route to delete a user by ID
router.delete("/deleteuser/:id", (req, res) => {
  const userId = req.params.id;

  // Find the index of the user with the specified ID
  const userIndex = userDataList.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    // Remove the user with the specified ID from the userDataList
    userDataList.splice(userIndex, 1);

    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// Route to add a user
router.post("/adduser", (req, res) => {
  const userData = req.body;

  // Validate data (add your own validation logic if needed)
  if (!userData.name || !userData.email || !userData.role) {
    return res.status(400).json({ error: "Invalid data" });
  }

  // Generate a unique ID using uuid
  userData.id = uuidv4();

  // Store user data in the global list
  userDataList.push(userData);

  // Respond with a success message
  res.status(200).json({ message: "User added successfully" });
});

module.exports = router;
