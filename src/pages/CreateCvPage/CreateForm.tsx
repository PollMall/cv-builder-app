import React, { useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import useStyles from './styles';
import FormStep from './FormStep';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import Card from '../../components/Card/Card';
import BasicStep from './BasicStep';
import ChipStep from './ChipStep';
import Input from '../../components/FormInputs/FormikInput';
import SkillStep from './SkillStep';
import FieldStep from './FieldStep';

const initialValues = {
  field: '',
  fullName: '',
  email: '',
  phone: '',
  address: '',
  website: '',
  websites: [],
  about: '',
  language: '',
  languages: [],
  hardSkill: '',
  hardSkills: [],
  softSkill: '',
  softSkills: [],
};

const formSteps = [
  {
    component: <FieldStep inputName="field" title="Insert the field you want to work in" />,
    validationSchema: Yup.object({
      field: Yup.string().required('Field required'),
    }),
  },
  {
    component: (
      <BasicStep title="Insert your full name">
        <Input name="fullName" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      fullName: Yup.string().required('Field required'),
    }),
  },
  {
    component: (
      <BasicStep title="Insert your email address">
        <Input name="email" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      email: Yup.string().required('Field required').email('Field not valid'),
    }),
  },
  {
    component: (
      <BasicStep title="Insert your phone number">
        <Input name="phone" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      phone: Yup.string().required('Field required'),
    }),
  },
  {
    component: (
      <BasicStep title="Insert your address">
        <Input name="address" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      address: Yup.string().required('Field required'),
    }),
  },
  {
    component: (
      <ChipStep
        inputName="website"
        arrayInputName="websites"
        title="Insert your websites"
        ChipBoxProps={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch' }}
      />
    ),
    validationSchema: Yup.object({
      website: Yup.string(),
      websites: Yup.array().of(Yup.string()),
    }),
  },
  {
    component: (
      <BasicStep title="A few things about you">
        <Input multiline rows={5} name="about" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      about: Yup.string(),
    }),
  },
  {
    component: (
      <ChipStep
        inputName="language"
        arrayInputName="languages"
        title="Known languages"
        ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
      />
    ),
    validationSchema: Yup.object({
      language: Yup.string(),
      languages: Yup.array().of(Yup.string()),
    }),
  },
  {
    component: (
      <SkillStep
        inputName="hardSkill"
        arrayInputName="hardSkills"
        title="Hard skills"
        ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
      />
    ),
    validationSchema: Yup.object({
      hardSkill: Yup.string(),
      hardSkills: Yup.array().of(Yup.string()),
    }),
  },
  {
    component: (
      <SkillStep
        inputName="softSkill"
        arrayInputName="softSkills"
        title="Soft skills"
        ChipBoxProps={{ display: 'flex', flexWrap: 'wrap' }}
      />
    ),
    validationSchema: Yup.object({
      softSkill: Yup.string(),
      softSkills: Yup.array().of(Yup.string()),
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
          <FormStep step={step} maxSteps={formSteps.length} onBack={handleBack}>
            {formStep.component}
          </FormStep>
        </FormikForm>
      </Formik>
    </Card>
  );
};

export default CreateForm;
