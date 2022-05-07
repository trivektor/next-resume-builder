import mongoose from "mongoose";
const { Schema } = mongoose;

const IntroSchema = new Schema({
  firstname: String,
  lastname: String,
  additionalName: String,
  namePronunciation: String,
  pronouns: String,
  headline: String,
  industry: String,
});

const DateSchema = new Schema({
  month: String,
  year: Number,
});

const ExperienceSchema = new Schema({
  title: String,
  employmentType: String,
  companyName: String,
  location: String,
  isCurrent: Boolean,
  startDate: DateSchema,
  industry: String,
  description: String,
});

const EducationSchema = new Schema({
  school: String,
  degree: String,
  fieldOfStudy: String,
  startDate: DateSchema,
  endDate: DateSchema,
  grade: Number,
  description: String,
});

const sections = new Schema({
  intro: {
    type: IntroSchema,
    default: {},
  },
  experience: {
    type: [ExperienceSchema],
    default: [],
  },
  education: {
    type: EducationSchema,
    default: {},
  },
});

const ResumeSchema = new Schema({
  title: String,
  description: String,
  date: { type: Date, default: Date.now },
  createdBy: String,
  sections: {
    type: sections,
    default: {},
  },
});

export default mongoose.models.Resume || mongoose.model("Resume", ResumeSchema);
