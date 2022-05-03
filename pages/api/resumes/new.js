import dbConnect from "../../../lib/dbConnect";
import { Resume } from "../../../models";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();

  const session = await getSession({ req });

  const resume = await Resume.create({
    title: req.body.title,
    description: req.body.description,
    createdBy: session.user.email,
  });

  res.status(200).json(resume);
}
