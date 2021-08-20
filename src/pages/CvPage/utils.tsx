import * as Yup from 'yup';
import { Cv, Education, HardSkill, SoftSkill, WorkExperience } from '../../types';

// NOTE: make this a function that receives the whole CV and returns the initial values accordingly
const getFormMetadata = (cv: Cv) => {
  const { personalInfo, locationInfo, educations, workExperiences, hardSkills, softSkills, languages } = cv;
  return {
    initialValues: {
      fullName: personalInfo?.fullName,
      email: personalInfo?.email,
      phone: personalInfo?.phone,
      address: locationInfo?.address,
      website: '',
      websites: locationInfo?.websites || [],
      about: personalInfo?.about,
      language: '',
      languages: languages || [],
      hardSkill: {
        name: '',
        rating: 1,
      },
      hardSkills: hardSkills || ([] as HardSkill[]),
      softSkill: {
        name: '',
        rating: 1,
      },
      softSkills: softSkills || ([] as SoftSkill[]),
      education: {
        name: '',
        description: '',
        location: '',
        startAt: '',
        endAt: '',
        present: false,
      },
      educations: educations || ([] as Education[]),
      workExperience: {
        name: '',
        description: '',
        location: '',
        startAt: '',
        endAt: '',
        present: false,
      },
      workExperiences: workExperiences || ([] as WorkExperience[]),
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Field required'),
      email: Yup.string().required('Field required').email('Field not valid'),
      phone: Yup.string().required('Field required'),
      address: Yup.string().required('Field required'),
      website: Yup.string(),
      websites: Yup.array().of(Yup.string()),
      about: Yup.string(),
      language: Yup.string(),
      languages: Yup.array().of(Yup.string()),
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
    education: Yup.object(),
    educations: Yup.array().of(Yup.object()),
    workExperience: Yup.object(),
    workExperiences: Yup.array().of(Yup.object()),
  };
};

export { getFormMetadata };
