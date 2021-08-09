import React, { useState, useContext } from 'react';
import { LinearProgress } from '@material-ui/core';
import useStyles from './styles';
import FormStep from './FormStep';
import { Formik, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import Card from '../../components/Card/Card';
import BasicStep from './BasicStep';
import ChipStep from './ChipStep';
import Input from '../../components/FormInputs/FormikInput';
import SkillStep from './SkillStep/SkillStep';
import FieldStep from './FieldStep';
import ExperienceStep from './ExperienceStep/ExperienceStep';
import { useMutation } from '@apollo/client';
import { ADD_CV } from './api';
import { CvRequest, HardSkill, SoftSkill } from '../../types';
import { AuthContext } from '../../context/AuthContext';

const initialValues = {
  title: '',
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
  hardSkill: {
    name: '',
    rating: 1,
  },
  hardSkills: [] as HardSkill[],
  softSkill: {
    name: '',
    rating: 1,
  },
  softSkills: [] as SoftSkill[],
  education: {
    name: '',
    description: '',
    location: '',
    startAt: '',
    endAt: '',
    present: false,
  },
  educations: [
    {
      name: 'UBB',
      description: 'It was ok. I had much fun, tralalalalalalalalalaalalallala',
      location: 'Deva, Hunedoara, Romania',
      startAt: '1628443929000',
      endAt: '',
    },
  ],
  workExperience: {
    name: '',
    description: '',
    location: '',
    startAt: '',
    endAt: '',
    present: false,
  },
  workExperiences: [
    {
      name: 'Modus Create',
      description: 'Still there and havig fun.',
      location: 'Cluj-Napoca, Romania',
      startAt: '1628443929000',
      endAt: '',
    },
  ],
};

const formSteps = [
  {
    component: (
      <BasicStep title="Give this CV a title">
        <Input name="title" />
      </BasicStep>
    ),
    validationSchema: Yup.object({
      title: Yup.string().required('Field required'),
    }),
  },
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
      hardSkill: Yup.object({
        name: Yup.string(),
        rating: Yup.number(),
      }),
      hardSkills: Yup.array().of(
        Yup.object({
          name: Yup.string(),
          rating: Yup.number(),
        }),
      ),
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
      softSkill: Yup.object({
        name: Yup.string(),
        rating: Yup.number(),
      }),
      softSkills: Yup.array().of(
        Yup.object({
          name: Yup.string(),
          rating: Yup.number(),
        }),
      ),
    }),
  },
  {
    component: <ExperienceStep inputName="education" arrayInputName="educations" title="Education" />,
    validationSchema: Yup.object({
      education: Yup.object(),
      educations: Yup.array().of(Yup.object()),
    }),
  },
  {
    component: <ExperienceStep inputName="workExperience" arrayInputName="workExperiences" title="Work experience" />,
    validationSchema: Yup.object({
      workExperience: Yup.object(),
      workExperiences: Yup.array().of(Yup.object()),
    }),
  },
];

const CreateForm = () => {
  const [step, setStep] = useState(1);
  const formStep = formSteps[step - 1];
  const classes = useStyles({ bigStep: step > formSteps.length - 2 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [addCv, { data, loading, error }] = useMutation(ADD_CV);
  const { state } = useContext(AuthContext);

  const handleSubmit = async (values: any) => {
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
        locationInfo,
        personalInfo,
      }: CvRequest = values;
      const cv = {
        title,
        field,
        educations,
        workExperiences,
        hardSkills,
        softSkills,
        languages,
        locationInfo,
        personalInfo,
      };
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
