import React from 'react';
import type { ReactNode } from 'react';
import type { Cv, Education, HardSkill, OtherTool, SoftSkill, WorkExperience, Project } from '../../types';
import { Templates } from '../../types';
import Input from '../../components/FormInputs/FormikInput';
import ChipInput from '../../components/FormInputs/FormikChipInput';
import SkillsInput from '../../components/FormInputs/FormikSkillsInput';
import ExperienceInput from '../../components/FormInputs/FormikExperienceInput';
import ProjectInput from '../../components/FormInputs/FormikProjectInput';
import { cvSchema } from '../utils';

export type FormData = {
  initialValues: Cv;
  validationSchema: any;
  components: Record<string, ReactNode>;
};

type GetFormDataFunction = (cv: Cv) => FormData;

export const getFormData: GetFormDataFunction = (cv) => {
  const {
    field,
    template,
    personalInfo,
    educations,
    workExperiences,
    projects,
    hardSkills,
    softSkills,
    otherTools,
    languages,
  } = cv;

  return {
    initialValues: {
      ...cv,
      field,
      template: template || Templates.NORMAL,
      fullName: personalInfo?.fullName,
      email: personalInfo?.email,
      phone: personalInfo?.phone,
      address: personalInfo?.address,
      website: '',
      websites: personalInfo?.websites || [],
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
      },
      softSkills: softSkills || ([] as SoftSkill[]),
      otherTool: {
        name: '',
      },
      otherTools: otherTools || ([] as OtherTool[]),
      education: {
        name: '',
        description: '',
        location: '',
        title: '',
        startAt: '',
        endAt: '',
        present: false,
      },
      educations: educations || ([] as Education[]),
      workExperience: {
        name: '',
        description: '',
        location: '',
        title: '',
        startAt: '',
        endAt: '',
        present: false,
      },
      workExperiences: workExperiences || ([] as WorkExperience[]),
      project: {
        name: '',
        description: '',
        title: '',
      },
      projects: projects || ([] as Project[]),
    },
    validationSchema: cvSchema,
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
      hardSkills: <SkillsInput isRatable inputName="hardSkill" arrayInputName="hardSkills" />,
      softSkills: <SkillsInput inputName="softSkill" arrayInputName="softSkills" />,
      otherTools: <SkillsInput inputName="otherTool" arrayInputName="otherTools" />,
      workExperiences: <ExperienceInput inputName="workExperience" arrayInputName="workExperiences" />,
      educations: <ExperienceInput inputName="education" arrayInputName="educations" />,
      projects: <ProjectInput inputName="project" arrayInputName="projects" />,
    },
  } as FormData;
};
