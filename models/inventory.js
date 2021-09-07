 const mongoose = require('mongoose');

 const inventorySchema = mongoose.Schema({
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

module.exports = mongoose.model('Inventory', inventorySchema);;
