import React, { useState } from 'react';
import { Box, LinearProgress, Typography } from '@material-ui/core';
import useStyles from './styles';
import FormStep from './FormStep';
import Input from '../../../components/FormInputs/Input';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import Card from '../../../components/Card/Card';

const maxSteps = 3;

const initialValues = {
  fullName: '',
  email: '',
  phone: '',
};

const formSteps = [
  {
    title: 'Insert your full name',
    component: <Input name="fullName" />,
    validationSchema: Yup.object({
      fullName: Yup.string().required('Field required'),
    }),
  },
  {
    title: 'Insert your email address',
    component: <Input name="email" />,
    validationSchema: Yup.object({
      email: Yup.string().required('Field required').email('Field not valid'),
    }),
  },
  {
    title: 'Insert your phone number',
    component: <Input name="phone" />,
    validationSchema: Yup.object({
      phone: Yup.string().required('Field required'),
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
    <Box display="flex" flexDirection="column" alignItems="space-between" className={classes.form}>
      <LinearProgress className={classes.progressBar} color="primary" variant="determinate" value={(step * 100) / 11} />
      <Card>
        <Box display="flex" justifyContent="center" alignItems="space-between">
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={formStep.validationSchema}>
            <FormikForm className={classes.form}>
              <FormStep step={step} maxSteps={maxSteps} onBack={handleBack}>
                <Box display="flex" flexDirection="column" alignItems="center" width="100%">
                  <Typography variant="h6">{formStep.title}</Typography>
                  {formStep.component}
                </Box>
              </FormStep>
            </FormikForm>
          </Formik>
        </Box>
      </Card>
    </Box>
  );
};

export default CreateForm;
