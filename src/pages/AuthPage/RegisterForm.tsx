import React, { useContext, useState, useEffect } from 'react';
import { Formik, Form as FormikForm, FormikValues } from 'formik';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import * as Yup from 'yup';
import useStyles from './styles';
import Input from '../../components/FormInputs/FormikInput';
import { REGISTER_APOLLO } from './api';
import { AuthContext, AuthActions } from '../../context/AuthContext';
import SubmitButton from '../../components/FormInputs/SubmitButton';
import { useMutation } from '@apollo/client';

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
  fullName: '',
};

const validationSchema = Yup.object({
  email: Yup.string().required('Field required').email('Email not valid'),
  password: Yup.string().required('Field required'),
  passwordConfirmation: Yup.string()
    .required('Field required')
    .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
  fullName: Yup.string().required('Field required'),
});

const RegisterForm = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AuthContext);
  const [register, { error, loading }] = useMutation(REGISTER_APOLLO);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setShowAlert(!!error);
  }, [error]);

  const handleRegister = async (values: FormikValues) => {
    const { email, password, fullName } = values;
    try {
      const { registerUser } = (await register({ variables: { email, password, fullName } })).data;
      sessionStorage.setItem('user', JSON.stringify(registerUser));
      dispatch({ type: AuthActions.UPDATE_USER, payload: registerUser });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleRegister} validationSchema={validationSchema}>
        <FormikForm className={classes.form}>
          <Input name="email" placeholder="Enter email here" label="Email" type="email" />
          <Input name="password" placeholder="Enter password here" label="Password" type="password" />
          <Input
            name="passwordConfirmation"
            placeholder="Re-enter password here"
            label="Confirm password"
            type="password"
          />
          <Input name="fullName" placeholder="Enter full name here" label="Full name" type="text" />
          <SubmitButton loading={loading} className={classes.button} disabled={!!state.user} type="submit">
            create account
          </SubmitButton>
        </FormikForm>
      </Formik>
      <Snackbar open={showAlert} autoHideDuration={5000} onClose={() => setShowAlert(false)}>
        <Alert severity="error">{error?.message}</Alert>
      </Snackbar>
    </>
  );
};

export default RegisterForm;
