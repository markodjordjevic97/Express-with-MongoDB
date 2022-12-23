
const router = require('express').Router();

const adminController = require('../controllers/admin');

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.put('/edit-product', adminController.postEditProduct);

router.delete('/delete-product', adminController.postDeleteProduct);

module.exports = router;