import React from 'react';
import * as Yup from 'yup';
import { Cv, Education, HardSkill, SoftSkill, Templates, WorkExperience } from '../../types';
import Input from '../../components/FormInputs/FormikInput';
import ChipInput from '../../components/FormInputs/FormikChipInput';
import SkillsInput from '../../components/FormInputs/FormikSkillsInput';
import ExperienceInput from '../../components/FormInputs/FormikExperienceInput';

export type FormData = {
  initialValues: any;
  validationSchema: any;
  components: any;
};

const getFormData = (cv: Cv) => {
  const { field, personalInfo, locationInfo, educations, workExperiences, hardSkills, softSkills, languages } = cv;
  return {
    initialValues: {
      ...cv,
      field,
      template: cv.template || Templates.NORMAL,
      fullName: personalInfo?.fullName,
      email: personalInfo?.email,
      phone: personalInfo?.phone,
      address: locationInfo?.address,
      website: '',
      websites: locationInfo?.websites || [],
      about: personalInfo?.about,
      language: '',
      languages: languages || [],
      hardSkill: {
        name: '',
        rating: 1,
      },
      hardSkills: hardSkills || ([] as HardSkill[]),
      softSkill: {
        name: '',
        rating: 1,
      },
      softSkills: softSkills || ([] as SoftSkill[]),
      education: {
        name: '',
        description: '',
        location: '',
        startAt: '',
        endAt: '',
        present: false,
      },
      educations: educations || ([] as Education[]),
      workExperience: {
        name: '',
        description: '',
        location: '',
        startAt: '',
        endAt: '',
        present: false,
      },
      workExperiences: workExperiences || ([] as WorkExperience[]),
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Field required'),
      email: Yup.string().required('Field required').email('Field not valid'),
      phone: Yup.string().required('Field required'),
      address: Yup.string().required('Field required'),
      website: Yup.string(),
      websites: Yup.array().of(Yup.string()),
      about: Yup.string(),
      language: Yup.string(),
      languages: Yup.array().of(Yup.string()),
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
      education: Yup.object(),
      educations: Yup.array().of(Yup.object()),
      workExperience: Yup.object(),
      workExperiences: Yup.array().of(Yup.object()),
    }),
    components: {
      fullName: <Input name="fullName" />,
      email: <Input name="email" />,
      phone: <Input name="phone" />,
      address: <Input name="address" />,
      websites: (
        <ChipInput
          inputName="website"
          arrayInputName="websites"
          title="Insert your websites"
          ChipBoxProps={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}
        />
      ),
      about: <Input multiline rows={5} name="about" />,
      languages: (
        <ChipInput
          inputName="language"
          arrayInputName="languages"
          title="Known languages"
          ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
        />
      ),
      hardSkills: <SkillsInput inputName="hardSkill" arrayInputName="hardSkills" />,
      softSkills: <SkillsInput inputName="softSkill" arrayInputName="softSkills" />,
      workExperiences: <ExperienceInput inputName="workExperience" arrayInputName="workExperiences" />,
      educations: <ExperienceInput inputName="education" arrayInputName="educations" />,
    },
  };
};

export { getFormData };
