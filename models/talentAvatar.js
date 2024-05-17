import { Schema, model, models } from "mongoose";

const TalentAvatarSchema = new Schema({
  userId: {
    type: String,
    ref: "User",
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

const TalentAvatar =
  models.TalentAvatar || model("TalentAvatar", TalentAvatarSchema);

export default TalentAvatar;
