import { gql } from '@apollo/client';

const RECOMMEND_SKILLS = gql`
  query Query($field: String!, $typeOfSkills: String!) {
    recommendSkills(field: $field, typeOfSkills: $typeOfSkills) {
      name
      popularity
    }
  }
`;

const GET_SKILLS = gql`
  query Query($field: String!, $typeOfSkills: String!) {
    skills(field: $field, typeOfSkills: $typeOfSkills) {
      name
      popularity
    }
  }
`;

const GET_FIELDS = gql`
  query Query {
    fields
  }
`;

export { RECOMMEND_SKILLS, GET_SKILLS, GET_FIELDS };
