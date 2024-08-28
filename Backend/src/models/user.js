import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Default email validation
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8,
        maxlength: 20,
        validate: {
            validator: function (v) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(v);
            },
            message: props => `Password must be 8-20 characters long and include at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.`
        }
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v); // Ensures the phone number is exactly 10 digits long and numeric
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    }
});

export const Users = mongoose.model('User', userSchema);
