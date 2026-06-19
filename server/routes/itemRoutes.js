const express = require("express");
const router = express.Router();

const {
  addItem,
  getItems,
  claimItem
} = require("../controllers/itemController");

router.post("/add", addItem);
router.get("/", getItems);
router.put("/claim/:id", claimItem);

module.exports = router;