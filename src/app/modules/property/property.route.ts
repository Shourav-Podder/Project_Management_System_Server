import express, { NextFunction, Request, Response } from 'express';
import { checkoutUserProperties, createUserProperty, deleteProperty, getPropertyOrder, orderUserProperty, updatePropertyByLawer } from './property.controller';
const router = express.Router();

router.get('/', (req:Request, res:Response, next: NextFunction)=> {
    res.send('Legal Estate server is running.');
    next();
})

router.post('/sell-property', createUserProperty)
router.get('/checkout-property', checkoutUserProperties)
router.put('/update-property-status', updatePropertyByLawer)
router.delete('/delete-property', deleteProperty)

// Order
router.post('/order-property', orderUserProperty)
router.get('/order-property', getPropertyOrder)
export default router; 