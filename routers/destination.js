var {
    createDestination,
    getDestination,
    deleteDestination,
    updateDestination,
    getAllDestinations,
} = require('../controllers/destination');
var express = require('express');
var router = express.Router();

router.get ('/:name', getDestination);
router.get ('/', getAllDestinations);
router.post('/', createDestination);
router.delete('/:destination', deleteDestination);
router.put('/:destination', updateDestination);

module.exports = router;