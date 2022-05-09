import dbConnect from "../../../../lib/dbConnect";
import { Resume } from "../../../../models";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  const resume = await Resume.findById(id);
  const { field, value } = req.body;

  const response = await Resume.updateOne(
    { _id: id },
    {
      $set: {
        [field]: value,
      },
    }
  );

  res.status(200).json(response);
}
