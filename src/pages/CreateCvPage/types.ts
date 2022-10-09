import { CvRequest, Education, WorkExperience, HardSkill, SoftSkill, OtherTool, PersonalInfo } from '../../types';

export type FormikValues = {
  title: CvRequest['title'];
  field: CvRequest['field'];
  fullName: PersonalInfo['fullName'];
  email: PersonalInfo['email'];
  phone: PersonalInfo['phone'];
  address: PersonalInfo['address'];
  website: string;
  websites: PersonalInfo['websites'];
  about: PersonalInfo['about'];
  language: string;
  languages: CvRequest['languages'];
  hardSkill: HardSkill;
  hardSkills: HardSkill[];
  softSkill: SoftSkill;
  softSkills: SoftSkill[];
  otherTool: OtherTool;
  otherTools: OtherTool[];
  education: Education & { present: boolean };
  educations: Education[];
  workExperience: WorkExperience & { present: boolean };
  workExperiences: WorkExperience[];
};
