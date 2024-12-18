import { NextFunction, Request, Response } from "express";
import { createUserPropertyToDB, deletePropertyByAdmin, getOrderProperty, getUserPropertyFromDB, orderUserPropertyToDB, updatePropertyConditionFromDB } from "./property.service";

export const createUserProperty = async (req:Request, res:Response, next: NextFunction) => {
    const data = req.body;
    try{
        const user = await createUserPropertyToDB(data)
        res.status(200).json({
            data: user
        })
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null
        })
    }
   
}

export const orderUserProperty = async (req:Request, res:Response, next: NextFunction) => {
    const data = req.body;
    try{
        const user = await orderUserPropertyToDB(data)
        res.status(200).json({
            data: user
        })
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null
        })
    }
   
}

export const getPropertyOrder = async (req:Request, res:Response, next: NextFunction) => {
    try{
        const user = await getOrderProperty()
        res.status(200).json({
            data: user
        })
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null
        })
    }
   
}



// Getting all orders
export const checkoutUserProperties = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await getUserPropertyFromDB();
        res.status(200).json({
            data: user
        });
    } catch (error) {
        console.error('Error fetching user property:', error);
        res.status(500).json({
            status: 'failed',
            data: null
        });
    }
};


export const updatePropertyByLawer = async (req: Request, res: Response, next: NextFunction) => {
   
    try {
        const userId = req?.body?.id;
        const updatedData = req.body;
        if (!userId) {
            return res.status(400).json({
                status: 'failed',
                message: 'User ID is required.'
            });
        }

        if (!updatedData || Object.keys(updatedData).length === 0) {
            return res.status(400).json({
                status: 'failed',
                message: 'Updated data is required.'
            });
        }

        // Assuming you have a function that updates the user and property based on userId
        const userProperty = await updatePropertyConditionFromDB(userId, updatedData);

        if (!userProperty) {
            return res.status(404).json({
                status: 'failed',
                message: 'Property not found for the given user ID.'
            });
        }

        // Respond with the updated property details
        res.status(200).json({
            status: 'success',
            data: userProperty
        });
    } catch (error) {
        console.error('Error updating property:', error);
        res.status(500).json({
            status: 'failed',
            message: 'Error updating property.',
            data: null
        });
    }
};



export const deleteProperty = async (req: Request, res: Response, next: NextFunction) => {
   
    try {
        const {userId} = req?.body;
        const userProperty = await deletePropertyByAdmin(userId);
        // Respond with the updated property details
        res.status(200).json({
            status: 'success',
            data: userProperty
        });
    } catch (error) {
        console.error('Error updating property:', error);
        res.status(500).json({
            status: 'failed',
            message: 'Error updating property.',
            data: null
        });
    }
};



