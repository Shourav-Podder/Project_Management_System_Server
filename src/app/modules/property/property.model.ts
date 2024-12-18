import { model, Schema } from "mongoose";
import { IProperty } from "./property.interface";

const propertySchema = new Schema<IProperty>({
    propertyName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },
    bahtrooms: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    propertyOwner: {
        type: Schema.Types.ObjectId,
        ref: 'Users', 
        required: true
    },
    condition: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        required: true,
        default: 'pending'
    },
    rejectionMessage: {
        type: String,
        required: false,
    },
    approvedByLawerName: {
        type: String,
        required: false,
    },
    approvedByLawerEmail: {
        type: String,
        required: false,
    },
});

propertySchema.set('autoIndex', true);

const Property = model<IProperty>("Property", propertySchema);
export default Property;