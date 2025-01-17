import { Schema, model, models } from "mongoose";

const StatusSchema = new Schema({
  userId: {
    // Type de l'ID de l'utilisateur (assumant qu'il s'agit d'un ObjectID)
    type: String, // Type de l'ID de l'utilisateur (assumant qu'il s'agit d'un ObjectID)

    required: true,
  },
  typeOfProfile: {
    type: String, // Type de l'ID de l'utilisateur (assumant qu'il s'agit d'un ObjectID)

    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Valeur par défaut pour la date de création
  },
});

const Status = models.Status || model("Status", StatusSchema);

export default Status;
