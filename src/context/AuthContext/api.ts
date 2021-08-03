import { gql } from '@apollo/client';

const REFRESH_TOKEN = gql`
  mutation RefreshTokenUserMutation($refreshToken: String!) {
    refreshTokenUser(refreshToken: $refreshToken) {
      idToken
      refreshToken
      expiresIn
    }
  }
`;

export { REFRESH_TOKEN };
