import React from 'react';
import * as Yup from 'yup';
import BasicStep from '../CreateCvPage/BasicStep';
import ChipStep from '../CreateCvPage/ChipStep';
import Input from '../../components/FormInputs/FormikInput';
import SkillStep from '../CreateCvPage/SkillStep/SkillStep';
import FieldStep from '../CreateCvPage/FieldStep';
import ExperienceStep from '../CreateCvPage/ExperienceStep/ExperienceStep';
import { Education, HardSkill, SoftSkill, WorkExperience } from '../../types';

// NOTE: make this a function that receives the whole CV and returns the initial values accordingly
const initialValues = {
  title: '',
  field: '',
  fullName: '',
  email: '',
  phone: '',
  address: '',
  website: '',
  websites: [],
  about: '',
  language: '',
  languages: [],
  hardSkill: {
    name: '',
    rating: 1,
  },
  hardSkills: [] as HardSkill[],
  softSkill: {
    name: '',
    rating: 1,
  },
  softSkills: [] as SoftSkill[],
  education: {
    name: '',
    description: '',
    location: '',
    startAt: '',
    endAt: '',
    present: false,
  },
  educations: [] as Education[],
  workExperience: {
    name: '',
    description: '',
    location: '',
    startAt: '',
    endAt: '',
    present: false,
  },
  workExperiences: [] as WorkExperience[],
};

const formSteps = [
  {
    component: (
      <BasicStep title="Give this CV a title">
        <Input name="title" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      title: Yup.string().required('Field required'),
    }),
  },
  {
    component: <FieldStep inputName="field" title="Insert the field you want to work in" />,
    validationSchema: Yup.object({
      field: Yup.string().required('Field required'),
    }),
  },
  {
    component: (
      <BasicStep title="Insert your full name">
        <Input name="fullName" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      fullName: Yup.string().required('Field required'),
    }),
  },
  {
    component: (
      <BasicStep title="Insert your email address">
        <Input name="email" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      email: Yup.string().required('Field required').email('Field not valid'),
    }),
  },
  {
    component: (
      <BasicStep title="Insert your phone number">
        <Input name="phone" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      phone: Yup.string().required('Field required'),
    }),
  },
  {
    component: (
      <BasicStep title="Insert your address">
        <Input name="address" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      address: Yup.string().required('Field required'),
    }),
  },
  {
    component: (
      <ChipStep
        inputName="website"
        arrayInputName="websites"
        title="Insert your websites"
        ChipBoxProps={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}
      />
    ),
    validationSchema: Yup.object({
      website: Yup.string(),
      websites: Yup.array().of(Yup.string()),
    }),
  },
  {
    component: (
      <BasicStep title="A few things about you">
        <Input multiline rows={5} name="about" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      about: Yup.string(),
    }),
  },
  {
    component: (
      <ChipStep
        inputName="language"
        arrayInputName="languages"
        title="Known languages"
        ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
      />
    ),
    validationSchema: Yup.object({
      language: Yup.string(),
      languages: Yup.array().of(Yup.string()),
    }),
  },
  {
    component: (
      <SkillStep
        inputName="hardSkill"
        arrayInputName="hardSkills"
        title="Hard skills"
        ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
      />
    ),
    validationSchema: Yup.object({
      hardSkill: Yup.object({
        name: Yup.string(),
        rating: Yup.number(),
      }),
      hardSkills: Yup.array().of(
        Yup.object({
          name: Yup.string(),
          rating: Yup.number(),
        }),
      ),
    }),
  },
  {
    component: (
      <SkillStep
        inputName="softSkill"
        arrayInputName="softSkills"
        title="Soft skills"
        ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
      />
    ),
    validationSchema: Yup.object({
      softSkill: Yup.object({
        name: Yup.string(),
        rating: Yup.number(),
      }),
      softSkills: Yup.array().of(
        Yup.object({
          name: Yup.string(),
          rating: Yup.number(),
        }),
      ),
    }),
  },
  {
    component: <ExperienceStep inputName="education" arrayInputName="educations" title="Education" />,
    validationSchema: Yup.object({
      education: Yup.object(),
      educations: Yup.array().of(Yup.object()),
    }),
  },
  {
    component: <ExperienceStep inputName="workExperience" arrayInputName="workExperiences" title="Work experience" />,
    validationSchema: Yup.object({
      workExperience: Yup.object(),
      workExperiences: Yup.array().of(Yup.object()),
    }),
  },
];

export { initialValues, formSteps };
