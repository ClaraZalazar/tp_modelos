const express = require('express');
const router = express.Router();
const { list, recomended, detail } = require('../controllers/moviesController');
const moviesController = require('../controllers/moviesController');

router.get('/', list)
router.get('/new', moviesController.new)
router.get('/recommended', recomended)
router.get('/detail/:id', detail)

module.exports = router;