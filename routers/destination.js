var {
    createDestination,
    getDestinations,
    deleteDestination,
    getAllDestinations,
    updateDestination
}=require('../controllers/destination');
var express = require('express');
var router = express.Router();

router.get ('/', getDestinations);
router.post('/', createDestination);
router.delete('/:id', deleteDestination);
router.get('/all', getAllDestinations);
router.put('/:id', updateDestination);

module.exports = router;