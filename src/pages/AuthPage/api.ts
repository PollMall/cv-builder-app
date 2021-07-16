import firebase from 'firebase/app';
import 'firebase/auth';

const loginCall = async (email: string, password: string) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

const registerCall = async (email: string, password: string) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export { loginCall, registerCall };
