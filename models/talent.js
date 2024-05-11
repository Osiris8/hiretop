import { Schema, model, models } from "mongoose";

const TalentSchema = new Schema({
  userId: {
    type: String,

    required: true,
  },
  firstname: {
    type: String,

    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Valeur par défaut pour la date de création
  },
});

const Talent = models.Talent || model("Talent", TalentSchema);

export default Talent;
