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
    enum: ["En attente", "En cours", "Rejetée", "Offre envoyée"],
    default: "En attente",
  },
  interviewDate: {
    type: Date,
    default: null,
  },
  offerUrl: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Candidature =
  models.Candidature || model("Candidature", CandidatureSchema);

export default Candidature;
