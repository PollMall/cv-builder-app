import React from 'react';
import { Formik, Form as FormikForm, FormikValues } from 'formik';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';
import useStyles from './styles';
import Input from './Input';

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

const handleRegister = (values: FormikValues) => {
  alert(`register with credentials: ${JSON.stringify(values)}`);
  return Promise.resolve();
};

const Form = () => {
  const classes = useStyles();

  return (
    <Formik initialValues={initialValues} onSubmit={handleRegister} validationSchema={validationSchema}>
      <FormikForm className={classes.form}>
        <Input name="email" placeholder="Enter email here" label="Email" type="email" />
        <Input name="password" placeholder="Enter password here" label="Password" type="password" />
        <Input
          name="passwordConfirmation"
          placeholder="Re-enter password here"
          label="Password Confirmation"
          type="password"
        />
        <Button type="submit">create account</Button>
      </FormikForm>
    </Formik>
  );
};

export default Form;
