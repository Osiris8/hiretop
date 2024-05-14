import { Schema, model, models } from "mongoose";

const TalentSkillSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  skill: {
    type: String, // non requis
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TalentSkill =
  models.TalentSkill || model("TalentSkill", TalentSkillSchema);

export default TalentSkill;
