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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProperty = exports.updatePropertyByLawer = exports.checkoutUserProperties = exports.getPropertyOrder = exports.orderUserProperty = exports.createUserProperty = void 0;
const property_service_1 = require("./property.service");
const createUserProperty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const user = yield (0, property_service_1.createUserPropertyToDB)(data);
        res.status(200).json({
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'failed',
            data: null
        });
    }
});
exports.createUserProperty = createUserProperty;
const orderUserProperty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const user = yield (0, property_service_1.orderUserPropertyToDB)(data);
        res.status(200).json({
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'failed',
            data: null
        });
    }
});
exports.orderUserProperty = orderUserProperty;
const getPropertyOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, property_service_1.getOrderProperty)();
        res.status(200).json({
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'failed',
            data: null
        });
    }
});
exports.getPropertyOrder = getPropertyOrder;
// Getting all orders
const checkoutUserProperties = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, property_service_1.getUserPropertyFromDB)();
        res.status(200).json({
            data: user
        });
    }
    catch (error) {
        console.error('Error fetching user property:', error);
        res.status(500).json({
            status: 'failed',
            data: null
        });
    }
});
exports.checkoutUserProperties = checkoutUserProperties;
const updatePropertyByLawer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.id;
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
        const userProperty = yield (0, property_service_1.updatePropertyConditionFromDB)(userId, updatedData);
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
    }
    catch (error) {
        console.error('Error updating property:', error);
        res.status(500).json({
            status: 'failed',
            message: 'Error updating property.',
            data: null
        });
    }
});
exports.updatePropertyByLawer = updatePropertyByLawer;
const deleteProperty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req === null || req === void 0 ? void 0 : req.body;
        const userProperty = yield (0, property_service_1.deletePropertyByAdmin)(userId);
        // Respond with the updated property details
        res.status(200).json({
            status: 'success',
            data: userProperty
        });
    }
    catch (error) {
        console.error('Error updating property:', error);
        res.status(500).json({
            status: 'failed',
            message: 'Error updating property.',
            data: null
        });
    }
});
exports.deleteProperty = deleteProperty;
