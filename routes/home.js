const express = require('express');
const router =express.Router();


const {getHomePage} = require('../controllers/admin/HomeControllers')

router.get('/', getHomePage)

module.exports = router;