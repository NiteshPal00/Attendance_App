import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    default: "client",
  },
  userContact: {
    type: Number,
    required: true,
  },
  createdAT: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: Number,
    default: 1,
  },
});

export default mongoose.model("users", userSchema);
