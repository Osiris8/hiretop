import { Schema, model, models } from "mongoose";

const CompanySchema = new Schema({
  userId: {
    type: String,

    required: true,
  },
  company: {
    type: String,

    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  position: {
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

const Company = models.Company || model("Company", CompanySchema);

export default Company;
