const express = require("express");
const cors = require("cors");
const path = require("node:path");
const rootPage = require(path.resolve(__dirname, "routes/index"));
const port = process.env.PORT || 3001;
const app = express();
require(path.resolve(__dirname, "config/database"));

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/", rootPage);

app.listen(port, () => {
  console.log(`
listen on port: ${port}
  `);
});
