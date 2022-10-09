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
    }
  }
`;

const GET_PDF = gql`
  query Query($cv: String, $template: String) {
    getPDF(cv: $cv, template: $template)
  }
`;

export { GET_BEST_CVS, GET_PDF };
