import dbConnect from "../../../lib/dbConnect";
import { Resume } from "../../../models";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "DELETE": {
      const { id } = req.query;

      await Resume.deleteOne({ _id: id });

      break;
    }
  }

  res.status(200).json({});
}
