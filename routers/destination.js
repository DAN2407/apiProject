var {
    createDestination,
    getDestination,
    deleteDestination,
    updateDestination
}=require('../controllers/destination');
var express = require('express');
var router = express.Router();

router.get ('/', getDestination);
router.post('/', createDestination);
router.delete('/:id', deleteDestination);
router.put('/:id', updateDestination);

module.exports = router;