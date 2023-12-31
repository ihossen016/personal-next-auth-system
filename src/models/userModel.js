const { mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username."],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a email."],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password."],
    },
    isVarified: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiary: Date,
    varifyToken: String,
    varifyTokenExpiary: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
