const router = require('express').Router();

const Brand = require('../models/brand');

router.get('/', (req, res) => {
    res.render('index', { 
        brands: Brand 
    });
});

router.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params;
    const index = Number(arrayIndex);
    res.send(Brand[index]);
});

module.exports = router;

