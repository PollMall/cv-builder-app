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
    startAt
    endAt
  }
  workExperiences {
    id
    name
    description
    location
    startAt
    endAt
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

export { GET_CV, GET_PDF, UPDATE_CV };
