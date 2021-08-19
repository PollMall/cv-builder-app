import { gql } from '@apollo/client';

const GET_BEST_CVS = gql`
  query Query($uid: String!, $noOfCvs: Int!) {
    bestCvs(uid: $uid, noOfCvs: $noOfCvs) {
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
        name
        id
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
      locationInfo {
        address
        websites
      }
      languages
      personalInfo {
        fullName
        email
        phone
        about
      }
      createdAt
      updatedAt
      score
    }
  }
`;

const GET_PDF = gql`
  query Query($cv: String) {
    getPDF(cv: $cv)
  }
`;

export { GET_BEST_CVS, GET_PDF };
