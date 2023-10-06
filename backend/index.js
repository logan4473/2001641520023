require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const axios = require("axios");
const token = process.env.TOKEN;
const algos = require("./models");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

app.get("/", (req, res) => {
  res.send("Welcome to Trainwala API 😊");
});

app.get("/trains", (req, res) => {
  axios
    .get("http://20.244.56.144/train/trains")
    .then(({ data }) => {
      if (data.message) res.send({ message: "Expired" });
      data = algos.fiterTrains(data);
      data = algos.sortTrains(data);
      res.json({ data });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ Error: err });
    });
  res.status(500).json({ message: "Why are you here" });
});

app.get("/train/:id", (req, res) => {
  axios
    .get(`http://20.244.56.144/train/${req.params.id}`)
    .then(({ data }) => {
      if (data.message) res.send({ message: "Expired" });
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ Error: err });
    });
  res.status(500).json({ message: "Why are you here" });
});

app.listen(port, () => {
  console.log(`Server Running on Port : ${port}`);
});
