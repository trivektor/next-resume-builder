import mongoose from "mongoose";
import dbConnect from "../../../../lib/dbConnect";
import { Resume } from "../../../../models";
import { renderToStaticMarkup } from "react-dom/server";
import pdf from "html-pdf";
import RenderedResume from "../../../../components/rendered-resume";

export default async function handler(req, res) {
  const { id } = req.query;

  await dbConnect();

  const resume = await Resume.findOne({ _id: mongoose.Types.ObjectId(id) });

  const html = renderToStaticMarkup(<RenderedResume resume={resume} />);

  pdf.create(html, options).toBuffer(function (err, buffer) {
    res.setHeader("Content-Disposition", `attachchment; filename=${id}.pdf`);
    res.setHeader("Content-Type", "application/pdf");
    res.send(buffer);
  });
}

const options = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
  footer: {
    height: "10mm",
  },
  type: "pdf",
  timeout: 30000,
};
