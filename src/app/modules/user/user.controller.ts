import { NextFunction, Request, Response } from "express";
import { createMessageToDB, createUserToDB, deleteUserController, getContact, getUserForLogin, getUsers } from "./user.service";
import { sendEmail } from "./user.mail";
import { gettingOTP } from "../helper/utils";

export const createUser = async (req:Request, res:Response, next: NextFunction) => {
    const data = req.body;
    try{
        const user = await createUserToDB(data)
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



export const lognUser = async (req:Request, res:Response, next: NextFunction) => {
    const data = req.body;
    try{
        const user = await getUserForLogin(data)
        res.status(200).json({
            status: 'success',
            data: user
        })
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null
        })
    }
   
}

export const emailVerification = async (req: Request, res: Response) => {
    const {email} = req.body;
    try{
        const theOTP = gettingOTP();
        await sendEmail(email, 'Verify your email', `Your OTP is ${theOTP}`);
        return res.send({otp: theOTP})
    }catch(error){
        return error;
    }
}

export const getAllUser = async (req:Request, res:Response, next: NextFunction) => {
   
    try{
        const user = await getUsers()
        res.status(200).json({
            status: 'success',
            data: user
        })
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null
        })
    }
}


export const deleteUser = async (req:Request, res:Response, next: NextFunction) => {
   const {userId} = req.body; 
    try{
        const user = await deleteUserController(userId)
        res.status(200).json({
            status: 'success',
            data: user
        })
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null
        })
    }
}


export const createMessage = async (req:Request, res:Response, next: NextFunction) => {
    const data = req.body;
    try{
        const user = await createMessageToDB(data)
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


export const getAllMessage = async (req:Request, res:Response, next: NextFunction) => {
    try{
        const user = await getContact()
        res.status(200).json({
            status: 'success',
            data: user
        })
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null
        })
    }
}

