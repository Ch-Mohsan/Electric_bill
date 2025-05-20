const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');


router.post('/add', billController.addBill);
router.get('/getall', billController.getBill);
router.get('/getbyid/:id', billController.getBillById);
router.put('/updatebyid/:id', billController.updateBill);
router.delete('/deletebyid/:id', billController.deleteBill);

module.exports = router;
