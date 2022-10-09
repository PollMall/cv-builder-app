import * as Yup from 'yup';

export const titleSchema = Yup.string().required('Field required').default('');
export const fieldSchema = Yup.string().required('Field required').default('');
export const fullNameSchema = Yup.string().required('Field required').default('');
export const emailSchema = Yup.string().required('Field required').email('Field not valid').default('');
export const phoneSchema = Yup.string().required('Field required').default('');
export const addressSchema = Yup.string().required('Field required').default('');
export const websiteSchema = Yup.string().default('');
export const websitesSchema = Yup.array().of(Yup.string()).default([]);
export const aboutSchema = Yup.string().default('');
export const languageSchema = Yup.string().default('');
export const languagesSchema = Yup.array().of(Yup.string()).default([]);
export const hardSkillSchema = Yup.object({
  name: Yup.string() as Yup.StringSchema<string>,
  rating: Yup.number() as Yup.NumberSchema<number>,
}).default({
  name: '',
  rating: 1,
});
export const hardSkillsSchema = Yup.array().of(hardSkillSchema).default([]);
export const otherToolSchema = Yup.object({
  name: Yup.string() as Yup.StringSchema<string>,
}).default({
  name: '',
});
export const otherToolsSchema = Yup.array().of(otherToolSchema).default([]);
export const softSkillSchema = Yup.object({
  name: Yup.string() as Yup.StringSchema<string>,
}).default({
  name: '',
});
export const softSkillsSchema = Yup.array().of(softSkillSchema).default([]);
export const experienceSchema = Yup.object({
  name: Yup.string() as Yup.StringSchema<string>,
  description: Yup.string() as Yup.StringSchema<string>,
  location: Yup.string() as Yup.StringSchema<string>,
  startAt: Yup.string() as Yup.StringSchema<string>,
  endAt: Yup.string() as Yup.StringSchema<string>,
  present: Yup.boolean() as Yup.BooleanSchema<boolean>,
}).default({
  name: '',
  description: '',
  location: '',
  startAt: '',
  endAt: '',
  present: false,
});
export const educationsSchema = Yup.array().of(experienceSchema).default([]);
export const workExperiencesSchema = Yup.array().of(experienceSchema).default([]);
export const projectSchema = Yup.object({
  name: Yup.string() as Yup.StringSchema<string>,
  description: Yup.string().notRequired() as Yup.StringSchema<string>,
  title: Yup.string().notRequired() as Yup.StringSchema<string>,
}).default({
  name: '',
  description: '',
  title: '',
});
export const projectsSchema = Yup.array().of(projectSchema).default([]);

export const cvSchema = Yup.object({
  title: titleSchema,
  field: fieldSchema,
  fullName: fullNameSchema,
  email: emailSchema,
  phone: phoneSchema,
  address: addressSchema,
  website: websiteSchema,
  websites: websitesSchema,
  about: aboutSchema,
  language: languageSchema,
  languages: languagesSchema,
  hardSkill: hardSkillSchema,
  hardSkills: hardSkillsSchema,
  softSkill: softSkillSchema,
  softSkills: softSkillsSchema,
  otherTool: otherToolSchema,
  otherTools: otherToolsSchema,
  education: experienceSchema,
  educations: educationsSchema,
  workExperience: experienceSchema,
  workExperiences: workExperiencesSchema,
  projects: projectsSchema,
});
