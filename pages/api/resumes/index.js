import { Resume } from "../../../models";
import dbConnect from "../../../lib/dbConnect";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });

  const resumes = await Resume.find({
    createdBy: session.user.email,
  });

  res.status(200).json({ resumes });
}
