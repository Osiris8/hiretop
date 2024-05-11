import { Schema, model, models } from "mongoose";

const CompanySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  companyName: {
    type: String,
    required: true,
  },
  sector: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  address: {
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
    default: Date.now,
  },
});

const Company = models.Company || model("Company", CompanySchema);

export default Company;
