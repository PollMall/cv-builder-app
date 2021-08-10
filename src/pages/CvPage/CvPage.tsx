import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../../components/Page/Page';
import { useQuery } from '@apollo/client';
import { GET_CV } from './api';
import { AuthContext } from '../../context/AuthContext';
import SimpleField from './SimpleField';
import SkillField from './SkillField';
import { Box } from '@material-ui/core';
import { useEffect } from 'react';
import { Cv } from '../../types';
import ExperienceField from './ExperienceField';
import PreviewField from './PreviewField';

const CvPage = () => {
  const { state } = useContext(AuthContext);
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useQuery(GET_CV, { variables: { uid: state.user?.uid, cvId: id } });
  const [cv, setCv] = useState<Cv | null>(null);

  useEffect(() => {
    if (data) {
      setCv(data.cv);
    }
  }, [data]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2>Error!</h2>;
  }

  return (
    <Page flexDirection="row" alignItems="flex-start">
      <Box width="27%" paddingLeft={5}>
        {/* {basic info} */}
        <SimpleField title="Name" info={cv?.personalInfo?.fullName} />
        <SimpleField title="Email" info={cv?.personalInfo?.email} />
        <SimpleField title="Phone" info={cv?.personalInfo?.phone} />
        <SimpleField title="Address" info={cv?.locationInfo?.address} />
        <SimpleField title="Websites" info={cv?.locationInfo?.websites} />
        <SimpleField title="About me" info={cv?.personalInfo?.about} />
        <SimpleField title="Languages" info={cv?.languages} />
      </Box>
      <Box boxSizing="border-box" width="43%" paddingLeft={5} display="flex" flexDirection="column" alignItems="center">
        {/* {skills and experience} */}
        <Box width="100%" display="flex" justifyContent="space-between">
          <SkillField title="Hard skills" skills={cv?.hardSkills} />
          <SkillField title="Soft skills" skills={cv?.softSkills} />
        </Box>
        <Box width="100%" display="flex" flexDirection="column">
          <ExperienceField title="Education" experiences={cv?.educations} />
          <ExperienceField title="Work experience" experiences={cv?.workExperiences} />
        </Box>
      </Box>
      <Box boxSizing="border-box" width="30%" display="flex" flexDirection="column" paddingLeft={5} paddingRight={5}>
        {/* {cv preview and score} */}
        <PreviewField score={cv?.score} cvTitle={cv?.title} />
      </Box>
    </Page>
  );
};

export default CvPage;
