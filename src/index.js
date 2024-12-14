const express = require("express"); // Import express
const app = express(); // Create an express app instance

// Middleware to parse JSON requests
app.use(express.json());

// Root route
app.use("/", (req, res) => {
  res.json({ msg: "App Listen" });
});

// "/sum" route
app.use("/sum", (req, res) => {
  res.json({ msg: "2+3 = 5" });
});

// Start the server on a specified PORT or default to 8000
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
