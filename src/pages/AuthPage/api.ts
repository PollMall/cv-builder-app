import firebase from 'firebase/app';
import 'firebase/auth';
import { gql } from '@apollo/client';

const loginCall = async (email: string, password: string) => {
  const user = await firebase.auth().signInWithEmailAndPassword(email, password);
  console.log(user.user?.getIdToken());
  return user;
};

const registerCall = async (email: string, password: string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

const REGISTER_APOLLO = gql`
  mutation RegisterUserMutation($email: String!, $password: String!, $fullName: String!) {
    registerUser(email: $email, password: $password, fullName: $fullName) {
      uid
      displayName
    }
  }
`;

const LOGIN_APOLLO = gql`
  mutation LoginUserMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      uid
      credentials {
        idToken
        refreshToken
        expiresIn
      }
      displayName
    }
  }
`;

export { loginCall, registerCall, REGISTER_APOLLO, LOGIN_APOLLO };
