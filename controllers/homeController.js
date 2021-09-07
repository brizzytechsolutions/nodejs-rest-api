const { mongoose, Model } = require("mongoose");
const Inventory = require("../models/inventory");
var ObjectId = require('mongodb').ObjectID;

const listInventory = async (req, res) => {
  try {
    const list = await Inventory.find();
    res.json(list);
  } catch (error) {
    res.json({ message: error });
  }
};

const getById = async (req, res) => {
  try {
  const myId = await Inventory.findById(req.params.id).exec();
    res.json(myId);
  } catch (error) {
    res.json({ message: error });
  }
};

const addNew = async (req, res) => {
  const data = await new Inventory({
    CategoryName: req.body.CategoryName,
    Description: req.body.Description,
    Quantity: req.body.Quantity,
    InStock: req.body.InStock,
    DateReceived: req.body.DateReceived,
  });

  try {
    const didata = await  data.save();
    res.json(didata);
  } catch (error) {
    res.json({ message: "Failed to add" });
  }
};

const updateInventory = async (req, res) => {
  try {
    const edit = await Inventory.findByIdAndUpdate(
      req.params.id, {
         CategoryName: req.body.CategoryName,
         Description: req.body.Description,
         Quantity: req.body.Quantity,
         InStock: req.body.InStock,
         DateReceived: req.body.DateReceived
      }, { new: true }
    );
    res.json(edit);
  } catch (error) {
    res.json({ message: error });
  }
};

const deleteFile = async (req, res) => {
  try {
    const removeFile = await Inventory.findByIdAndRemove(req.params.id);
    res.json(removeFile);
  } catch (error) {
    res.json({ message: error });
  }
};

const searching = async (req, res) => {
  try {
    const lina = await Inventory.find({ CategoryName: req.params.CategoryName });
    res.json(lina);
  } catch (error) {
    res.json({message: error});
  }
}

module.exports = {
  listInventory,
  getById,
  addNew,
  updateInventory,
  deleteFile,
  searching
};
