const express = require('express');
const router = express.Router();
const controller = require('../../controllers/v1/user-controller');

router.get('/:id', controller.read);

router.post('/', (req, res, next) => {
    res.send('ok');
});

router.put('/', (req, res, next) => {
    res.send('ok');
});

router.delete('/', (req, res, next) => {
    res.send('ok');
});

module.exports = router;