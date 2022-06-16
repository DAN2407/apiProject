import express from 'express';
const router = express.Router();
import { updateUser, deleteUser, getUser, getAllUsers } from '../controllers/user';
import {verifyUser, verifyAdmin} from '../middleware/verifyToken';

//update user
router.put('/id', verifyUser, updateUser);
//delete user
router.delete('/id', verifyUser, deleteUser);
//get user
router.get('/id', verifyUser, getUser);
//get all users
router.put('/', verifyUser, getAllUsers);


export default router;