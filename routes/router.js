const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

router.get('/', homeController.listInventory);
router.get('/:id', homeController.getById);
router.post('/create', homeController.addNew);
router.patch('/:id', homeController.updateInventory);
router.delete('/:id', homeController.deleteFile);
router.get('/:CategoryName', homeController.searching);

module.exports = router;