import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true },
    email: {type: String, required: true, unique: true},
    phoneNumber: {type: Number, required: true, unique: true},
    isPodcaster: {type: String, required: true },
    message: {type: String},
    date: {type: Date, default: Date.now()}
});

export const UserModel = mongoose.model('users', UserSchema);
