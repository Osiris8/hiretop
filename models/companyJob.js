import { Schema, model, models } from "mongoose";

const CompanyJobSchema = new Schema({
  userId: {
    type: String,

    required: true,
  },
  title: {
    type: String,

    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  profil: {
    type: String,
    required: true,
  },
  interview: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  contract: {
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

const CompanyJob = models.CompanyJob || model("CompanyJob", CompanyJobSchema);

export default CompanyJob;
