const express = require('express');
const router =express.Router();

const {getAddProductPage, postAddProductPage} = require('../controllers/admin/ProductController')



router.get('/add',getAddProductPage)

router.post('/add',postAddProductPage)


module.exports = router;