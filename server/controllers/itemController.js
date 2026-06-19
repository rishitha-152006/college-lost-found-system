const Item = require("../models/Item");

exports.addItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json({ message: "Item Added" });
};

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.claimItem = async (req, res) => {
  const { id } = req.params;

  await Item.findByIdAndUpdate(id, {
    status: "Claimed"
  });

  res.json({ message: "Item Claimed" });
};