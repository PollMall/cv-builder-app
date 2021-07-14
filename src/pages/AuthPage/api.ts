import { Dispatch, SetStateAction } from 'react';
import {} from 'react';
import FormFieldsType from './types';
import firebase from 'firebase/app';

const loginCall = async (values: FormFieldsType, cb: Dispatch<SetStateAction<any | undefined>>) => {
  alert(`login with credentials: ${JSON.stringify(values)}`);
  try {
    await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
  } catch (e: any) {
    console.error(e);
    cb(e);
  }
};

const registerCall = async (values: FormFieldsType, cb: Dispatch<SetStateAction<Error | undefined>>) => {
  alert(`register with credentials: ${JSON.stringify(values)}`);
  try {
    await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
  } catch (e: any) {
    console.error(e);
    cb(e);
  }
};

export { loginCall, registerCall };
