import { gql } from '@apollo/client';

const GET_ALL_CVS = gql`
  query Query($idToken: String!, $uid: String!) {
    cvs(idToken: $idToken, uid: $uid) {
      id
      title
      updatedAt
      score
    }
  }
`;

export { GET_ALL_CVS };
