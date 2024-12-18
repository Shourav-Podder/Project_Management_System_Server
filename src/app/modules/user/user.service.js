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
exports.deleteUserController = exports.getUsers = exports.getUserForLogin = exports.getContact = exports.createMessageToDB = exports.createUserToDB = void 0;
const message_model_1 = __importDefault(require("./message.model"));
const user_model_1 = __importDefault(require("./user.model"));
const createUserToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.create(data);
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.createUserToDB = createUserToDB;
const createMessageToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield message_model_1.default.create(data);
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.createMessageToDB = createMessageToDB;
const getContact = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield message_model_1.default.find();
        return users;
    }
    catch (error) {
        if (error instanceof Error) {
            return { error: error.message };
        }
        return { error: "An unexpected error occurred" };
    }
});
exports.getContact = getContact;
const getUserForLogin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    try {
        const user = yield user_model_1.default.findOne({ email });
        if (!user) {
            return { error: "User not found" };
        }
        if (password !== user.password) {
            return { error: "Invalid password" };
        }
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.getUserForLogin = getUserForLogin;
const getUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.find();
        if (!users || users.length === 0) {
            return { error: "No users found" };
        }
        return users;
    }
    catch (error) {
        if (error instanceof Error) {
            return { error: error.message }; // Safely access the error message.
        }
        return { error: "An unexpected error occurred" }; // Fallback for unknown error types.
    }
});
exports.getUsers = getUsers;
const deleteUserController = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield user_model_1.default.findByIdAndDelete(userId);
        return deletedUser;
    }
    catch (error) {
        return error;
    }
});
exports.deleteUserController = deleteUserController;
// export const getUserForLogin = async (data: IUser) => {
//     const {email, password} = data
//     try{
//         const user = await User.findOne({email: email});
//         if(user){
//             const
//         } 
//         return user;
//     }catch(error){
//         return error; 
//     }
// }
