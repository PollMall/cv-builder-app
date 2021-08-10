import React, { useState, useContext } from 'react';
import { LinearProgress } from '@material-ui/core';
import useStyles from './styles';
import FormStep from './FormStep';
import { Formik, Form as FormikForm } from 'formik';
import Card from '../../components/Card/Card';
import { useMutation } from '@apollo/client';
import { ADD_CV } from './api';
import { CvRequest, LocationInfo, PersonalInfo } from '../../types';
import { AuthContext } from '../../context/AuthContext';
import { formSteps, initialValues } from './utils';
import { FormikValues } from './types';

const CreateForm = () => {
  const [step, setStep] = useState(1);
  const formStep = formSteps[step - 1];
  const classes = useStyles({ bigStep: step > formSteps.length - 2 });
  const [addCv, { data, loading, error }] = useMutation(ADD_CV);
  const { state } = useContext(AuthContext);

  const handleSubmit = async (values: FormikValues) => {
    if (step === formSteps.length) {
      console.log('submit');
      console.log(values);
      const {
        title,
        field,
        educations,
        workExperiences,
        hardSkills,
        softSkills,
        languages,
        address,
        websites,
        fullName,
        email,
        phone,
        about,
      } = values;
      const cv = {
        title,
        field,
        educations,
        workExperiences,
        hardSkills,
        softSkills,
        languages,
        locationInfo: { address, websites } as LocationInfo,
        personalInfo: { fullName, email, phone, about } as PersonalInfo,
      } as CvRequest;
      console.log(cv);
      try {
        await addCv({ variables: { uid: state.user?.uid, cv: JSON.stringify(cv) } });
      } catch (err) {
        console.error(err);
      }
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong adding your CV...</h2>;
  }

  if (data) {
    return <h2>CV added successfully</h2>;
  }

  return (
    <Card>
      <LinearProgress
        className={classes.progressBar}
        color="primary"
        variant="determinate"
        value={(step * 100) / formSteps.length}
      />
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={formStep.validationSchema}>
        <FormikForm className={classes.form}>
          <FormStep step={step} maxSteps={formSteps.length} onBack={handleBack}>
            {formStep.component}
          </FormStep>
        </FormikForm>
      </Formik>
    </Card>
  );
};

export default CreateForm;
