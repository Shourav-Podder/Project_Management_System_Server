import Message from "./message.model";
import { IMessage, IUser } from "./user.interface";
import User from "./user.model";
import bcrypt from 'bcrypt';

export const createUserToDB = async (data: IUser) => {
    try{
        const user = await User.create(data); 
        return user;
    }catch(error){
        return error; 
    }
}


export const createMessageToDB = async (data: IMessage) => {
  try{
      const user = await Message.create(data);
      return user;
  }catch(error){
      return error; 
  }
}

export const getContact = async () => { 
  try {
    const users = await Message.find();
    return users;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message }; 
    }
    return { error: "An unexpected error occurred" };
  }
};



export const getUserForLogin = async (data: IUser) => { 
  const { email, password } = data;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return { error: "User not found" };
    }
    if (password !== user.password) {
      return { error: "Invalid password" };
    }
    return user;
  } catch (error) {
    return error;
  }
};











export const getUsers = async () => { 
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return { error: "No users found" };
    }
    return users;
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message }; // Safely access the error message.
    }
    return { error: "An unexpected error occurred" }; // Fallback for unknown error types.
  }
};


export const deleteUserController = async (userId: string) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {   
    return error
  }
};




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