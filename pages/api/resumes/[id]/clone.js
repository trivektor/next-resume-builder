import mongoose from "mongoose";
import dbConnect from "../../../../lib/dbConnect";
import { Resume } from "../../../../models";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  const session = await getSession({ req });
  const resume = await Resume.findOne({ _id: mongoose.Types.ObjectId(id) });
  const clonedSections = [
    "education",
    "experience",
    "skills",
    "references",
  ].reduce((acc, section) => {
    acc[section] = [...resume.get(`sections.${section}`)].map((item) => {
      const newItem = item.toObject();

      delete newItem._id;

      return newItem;
    });

    return acc;
  }, {});

  await Resume.create({
    title: resume.get("title"),
    description: resume.get("description"),
    sections: clonedSections,
    createdBy: session.user.email,
  });

  res.status(200).json({});
}
