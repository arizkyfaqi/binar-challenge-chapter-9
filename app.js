const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./app/db");
const detailpemain = require("./app/routes/detailpemain");

const authRouters = require("./app/routes/jwtAuth");

app.use(cors());
app.use(express.json());

app.use("/detailpemain", detailpemain);

app.use("/auth", authRouters);
// app.use("/dashboard", require("./routes/dashboard"));

module.exports = app;
