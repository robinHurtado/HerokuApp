import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		minlength: [7, "Username must be 7 characters"]
	},
	password: {
		type: String,
		required:true,
		minlength: [8, "Password must be 8 characters"]
	}
});

// Write some encryption for password

const User = mongoose.model("User", userSchema);
export default User;