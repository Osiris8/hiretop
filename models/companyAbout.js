import { Schema, model, models } from "mongoose";

const CompanyAboutSchema = new Schema({
  userId: {
    type: String,

    required: true,
  },
  companyAbout: {
    type: String,

    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now, // Valeur par défaut pour la date de création
  },
});

const CompanyAbout =
  models.CompanyAbout || model("CompanyAbout", CompanyAboutSchema);

export default CompanyAbout;
