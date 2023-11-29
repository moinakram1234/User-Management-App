// server.js
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const Cors = require("cors");

const app = express();
const PORT = 5000;
app.use(Cors());
app.use(bodyParser.json());

// Use the user routes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
