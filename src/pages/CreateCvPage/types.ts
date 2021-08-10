import { Education, HardSkill, SoftSkill, WorkExperience } from '../../types';

export type FormikValues = {
  title: string;
  field: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  websites: string[];
  about: string;
  language: string;
  languages: string[];
  hardSkill: HardSkill;
  hardSkills: HardSkill[];
  softSkill: SoftSkill;
  softSkills: SoftSkill[];
  education: Education & { present: boolean };
  educations: Education[];
  workExperience: WorkExperience & { present: boolean };
  workExperiences: WorkExperience[];
};
