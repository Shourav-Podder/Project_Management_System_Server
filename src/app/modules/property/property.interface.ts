import { ObjectId } from 'mongoose';

export interface IProperty {
    propertyName: string;
    price: string;
    location: string;
    bedrooms: string;
    bahtrooms: string;
    size: string;
    year: string;
    propertyType: string;
    status: string;
    description: string;
    contactNumber: string;
    image: string[];
    propertyOwner: ObjectId;
    condition: string;
    rejectionMessage: string;
    approvedByLawerName: string;
    approvedByLawerEmail: string;

}









export interface IOrder {
    propertyName: string;
    price: string;
    location: string;
    bedrooms: string;
    bahtrooms: string;
    size: string;
    year: string;
    propertyType: string;
    status: string;
    description: string;
    contactNumber: string;
    image: string[]; // Array of image URLs
    propertyOwner: {
        _id: string;
        name: string;
        email: string;
        phone: number;
        address: string;
        role?: string; // Optional if role exists in owner
    };
    condition: "pending" | "approved" | "rejected";
    rejectionMessage?: string; // Optional
    approvedByLawerName?: string; // Optional
    approvedByLawerEmail?: string; // Optional
    trxId?: string; // Optional for transactions
    user?: {
        data: {
            _id: string;
            name: string;
            email: string;
            phone: number;
            address: string;
            role: string; // E.g., "Seller"
            photo?: string; // Optional profile image
            password?: string; // Optional if not needed
            lawerCode?: string; // Optional for lawyer identification
        };
    };
}
