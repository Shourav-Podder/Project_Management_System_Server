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
exports.getAllMessage = exports.createMessage = exports.deleteUser = exports.getAllUser = exports.emailVerification = exports.lognUser = exports.createUser = void 0;
const user_service_1 = require("./user.service");
const user_mail_1 = require("./user.mail");
const utils_1 = require("../helper/utils");
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const user = yield (0, user_service_1.createUserToDB)(data);
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
exports.createUser = createUser;
const lognUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const user = yield (0, user_service_1.getUserForLogin)(data);
        res.status(200).json({
            status: 'success',
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
exports.lognUser = lognUser;
const emailVerification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const theOTP = (0, utils_1.gettingOTP)();
        yield (0, user_mail_1.sendEmail)(email, 'Verify your email', `Your OTP is ${theOTP}`);
        return res.send({ otp: theOTP });
    }
    catch (error) {
        return error;
    }
});
exports.emailVerification = emailVerification;
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.getUsers)();
        res.status(200).json({
            status: 'success',
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
exports.getAllUser = getAllUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    try {
        const user = yield (0, user_service_1.deleteUserController)(userId);
        res.status(200).json({
            status: 'success',
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
exports.deleteUser = deleteUser;
const createMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const user = yield (0, user_service_1.createMessageToDB)(data);
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
exports.createMessage = createMessage;
const getAllMessage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, user_service_1.getContact)();
        res.status(200).json({
            status: 'success',
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
exports.getAllMessage = getAllMessage;
