const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dataRouter = require("./router/data.router");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// Routes
app.use("/data", dataRouter);

module.exports = app;
