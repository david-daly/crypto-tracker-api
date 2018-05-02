import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    userId: { type: String, required: true, unique: true, index: true },
    userName: { type: String, required: true },
    email: { type: String, required: true }
})

let UserModel = mongoose.model('User', UserSchema);

UserModel.getAll = () => {
    return UserModel.find({});
}

UserModel.create = (newuser) => {
    return newuser.save();
}

export default UserModel;