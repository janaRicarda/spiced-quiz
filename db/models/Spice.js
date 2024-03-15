import mongoose from "mongoose";
import "./Spice";
const { Schema } = mongoose;

const spiceSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const Spice = mongoose.models.Spice || mongoose.model("Spice", spiceSchema);

export default Spice;
