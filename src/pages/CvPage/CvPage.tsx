import React, { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import { useParams } from 'react-router-dom';
import Page from '../../components/Page/Page';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { GET_CV, GET_PDF, UPDATE_CV } from './api';
import { AuthContext } from '../../context/AuthContext';
import SimpleField from './SimpleField/SimpleField';
import SkillField from './SkillField/SkillField';
import { Box, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useEffect } from 'react';
import { Cv, LocationInfo, PersonalInfo, Templates } from '../../types';
import ExperienceField from './ExperienceField/ExperienceField';
import PreviewField from './PreviewField';
import { FormData, getFormData } from './utils';

const CvPage = () => {
  const { state } = useContext(AuthContext);
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useQuery(GET_CV, { variables: { uid: state.user?.uid, cvId: id } });
  const [updateCv, { loading: updateCvLoading }] = useMutation(UPDATE_CV);
  const [cv, setCv] = useState<Cv | null>(null);
  const [getPDF, { data: dataPDF, loading: loadingPDF }] = useLazyQuery(GET_PDF);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [errorSaveChanges, setErrorSaveChanges] = useState(false);

  useEffect(() => {
    if (data) {
      setCv(data.cv);
      setFormData(getFormData(data.cv));
      getPDF({ variables: { cv: JSON.stringify(data.cv), template: data.cv.template } });
    }
  }, [data]);

  const handleChangeTemplate = (template: Templates) =>
    getPDF({ variables: { cv: JSON.stringify(data.cv), template } });

  const handleSaveChanges = async (values: any) => {
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
      ...values,
      title,
      field,
      educations,
      workExperiences,
      hardSkills,
      softSkills,
      languages,
      locationInfo: { address, websites } as LocationInfo,
      personalInfo: { fullName, email, phone, about } as PersonalInfo,
    } as Cv;
    const newCv = JSON.stringify(cv);
    try {
      const savedCv = await (await updateCv({ variables: { uid: state.user?.uid, newCv } })).data.updateCv;
      setCv(savedCv);
      setFormData(getFormData(savedCv));
    } catch (err) {
      setErrorSaveChanges(!!err);
      console.error(err);
    }
  };

  const handleHideError = () => {
    setErrorSaveChanges(false);
  };

  return (
    <Page boxSizing="border-box" loading={loading} error={error}>
      {formData && (
        <Formik
          validationSchema={formData.validationSchema}
          initialValues={formData.initialValues}
          enableReinitialize
          onSubmit={handleSaveChanges}
        >
          <Form>
            <Box display="flex" flexDirection="row" alignItems="flex-start">
              <Box boxSizing="border-box" width="27vw" paddingLeft={5}>
                {/* {basic info} */}
                <SimpleField
                  title="Name"
                  fieldName="fullName"
                  info={cv?.personalInfo?.fullName}
                  editComponent={formData.components.fullName}
                />
                <SimpleField
                  title="Email"
                  fieldName="email"
                  info={cv?.personalInfo?.email}
                  editComponent={formData.components.email}
                />
                <SimpleField
                  title="Phone"
                  fieldName="phone"
                  info={cv?.personalInfo?.phone}
                  editComponent={formData.components.phone}
                />
                <SimpleField
                  title="Address"
                  fieldName="address"
                  info={cv?.locationInfo?.address}
                  editComponent={formData.components.address}
                />
                <SimpleField
                  title="Websites"
                  fieldName="websites"
                  info={cv?.locationInfo?.websites}
                  editComponent={formData.components.websites}
                />
                <SimpleField
                  title="About me"
                  fieldName="about"
                  info={cv?.personalInfo?.about}
                  editComponent={formData.components.about}
                />
                <SimpleField
                  title="Languages"
                  fieldName="languages"
                  info={cv?.languages}
                  editComponent={formData.components.languages}
                />
              </Box>
              <Box
                boxSizing="border-box"
                width="43vw"
                paddingLeft={5}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                {/* {skills and experience} */}
                <Box width="100%" display="flex" justifyContent="space-between">
                  <SkillField
                    title="Hard skills"
                    fieldName="hardSkills"
                    skills={cv?.hardSkills}
                    editComponent={formData.components.hardSkills}
                    boxSizing="border-box"
                    width="50%"
                  />
                  <SkillField
                    title="Soft skills"
                    fieldName="softSkills"
                    skills={cv?.softSkills}
                    editComponent={formData.components.softSkills}
                    boxSizing="border-box"
                    width="50%"
                  />
                </Box>
                <Box width="100%" display="flex" flexDirection="column">
                  <ExperienceField
                    fieldName="educations"
                    title="Education"
                    experiences={cv?.educations}
                    editComponent={formData.components.educations}
                  />
                  <ExperienceField
                    title="Work experience"
                    fieldName="workExperiences"
                    experiences={cv?.workExperiences}
                    editComponent={formData.components.workExperiences}
                  />
                </Box>
              </Box>
              <Box boxSizing="border-box" width="29vw" paddingLeft={5} paddingRight={5}>
                {/* {cv preview and score} */}
                <PreviewField
                  score={cv?.score}
                  base64={dataPDF?.getPDF}
                  downloadLink={cv?.downloadLink}
                  onSelectTemplate={handleChangeTemplate}
                  loading={updateCvLoading}
                  fetchingPDF={loadingPDF}
                />
              </Box>
            </Box>
          </Form>
        </Formik>
      )}
      <Snackbar open={errorSaveChanges} onClose={handleHideError} autoHideDuration={5000}>
        <Alert severity="error">Could not update your CV!</Alert>
      </Snackbar>
    </Page>
  );
};

export default CvPage;
