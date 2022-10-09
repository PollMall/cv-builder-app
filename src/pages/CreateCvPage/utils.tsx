import React from 'react';
import * as Yup from 'yup';
import BasicStep from './BasicStep';
import ChipStep from './ChipStep';
import SkillStep from './SkillStep';
import FieldStep from './FieldStep';
import ExperienceStep from './ExperienceStep';
import ProjectStep from './ProjectStep';
import {
  cvSchema,
  titleSchema,
  fieldSchema,
  fullNameSchema,
  emailSchema,
  phoneSchema,
  addressSchema,
  websiteSchema,
  websitesSchema,
  aboutSchema,
  languageSchema,
  languagesSchema,
  hardSkillSchema,
  hardSkillsSchema,
  softSkillSchema,
  softSkillsSchema,
  otherToolSchema,
  otherToolsSchema,
  experienceSchema,
  educationsSchema,
  workExperiencesSchema,
  projectSchema,
  projectsSchema,
} from '../utils';

const initialValues = cvSchema.getDefault();

const formSteps = [
  {
    title: 'Give This CV a title',
    component: <BasicStep inputProps={{ name: 'title' }} />,
    validationSchema: Yup.object({
      title: titleSchema,
    }),
  },
  {
    title: 'Select the field you want to work in',
    component: <FieldStep inputName="field" />,
    validationSchema: Yup.object({
      field: fieldSchema,
    }),
  },
  {
    title: 'Fill in your full name',
    component: <BasicStep inputProps={{ name: 'fullName' }} />,
    validationSchema: Yup.object({
      fullName: fullNameSchema,
    }),
  },
  {
    title: 'Fill in your email address',
    component: <BasicStep inputProps={{ name: 'email' }} />,
    validationSchema: Yup.object({
      email: emailSchema,
    }),
  },
  {
    title: 'Fill in your phone number',
    component: <BasicStep inputProps={{ name: 'phone' }} />,
    validationSchema: Yup.object({
      phone: phoneSchema,
    }),
  },
  {
    title: 'Fill in your address',
    component: <BasicStep inputProps={{ name: 'address' }} />,
    validationSchema: Yup.object({
      address: addressSchema,
    }),
  },
  {
    title: 'Add your websites',
    component: (
      <ChipStep
        inputName="website"
        arrayInputName="websites"
        ChipBoxProps={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}
      />
    ),
    validationSchema: Yup.object({
      website: websiteSchema,
      websites: websitesSchema,
    }),
  },
  {
    title: 'A few things about you',
    component: <BasicStep inputProps={{ name: 'about', multiline: true, maxRows: 5 }} />,
    validationSchema: Yup.object({
      about: aboutSchema,
    }),
  },
  {
    title: 'Known languages',
    component: (
      <ChipStep inputName="language" arrayInputName="languages" ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }} />
    ),
    validationSchema: Yup.object({
      language: languageSchema,
      languages: languagesSchema,
    }),
  },
  {
    title: 'Hard skills',
    component: (
      <SkillStep
        isRatable
        inputName="hardSkill"
        arrayInputName="hardSkills"
        ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
      />
    ),
    validationSchema: Yup.object({
      hardSkill: hardSkillSchema,
      hardSkills: hardSkillsSchema,
    }),
  },
  {
    title: 'Other tools',
    component: (
      <SkillStep
        inputName="otherTool"
        arrayInputName="otherTools"
        ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
      />
    ),
    validationSchema: Yup.object({
      otherTool: otherToolSchema,
      otherTools: otherToolsSchema,
    }),
  },
  {
    title: 'Soft skills',
    component: (
      <SkillStep
        inputName="softSkill"
        arrayInputName="softSkills"
        ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
      />
    ),
    validationSchema: Yup.object({
      softSkill: softSkillSchema,
      softSkills: softSkillsSchema,
    }),
  },
  {
    title: 'Education',
    component: <ExperienceStep inputName="education" arrayInputName="educations" />,
    validationSchema: Yup.object({
      education: experienceSchema,
      educations: educationsSchema,
    }),
  },
  {
    title: 'Work experience',
    component: <ExperienceStep inputName="workExperience" arrayInputName="workExperiences" />,
    validationSchema: Yup.object({
      workExperience: experienceSchema,
      workExperiences: workExperiencesSchema,
    }),
  },
  {
    title: 'Projects',
    component: <ProjectStep inputName="project" arrayInputName="projects" />,
    validationSchema: Yup.object({
      project: projectSchema,
      projects: projectsSchema,
    }),
  },
];

export { initialValues, formSteps };
