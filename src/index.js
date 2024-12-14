const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON requests

// Root route
app.get("/", (req, res) => {
  res.json({ msg: "App Listen" });
});

// "/sum" route
app.get("/sum", (req, res) => {
  res.json({ msg: "2+3 = 5" });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
