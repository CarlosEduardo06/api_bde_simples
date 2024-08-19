const express = require("express");
const cors = require("cors");
const path = require("node:path");
const rootPage = require(path.resolve(__dirname, "routes/index"));
const port = process.env.PORT || 3000;
require(path.resolve(__dirname, "config/database"));
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/", rootPage);
