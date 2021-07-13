const Inventory = require("../models/inventory");

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
    const id = await Inventory.findById(req.params.id);
    res.json(id);
  } catch (error) {
    res.json({ message: error });
  }
};

const addNew = async (req, res) => {
  const bupi = await new Inventory({
    CategoryName: req.body.CategoryName,
    Description: req.body.Description,
    Quantity: req.body.Quantity,
    InStock: req.body.InStock,
    DateReceived: req.body.DateReceived,
  });

  try {
    const ledata = await bupi.save();
    res.json(ledata);
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
    // const queryParam = await req.query;
    // res.json(queryParam);
    const lina = await Inventory.find({ CategoryName: req.params.CategoryName });
    res.json(lina);
    // const batla = await Inventory.find({ CategoryName: req.query});
    // res.json(batla);
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
