import { Document, model, Schema } from 'mongoose';

const UserSchema = new Schema({
    userId: { type: String, required: true, unique: true, index: true },
    userName: { type: String, required: true },
    email: { type: String, required: true }
})

export interface IUser extends Document {
    userId: string;
    userName: string;
    email: string;
}

export const UserModel = model<IUser>('User', UserSchema);