import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  selectedFile: String,
  status: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const UserSchema = mongoose.model("UserSchema", userSchema);

export default UserSchema;
