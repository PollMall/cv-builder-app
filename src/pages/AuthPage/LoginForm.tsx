import React, { useContext } from 'react';
import { Formik, Form as FormikForm, FormikValues } from 'formik';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import * as Yup from 'yup';
import useStyles from './styles';
import Input from '../../components/FormInputs/Input';
import FormFieldsType from './types';
import { LOGIN_APOLLO } from './api';
import { AuthContext, AuthActions } from '../../context/AuthContext';
import SubmitButton from '../../components/FormInputs/SubmitButton';
import { useMutation } from '@apollo/client';

const initialValues = {
  email: '',
  password: '',
} as FormFieldsType;

const validationSchema = Yup.object({
  email: Yup.string().required('Field required').email('Field not valid'),
  password: Yup.string().required('Field required'),
});

const LoginForm = () => {
  const classes = useStyles();
  const { dispatch } = useContext(AuthContext);
  const [login, { data, error, loading }] = useMutation(LOGIN_APOLLO);

  const handleLogin = async (values: FormikValues) => {
    const { email, password } = values;
    try {
      const user = (await login({ variables: { email, password } })).data.loginUser;
      dispatch({ type: AuthActions.UPDATE_USER, payload: user });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema}>
        <FormikForm className={classes.form}>
          <Input name="email" placeholder="Enter email here" label="Email" type="email" />
          <Input name="password" placeholder="Enter password here" label="Password" type="password" />
          <SubmitButton loading={loading} className={classes.button} disabled={!!data} type="submit">
            login
          </SubmitButton>
        </FormikForm>
      </Formik>
      <Snackbar open={!!error} autoHideDuration={5000} onClose={() => dispatch({ type: AuthActions.CLEAR_STATE })}>
        <Alert severity="error">{error?.message}</Alert>
      </Snackbar>
    </>
  );
};

export default LoginForm;
