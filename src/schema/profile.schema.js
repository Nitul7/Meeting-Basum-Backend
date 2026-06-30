import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true, minlength: 2, maxlength: 100 },
    bio: { type: String, maxlength: 500 },
    avatar: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
  },
  { timestamps: true }
);
export default profileSchema;