const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');

const { requireLogin, requireAdmin} = require('../middlewares/authMiddleware.js');
const { createProductController,
        getAllProductsController,
        getSingleProductController,
        productPhotoController,
        deleteProductController,
        updateProductController } = require('../controllers/productController.js');

// create product
router.post('/create-product', requireLogin, requireAdmin, formidable(), createProductController);

// get all products
router.get('/all-products', getAllProductsController);

// get single product
router.get('/single-product/:slug', getSingleProductController);

// get product photo
router.get('/product-photo/:pid', productPhotoController);

// delete product
router.delete('/delete-product/:slug', requireLogin, requireAdmin, deleteProductController);

// update product
router.put('/update-product/:pid', requireLogin, requireAdmin, formidable(), updateProductController);


module.exports = router;