const express = require("express");
const moment = require("moment-timezone");
const userName = require("../models/user");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allUsers = await userName.find();
    res.json(allUsers);
  } catch (err) {
    res.json({ err });
  }
});

router.post("/", async (req, res) => {
  const spNow = moment.tz("America/Sao_Paulo");
  const { name } = req.body;

  try {
    const User = await userName.create({
      name,
      createdAt: spNow.format("DD-MM-YYYY HH:mm:ss"),
    });
    res.json({ get: "GET", User }).status(200);
  } catch (err) {
    res.json(err);
  }
});

router.put("/:id", async (req, res) => {
  const { name, paid } = req.body;
  try {
    const User = await userName.findByIdAndUpdate(
      req.params.id,
      {
        name,
        paid,
      },
      { new: true }
    );
    res.status(200).json(User);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const User = await userName.deleteOne({ _id: req.params.id });
    res.status(200).json(User);
  } catch (err) {
    res.json(err);
  }
});
module.exports = router;
