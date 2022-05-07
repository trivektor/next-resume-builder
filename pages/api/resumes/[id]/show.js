import dbConnect from "../../../../lib/dbConnect";
import { Resume } from "../../../../models";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  const resume = await Resume.findById(id);

  res.status(200).json(resume);
}
