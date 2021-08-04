import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../../components/Page/Page';
import { useQuery } from '@apollo/client';
import { GET_CV } from './api';
import { AuthContext } from '../../context/AuthContext';

const CvPage = () => {
  const { state } = useContext(AuthContext);
  const { id } = useParams<{ id: string }>();
  const { data, error, loading } = useQuery(GET_CV, { variables: { uid: state.user?.uid, cvId: id } });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error!</h2>;
  }

  console.log(data);

  return (
    <Page>
      <h2>cv page {data.cv.title}</h2>
    </Page>
  );
};

export default CvPage;
