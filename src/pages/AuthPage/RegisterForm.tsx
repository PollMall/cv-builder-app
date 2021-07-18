import React, { useContext } from 'react';
import { Formik, Form as FormikForm, FormikValues } from 'formik';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import * as Yup from 'yup';
import useStyles from './styles';
import Input from '../../components/FormInputs/Input';
import { registerCall } from './api';
import { AuthContext, AuthActions } from '../../context/AuthContext';
import SubmitButton from '../../components/FormInputs/SubmitButton';

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = Yup.object({
  email: Yup.string().required('Field required').email('Email not valid'),
  password: Yup.string().required('Field required'),
  passwordConfirmation: Yup.string()
    .required('Field required')
    .oneOf([Yup.ref('password'), ''], 'Passwords must match'),
});

const RegisterForm = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(AuthContext);

  const handleRegister = async (values: FormikValues) => {
    const { email, password } = values;
    dispatch({ type: AuthActions.AUTH_STARTED });
    try {
      const user = await registerCall(email, password);
      dispatch({ type: AuthActions.UPDATE_USER, payload: user });
    } catch (err: any) {
      dispatch({ type: AuthActions.AUTH_FAILED, payload: err });
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
          <SubmitButton loading={state.loading} className={classes.button} disabled={!!state.user} type="submit">
            create account
          </SubmitButton>
        </FormikForm>
      </Formik>
      <Snackbar
        open={!!state.error}
        autoHideDuration={5000}
        onClose={() => dispatch({ type: AuthActions.CLEAR_STATE })}
      >
        <Alert severity="error">{state.error?.message}</Alert>
      </Snackbar>
    </>
  );
};

export default RegisterForm;
