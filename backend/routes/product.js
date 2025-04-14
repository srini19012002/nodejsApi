const express=require('express');
const { getProducts, getSingleProducts } = require('../controllers/productContollers');
const router=express.Router();

router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProducts);

module.exports=router;