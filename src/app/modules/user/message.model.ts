import { model, Schema } from "mongoose";
import { IMessage } from "./user.interface";

const messageSchema = new Schema<IMessage>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
   
    message: {
        type: String,
        required: true
    }
});

messageSchema.set('autoIndex', true);

const Message = model<IMessage>("Message", messageSchema);
export default Message;
