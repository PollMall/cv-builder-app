import React, { useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import useStyles from './styles';
import FormStep from './FormStep';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import Card from '../../components/Card/Card';
import BasicStep from './BasicStep';

const maxSteps = 4;

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
};

const formSteps = [
  {
    component: <BasicStep inputName="fullName" title="Insert your full name" />,
    validationSchema: Yup.object({
      fullName: Yup.string().required('Field required'),
    }),
  },
  {
    component: <BasicStep inputName="email" title="Insert your email address" />,
    validationSchema: Yup.object({
      email: Yup.string().required('Field required').email('Field not valid'),
    }),
  },
  {
    component: <BasicStep inputName="phone" title="Insert your phone number" />,
    validationSchema: Yup.object({
      phone: Yup.string().required('Field required'),
    }),
  },
  {
    component: <BasicStep inputName="address" title="Insert your address" />,
    validationSchema: Yup.object({
      address: Yup.string().required('Field required'),
    }),
  },
];

const CreateForm = () => {
  const classes = useStyles();
  const [step, setStep] = useState(1);
  const formStep = formSteps[step - 1];

  const handleSubmit = () => {
    if (step === 11) {
      console.log('submit');
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <Card>
      <LinearProgress className={classes.progressBar} color="primary" variant="determinate" value={(step * 100) / 11} />
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={formStep.validationSchema}>
        <FormikForm className={classes.form}>
          <FormStep step={step} maxSteps={maxSteps} onBack={handleBack}>
            {formStep.component}
          </FormStep>
        </FormikForm>
      </Formik>
    </Card>
  );
};

export default CreateForm;
