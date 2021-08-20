import { gql } from '@apollo/client';

const GET_CV = gql`
  query Query($uid: String!, $cvId: String!) {
    cv(uid: $uid, cvId: $cvId) {
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
        rating
      }
      languages
      locationInfo {
        address
        websites
      }
      personalInfo {
        fullName
        email
        phone
        about
      }
      createdAt
      updatedAt
      score
      downloadLink
      template
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
      id
      title
      field
      educations {
        id
        name
        location
        description
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
        rating
      }
      languages
      locationInfo {
        address
        websites
      }
      personalInfo {
        fullName
        email
        phone
        about
      }
      createdAt
      updatedAt
      score
      downloadLink
      template
    }
  }
`;

export { GET_CV, GET_PDF, UPDATE_CV };
