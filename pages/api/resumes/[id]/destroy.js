import dbConnect from "../../../../lib/dbConnect";
import { Resume } from "../../../../models";

export default async function handler(req, res) {
  const { id } = req.query;

  await Resume.deleteOne({ _id: id });

  res.status(200).json({});
}
