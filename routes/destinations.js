import express from 'express';
const router = express.Router();

import { createDestination } from '../controllers/destination';
import { getDestinations } from '../controllers/destination';
import { deleteDestination } from '../controllers/destination';
import { getAllDestinations } from '../controllers/destination';
import { updateDestination } from '../controllers/destination';

router.post('/', createDestination);
router.get('/', getDestinations);
router.delete('/:id', deleteDestination);
router.get('/all', getAllDestinations);
router.put('/:id', updateDestination);

export default router;