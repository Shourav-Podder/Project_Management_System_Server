"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gettingOTP = void 0;
const gettingOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    return otp;
};
exports.gettingOTP = gettingOTP;
