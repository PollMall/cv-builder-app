import { gql } from '@apollo/client';

const GET_BEST_CVS = gql`
  query Query($uid: String!, $noOfCvs: Int!) {
    bestCvs(uid: $uid, noOfCvs: $noOfCvs) {
      id
      title
      score
    }
  }
`;

export { GET_BEST_CVS };
