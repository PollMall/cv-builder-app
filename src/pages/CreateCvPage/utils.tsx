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

const SMALL_STEP_WIDTH = 500;
const LARGE_STEP_WIDTH = 700;

const initialValues = cvSchema.getDefault();

const formSteps = [
  {
    title: 'Give This CV a title',
    component: <BasicStep inputProps={{ name: 'title' }} width={SMALL_STEP_WIDTH} />,
    validationSchema: Yup.object({
      title: titleSchema,
    }),
  },
  {
    title: 'Select the field you want to work in',
    component: <FieldStep inputName="field" width={SMALL_STEP_WIDTH} />,
    validationSchema: Yup.object({
      field: fieldSchema,
    }),
  },
  {
    title: 'Fill in your full name',
    component: <BasicStep inputProps={{ name: 'fullName' }} width={SMALL_STEP_WIDTH} />,
    validationSchema: Yup.object({
      fullName: fullNameSchema,
    }),
  },
  {
    title: 'Fill in your email address',
    component: <BasicStep inputProps={{ name: 'email' }} width={SMALL_STEP_WIDTH} />,
    validationSchema: Yup.object({
      email: emailSchema,
    }),
  },
  {
    title: 'Fill in your phone number',
    component: <BasicStep inputProps={{ name: 'phone' }} width={SMALL_STEP_WIDTH} />,
    validationSchema: Yup.object({
      phone: phoneSchema,
    }),
  },
  {
    title: 'Fill in your address',
    component: <BasicStep inputProps={{ name: 'address' }} width={SMALL_STEP_WIDTH} />,
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
        width={SMALL_STEP_WIDTH}
      />
    ),
    validationSchema: Yup.object({
      website: websiteSchema,
      websites: websitesSchema,
    }),
  },
  {
    title: 'A few things about you',
    component: (
      <BasicStep inputProps={{ name: 'about', multiline: true, minRows: 8, maxRows: 8 }} width={SMALL_STEP_WIDTH} />
    ),
    validationSchema: Yup.object({
      about: aboutSchema,
    }),
  },
  {
    title: 'Known languages',
    component: (
      <ChipStep
        inputName="language"
        arrayInputName="languages"
        ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
        width={SMALL_STEP_WIDTH}
      />
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
        width={SMALL_STEP_WIDTH}
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
        width={SMALL_STEP_WIDTH}
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
        width={SMALL_STEP_WIDTH}
      />
    ),
    validationSchema: Yup.object({
      softSkill: softSkillSchema,
      softSkills: softSkillsSchema,
    }),
  },
  {
    title: 'Education',
    component: <ExperienceStep inputName="education" arrayInputName="educations" width={LARGE_STEP_WIDTH} />,
    validationSchema: Yup.object({
      education: experienceSchema,
      educations: educationsSchema,
    }),
  },
  {
    title: 'Work experience',
    component: <ExperienceStep inputName="workExperience" arrayInputName="workExperiences" width={LARGE_STEP_WIDTH} />,
    validationSchema: Yup.object({
      workExperience: experienceSchema,
      workExperiences: workExperiencesSchema,
    }),
  },
  {
    title: 'Projects',
    component: <ProjectStep inputName="project" arrayInputName="projects" width={LARGE_STEP_WIDTH} />,
    validationSchema: Yup.object({
      project: projectSchema,
      projects: projectsSchema,
    }),
  },
];

export { initialValues, formSteps };
