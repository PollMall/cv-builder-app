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
    }
  }
`;

export { GET_CV };
