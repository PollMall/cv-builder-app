import firebase from 'firebase/app';
import 'firebase/auth';

const signOutCall = async () => {
  firebase.auth().signOut();
};

export { signOutCall };
