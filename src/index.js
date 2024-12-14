const express = require("express"); // Correct spelling of 'express'
const app = express(); // No need for 'new' with express

app.use(express.json()); // Missing semicolon (optional but good practice)

app.use("/", (req, res) => {
  res.json({ msg: "App Listen" }); // Missing semicolon
});
app.use("/sum", (req, res) => {
  res.json({ msg: "2+3 = 5" }); // Missing semicolon
});

app.listen(process.env.PORT || 8000, () => {
  // Missing a comma between the port number and the callback function
  console.log(`App Listen on ${process.env.PORT || 8000}`);
});
