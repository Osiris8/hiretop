// models/Candidature.js
import { Schema, model, models } from "mongoose";

const CandidatureSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  cvUrl: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Submitted", // Submitted, In Review, Accepted, Rejected
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Candidature =
  models.Candidature || model("Candidature", CandidatureSchema);

export default Candidature;
