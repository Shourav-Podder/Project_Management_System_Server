"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePropertyByAdmin = exports.updatePropertyConditionFromDB = exports.getUserPropertyFromDB = exports.getOrderProperty = exports.orderUserPropertyToDB = exports.createUserPropertyToDB = void 0;
const orderProperty_model_1 = __importDefault(require("./orderProperty.model"));
const property_model_1 = __importDefault(require("./property.model"));
const createUserPropertyToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield property_model_1.default.create(data);
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.createUserPropertyToDB = createUserPropertyToDB;
const orderUserPropertyToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(data);
        const user = yield orderProperty_model_1.default.create(data);
        console.log(user);
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.orderUserPropertyToDB = orderUserPropertyToDB;
const getOrderProperty = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield orderProperty_model_1.default.find();
        console.log(users);
        return users;
    }
    catch (error) {
        if (error instanceof Error) {
            return { error: error.message };
        }
        return { error: "An unexpected error occurred" };
    }
});
exports.getOrderProperty = getOrderProperty;
const getUserPropertyFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const properties = yield property_model_1.default.find()
            .populate({
            path: 'propertyOwner',
            select: 'name email phone address photo'
        })
            .lean()
            .exec();
        return properties;
    }
    catch (error) {
        console.error('Error fetching properties:', error);
        return error;
    }
});
exports.getUserPropertyFromDB = getUserPropertyFromDB;
const updatePropertyConditionFromDB = (propertyId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Update the property condition using the propertyId
        const property = yield property_model_1.default.findOneAndUpdate({ _id: propertyId }, // Find the property by its ID
        { $set: updatedData }, // Update the property with the new data (e.g., condition)
        { new: true } // Return the updated document
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
    }
    catch (error) {
        console.error('Error updating property:', error);
        return null;
    }
});
exports.updatePropertyConditionFromDB = updatePropertyConditionFromDB;
const deletePropertyByAdmin = (propertyId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Find and delete the property using the propertyId
        const property = yield property_model_1.default.findByIdAndDelete(propertyId)
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
    }
    catch (error) {
        console.error('Error deleting property:', error);
        return {
            status: 'failed',
            message: 'An error occurred while deleting the property',
        };
    }
});
exports.deletePropertyByAdmin = deletePropertyByAdmin;
