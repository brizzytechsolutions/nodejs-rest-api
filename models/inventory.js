 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const inventorySchema = new Schema({
     CategoryName: {
         type: String,
         required: true
     },
     Description: {
         type: String,
         required: true
     },
     Quantity: {
         type: Number,
         required: true
     },
     InStock:  {
         type: Boolean,
         required: true
     },
     DateReceived: {
         type: Date,
         default: Date.now()
     }
 });

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
