import express, { NextFunction, Request, Response } from 'express';
import { createMessage, createUser, deleteUser, emailVerification, getAllMessage, getAllUser, lognUser } from './user.controller';
const router = express.Router();

router.get('/', (req:Request, res:Response, next: NextFunction)=> {
    res.send('Legal Estate server is running.');
    next();
})

router.post('/create-user', createUser)
router.post('/login-user', lognUser)
router.post('/verification-email', emailVerification)
router.get('/get-all-user', getAllUser)
router.delete('/delete-user', deleteUser)

// Contact message
router.post('/contact-message', createMessage);
router.get('/contact-message', getAllMessage);
export default router; 