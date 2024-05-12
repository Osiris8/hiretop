import { Schema, model, models } from "mongoose";

const TalentSocialSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  facebook: {
    type: String, // non requis
  },
  github: {
    type: String, // non requis
  },
  twitter: {
    type: String, // non requis
  },
  linkedin: {
    type: String, // non requis
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TalentSocial =
  models.TalentSocial || model("TalentSocial", TalentSocialSchema);

export default TalentSocial;
