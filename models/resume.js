import mongoose from "mongoose";
const { Schema } = mongoose;

const ResumeSchema = new Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
  createdBy: String,
});

export default mongoose.models.Resume || mongoose.model("Resume", ResumeSchema);
