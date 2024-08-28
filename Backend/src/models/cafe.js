import mongoose, { Schema } from 'mongoose';

const cafeSchema = new Schema({
    Name: {
        type: String,
        required: [true, "Name is required"]
    },
    Address: {
        type: String,
        required: [true, "Address is required"]
    }
});

export const Cafe = mongoose.model('Cafe', cafeSchema, 'cafe');
