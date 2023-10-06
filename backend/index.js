const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Welcome to Trainwala API 😊");
});

app.listen(port, () => {
  console.log(`Server Running on Port : ${port}`);
});
