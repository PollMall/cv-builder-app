import { gql } from '@apollo/client';
import firebase from 'firebase/app';
import 'firebase/auth';

const signOutCall = async () => {
  firebase.auth().signOut();
};

const SIGN_OUT = gql`
  mutation SignOutUserMutation($uid: String!) {
    signOutUser(uid: $uid)
  }
`;

export { signOutCall, SIGN_OUT };
