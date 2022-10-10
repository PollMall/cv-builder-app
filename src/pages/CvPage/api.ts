import { gql } from '@apollo/client';

const CV_ALL_DETAILS = `
  id
  title
  field
  educations {
    id
    name
    description
    location
    title
    startAt
    endAt
  }
  workExperiences {
    id
    name
    description
    location
    title
    startAt
    endAt
  }
  projects {
    id
    name
    description
    title
  }
  feedback
  hardSkills {
    name
    rating
  }
  softSkills {
    name
  }
  otherTools {
    name
  }
  languages
  personalInfo {
    fullName
    email
    phone
    about
    address
    websites
  }
  createdAt
  updatedAt
  score
  downloadLink
  template
`;

const GET_CV = gql`
  query Query($uid: String!, $cvId: String!) {
    cv(uid: $uid, cvId: $cvId) {
      ${CV_ALL_DETAILS}
    }
  }
`;

const GET_PDF = gql`
  query Query($cv: String, $template: String) {
    getPDF(cv: $cv, template: $template)
  }
`;

const UPDATE_CV = gql`
  mutation UpdateCvMutation($uid: String!, $newCv: String!) {
    updateCv(uid: $uid, newCv: $newCv) {
      ${CV_ALL_DETAILS}
    }
  }
`;

const DELETE_CV = gql`
  mutation DeleteCvMutation($uid: String!, $cvId: String!) {
    deleteCv(uid: $uid, cvId: $cvId)
  }
`;

export { GET_CV, GET_PDF, UPDATE_CV, DELETE_CV };
