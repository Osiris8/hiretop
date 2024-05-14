import { Schema, model, models } from "mongoose";

const TalentExperienceSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  description: {
    type: String, // non requis
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TalentExperience =
  models.TalentExperience || model("TalentExperience", TalentExperienceSchema);

export default TalentExperience;
