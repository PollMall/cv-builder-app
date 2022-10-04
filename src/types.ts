export interface User {
  uid: string;
  displayName: string;
  credentials?: Credentials;
  cvs: Cv[];
}

export interface Credentials {
  idToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface Cv {
  id?: string;
  title: string;
  field: string;
  educations?: Education[];
  workExperiences?: WorkExperience[];
  feedback?: boolean;
  hardSkills?: HardSkill[];
  softSkills?: SoftSkill[];
  otherTools?: OtherTools[];
  languages?: string[];
  locationInfo?: LocationInfo;
  personalInfo?: PersonalInfo;
  createdAt: string;
  updatedAt: string;
  score: number;
  downloadLink?: string;
  template?: string;
}

export enum Templates {
  NORMAL = 'NORMAL',
  COMPACT = 'COMPACT',
  FANCY = 'FANCY',
  CLASSY = 'CLASSY',
}

export interface PersonalInfo {
  fullName: string;
  email: string;
  phone?: string;
  about?: string;
}

export interface LocationInfo {
  address?: string;
  websites?: string[];
}

export interface Education {
  id?: string;
  name: string;
  description: string;
  location: string;
  startAt: string;
  endAt: string;
}

export interface WorkExperience {
  id?: string;
  name: string;
  description: string;
  location: string;
  startAt: string;
  endAt: string;
}

export interface HardSkill {
  name: string;
  rating: number;
}

export type SoftSkill = {
  name: string;
};

export type OtherTools = {
  name: string;
};

export type Skill =
  | ({ kind: 'hardSkill' } & HardSkill)
  | ({ kind: 'softSkill' } & SoftSkill)
  | ({ kind: 'otherTools' } & OtherTools);

export interface FieldSkill {
  popularity: number;
}

export interface CvRequest {
  title: string;
  field: string;
  educations?: Education[];
  workExperiences?: WorkExperience[];
  hardSkills?: HardSkill[];
  softSkills?: SoftSkill[];
  languages?: string[];
  locationInfo?: LocationInfo;
  personalInfo?: PersonalInfo;
}
