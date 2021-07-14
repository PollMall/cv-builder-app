import React, { useState } from 'react';
import { Formik, Form as FormikForm, FormikValues } from 'formik';
import { Button, Snackbar, Typography } from '@material-ui/core';
import * as Yup from 'yup';
import useStyles from './styles';
import Input from './Input';
import FormFieldsType from './types';
import { loginCall } from './api';

const initialValues = {
  email: '',
  password: '',
} as FormFieldsType;

const validationSchema = Yup.object({
  email: Yup.string().required('Field required').email('Field not valid'),
  password: Yup.string().required('Field required'),
});

const Form = () => {
  const classes = useStyles();
  const [error, setError] = useState<Error>();

  const handleLogin = async (values: FormikValues) => {
    const { email, password } = values;
    loginCall({ email, password } as FormFieldsType, setError);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleLogin} validationSchema={validationSchema}>
        <FormikForm className={classes.form}>
          <Input name="email" placeholder="Enter email here" label="Email" type="email" />
          <Input name="password" placeholder="Enter password here" label="Password" type="password" />
          <Button type="submit">login</Button>
        </FormikForm>
      </Formik>
      <Snackbar open={!!error} autoHideDuration={5000} onClose={() => setError(undefined)}>
        <Typography>{error?.message}</Typography>
        {}
      </Snackbar>
    </>
  );
};

export default Form;
