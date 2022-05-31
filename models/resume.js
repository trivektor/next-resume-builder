import mongoose from "mongoose";
const { Schema } = mongoose;

const IntroSchema = new Schema({
  firstname: {
    type: String,
    default: "First",
  },
  lastname: {
    type: String,
    default: "Last",
  },
  additionalName: String,
  namePronunciation: String,
  pronouns: String,
  headline: String,
  industry: String,
  email: String,
  phone: String,
  summary: String,
});

const ExperienceSchema = new Schema({
  title: String,
  employmentType: String,
  companyName: String,
  location: String,
  isCurrent: Boolean,
  startDate: String,
  endDate: String,
  industry: String,
  description: String,
});

const EducationSchema = new Schema({
  school: String,
  degree: String,
  fieldOfStudy: String,
  startDate: String,
  endDate: String,
  grade: Number,
  description: String,
});

const SkillSchema = new Schema({
  skill: String,
  description: String,
});

const ReferenceSchema = new Schema({
  fullName: String,
  company: String,
  phone: String,
  email: String,
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
    type: [EducationSchema],
    default: {},
  },
  skills: {
    type: [SkillSchema],
    default: {},
  },
  references: {
    type: [ReferenceSchema],
    default: {},
  },
});

const ResumeSchema = new Schema(
  {
    title: String,
    description: String,
    createdBy: String,
    sections: {
      type: sections,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Resume || mongoose.model("Resume", ResumeSchema);
