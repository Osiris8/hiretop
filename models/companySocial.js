import { Schema, model, models } from "mongoose";

const CompanySocialSchema = new Schema({
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
  instagram: {
    type: String, // non requis
  },
  youtube: {
    type: String, // non requis
  },
  tiktok: {
    type: String, // non requis
  },
  website: {
    type: String, // non requis
  },
  other: {
    type: String, // non requis
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CompanySocial =
  models.CompanySocial || model("CompanySocial", CompanySocialSchema);

export default CompanySocial;
