import mongoose from "mongoose";
import dbConnect from "../../../../lib/dbConnect";
import { Resume } from "../../../../models";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  const resume = await Resume.findOne({ _id: mongoose.Types.ObjectId(id) });

  res.status(200).json(resume);
}
