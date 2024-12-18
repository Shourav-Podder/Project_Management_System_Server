"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
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
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: Number,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: false
        },
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
    trxId: {
        type: String,
        required: false,
    },
    user: {
        data: {
            _id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            role: {
                type: String,
                required: true
            },
            photo: {
                type: String,
                required: false
            },
            password: {
                type: String,
                required: false
            },
            lawerCode: {
                type: String,
                required: false
            },
        },
    },
});
orderSchema.set('autoIndex', true);
const Order = (0, mongoose_1.model)("Order", orderSchema);
exports.default = Order;
