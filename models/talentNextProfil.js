import { Schema, model, models } from "mongoose";

const TalentNextProfilSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  level: {
    type: String, // non requis
  },
  remote: {
    type: String, // non requis
  },
  freelance: {
    type: String, // non requis
  },
  onsite: {
    type: String, // non requis
  },
  available: {
    type: String, // non requis
  },
  city: {
    type: String, // non requis
  },
  country: {
    type: String, // non requis
  },
  bio: {
    type: String, // non requis
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TalentNextProfil =
  models.TalentNextProfil || model("TalentNextProfil", TalentNextProfilSchema);

export default TalentNextProfil;
