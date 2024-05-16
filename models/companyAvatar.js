import { Schema, model, models } from "mongoose";

const CompanyAvatarSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CompanyAvatar =
  models.CompanyAvatar || model("CompanyAvatar", CompanyAvatarSchema);

export default CompanyAvatar;
