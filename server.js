const express = require("express");
const app = express();

const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`This server is up and running on port ${port}`);
});
