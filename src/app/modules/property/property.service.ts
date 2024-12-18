import Order from "./orderProperty.model";
import { IOrder, IProperty } from "./property.interface";
import Property from "./property.model";
import bcrypt from 'bcrypt';

export const createUserPropertyToDB = async (data: IProperty) => {
    try {
        const user = await Property.create(data);
        return user;
    } catch (error) {
        return error;
    }
}

export const orderUserPropertyToDB = async (data: IOrder) => {
    try {
        console.log(data); 
        const user = await Order.create(data);
        console.log(user); 
        return user;
    } catch (error) {
        return error;
    }
}


export const getOrderProperty = async () => {
    try {
        const users = await Order.find();
        console.log(users); 
        return users;
    } catch (error) {
        if (error instanceof Error) {
            return { error: error.message };
        }
        return { error: "An unexpected error occurred" };
    }
};



export const getUserPropertyFromDB = async () => {
    try {
        const properties = await Property.find()
            .populate({
                path: 'propertyOwner',
                select: 'name email phone address photo'
            })
            .lean()
            .exec();
        return properties;
    } catch (error) {
        console.error('Error fetching properties:', error);
        return error;
    }
};



export const updatePropertyConditionFromDB = async (propertyId: string, updatedData: object) => {
    try {
        // Update the property condition using the propertyId

        const property = await Property.findOneAndUpdate(
            { _id: propertyId },  // Find the property by its ID
            { $set: updatedData },  // Update the property with the new data (e.g., condition)
            { new: true }  // Return the updated document
        )
            .populate({
                path: 'propertyOwner',
                select: 'name email phone address photo'
            })
            .exec();

        if (!property) {
            console.error('Property not found for the given propertyId');
            return null;
        }
        console.log(property);
        return property;
    } catch (error) {
        console.error('Error updating property:', error);
        return null;
    }
};



export const deletePropertyByAdmin = async (propertyId: string) => {
    try {
        // Find and delete the property using the propertyId
        const property = await Property.findByIdAndDelete(propertyId)
            .populate({
                path: 'propertyOwner',
                select: 'name email phone address photo',
            })
            .exec();

        if (!property) {
            console.error('Property not found for the given propertyId');
            return {
                status: 'failed',
                message: 'Property not found',
            };
        }

        return {
            status: 'success',
            message: 'Property deleted successfully',
            data: property, // Return the deleted property's details if needed
        };
    } catch (error) {
        console.error('Error deleting property:', error);
        return {
            status: 'failed',
            message: 'An error occurred while deleting the property',
        };
    }
};
