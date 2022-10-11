import React, { useContext, useState, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Page from '../../components/Page/Page';
import { useQuery, useLazyQuery, useMutation } from '@apollo/client';
import { GET_CV, GET_PDF, UPDATE_CV, DELETE_CV } from './api';
import { AuthContext } from '../../context/AuthContext';
import SkillField from './SkillField/SkillField';
import { Box, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useEffect } from 'react';
import type { Cv, PersonalInfo, Templates, UnratableSkill, RatableSkill } from '../../types';
import ExperienceField from './ExperienceField/ExperienceField';
import ProjectField from './ProjectField/ProjectField';
import PreviewField from './PreviewField';
import { FormData, getFormData } from './utils';
import { CvPageBasicInfoSection } from './CvPageBasicInfoSection';
import useStyles from './styles';

type Skill = UnratableSkill & RatableSkill;

const CvPage = () => {
  const { state } = useContext(AuthContext);
  const { id } = useParams<{ id: string }>();
  const { goBack } = useHistory();
  const { data, error, loading: getCvLoading } = useQuery(GET_CV, { variables: { uid: state.user?.uid, cvId: id } });
  const [updateCv, { loading: updateCvLoading }] = useMutation(UPDATE_CV);
  const [deleteCv, { loading: deleteCvLoading }] = useMutation(DELETE_CV);
  const [cv, setCv] = useState<Cv | null>(null);
  const [getPDF, { data: dataPDF, loading: loadingPDF }] = useLazyQuery(GET_PDF);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [errorChanges, setErrorChanges] = useState('');
  const classes = useStyles();

  const loadingPreview = updateCvLoading || deleteCvLoading;

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
      personalInfo: { fullName, email, phone, about, address, websites } as PersonalInfo,
    } as Cv;
    const newCv = JSON.stringify(cv);
    try {
      const savedCv = await (await updateCv({ variables: { uid: state.user?.uid, newCv } })).data.updateCv;
      setCv(savedCv);
      setFormData(getFormData(savedCv));
    } catch (err) {
      setErrorChanges('Could not update your CV!');
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteCv({ variables: { uid: state.user?.uid, cvId: id } });
      goBack();
    } catch (err) {
      setErrorChanges('Could not delete your CV!');
    }
  };

  const mappedHardSkills = useMemo(
    () => cv?.hardSkills?.map((hs) => ({ ...hs, kind: 'hardSkill' } as RatableSkill)),
    [cv?.hardSkills],
  );

  const mappedSoftSkills = useMemo(
    () => cv?.softSkills?.map((ss) => ({ ...ss, kind: 'softSkill' } as UnratableSkill)),
    [cv?.softSkills],
  );

  const mappedOtherTools = useMemo(
    () => cv?.otherTools?.map((ot) => ({ ...ot, kind: 'otherTools' } as UnratableSkill)),
    [cv?.otherTools],
  );

  const handleHideError = () => {
    setErrorChanges('');
  };

  return (
    <Page
      boxSizing="border-box"
      loading={getCvLoading}
      error={error}
      alignItems="flex-start"
      justifyContent="flex-start"
      paddingLeft={10}
      paddingTop={16}
    >
      {formData && (
        <Formik
          validationSchema={formData.validationSchema}
          initialValues={formData.initialValues}
          enableReinitialize
          onSubmit={handleSaveChanges}
        >
          <Form>
            <Box display="flex" flexDirection="row" flexWrap="wrap" alignItems="flex-start" gridGap={16}>
              <div className={classes.basicInfoContainer}>
                <CvPageBasicInfoSection
                  fullName={cv!.personalInfo!.fullName}
                  email={cv!.personalInfo!.email}
                  phone={cv?.personalInfo?.phone}
                  address={cv?.personalInfo?.address}
                  websites={cv?.personalInfo?.websites}
                  about={cv?.personalInfo?.about}
                  languages={cv?.languages}
                  editComponents={formData.components}
                />
              </div>

              {/* {skills and experience} */}
              <Box
                width={700}
                marginRight={400 / 8}
                boxSizing="border-box"
                display="flex"
                flexGrow={1}
                flexDirection="column"
              >
                <SkillField
                  isRatable
                  title="Hard skills"
                  fieldName="hardSkills"
                  skills={mappedHardSkills}
                  editComponent={formData.components.hardSkills}
                  boxSizing="border-box"
                  width="50%"
                />
                <SkillField
                  title="Soft skills"
                  fieldName="softSkills"
                  skills={mappedSoftSkills as Skill[]}
                  editComponent={formData.components.softSkills}
                  boxSizing="border-box"
                  width="50%"
                />
                <SkillField
                  title="Other tools"
                  fieldName="otherTools"
                  skills={mappedOtherTools as Skill[]}
                  editComponent={formData.components.otherTools}
                  boxSizing="border-box"
                  width="50%"
                />
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
                <ProjectField
                  title="Projects"
                  fieldName="projects"
                  projects={cv?.projects}
                  editComponent={formData.components.projects}
                />
              </Box>

              {/* {cv preview and score} */}
              <div className={classes.cvPreviewContainer}>
                <PreviewField
                  score={cv?.score}
                  base64={dataPDF?.getPDF}
                  downloadLink={cv?.downloadLink}
                  onSelectTemplate={handleChangeTemplate}
                  onDeleteCv={handleDelete}
                  loading={loadingPreview}
                  fetchingPDF={loadingPDF}
                />
              </div>
            </Box>
          </Form>
        </Formik>
      )}
      <Snackbar open={!!errorChanges} onClose={handleHideError} autoHideDuration={5000}>
        <Alert severity="error">{errorChanges}</Alert>
      </Snackbar>
    </Page>
  );
};

export default CvPage;
