import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Page from '../../components/Page/Page';
import CvHeader from './CvHeader';
import CvRow from './CvRow';
import { useQuery } from '@apollo/client';
import { GET_ALL_CVS } from './api';
import { AuthContext } from '../../context/AuthContext';
import { Cv } from '../../types';
import { Box, Typography } from '@material-ui/core';

enum SortMethod {
  DATE = 'DATE',
  SCORE = 'SCORE',
}

const AllCvsPage = () => {
  const [descDate, setDescDate] = useState(true);
  const [descScore, setDescScore] = useState(true);
  const [sortBy, setSortBy] = useState(SortMethod.DATE);
  const { state } = useContext(AuthContext);
  const { data, loading, error } = useQuery(GET_ALL_CVS, {
    variables: { idToken: state.user?.credentials?.idToken, uid: state.user?.uid },
    fetchPolicy: 'cache-and-network',
  });
  const { push } = useHistory();

  const handleSortByDate = () => {
    setDescDate((prev) => !prev);
    setSortBy(SortMethod.DATE);
  };

  const handleSortByScore = () => {
    setDescScore((prev) => !prev);
    setSortBy(SortMethod.SCORE);
  };

  const sortCvsByDate = (a: Cv, b: Cv) => {
    const dateA = parseInt(a.updatedAt, 10);
    const dateB = parseInt(b.updatedAt, 10);
    return dateA !== dateB
      ? descDate
        ? dateB - dateA
        : dateA - dateB
      : descScore
      ? b.score - a.score
      : a.score - b.score;
  };

  const sortCvsByScore = (a: Cv, b: Cv) => {
    const dateA = parseInt(a.updatedAt, 10);
    const dateB = parseInt(b.updatedAt, 10);
    return a.score !== b.score
      ? descScore
        ? b.score - a.score
        : a.score - b.score
      : descDate
      ? dateB - dateA
      : dateA - dateB;
  };

  return (
    <Page
      boxSizing="border-box"
      paddingTop={10}
      paddingBottom={10}
      justifyContent="flex-start"
      loading={loading}
      error={error}
    >
      <CvHeader
        descDate={descDate}
        descScore={descScore}
        onClickDate={handleSortByDate}
        onClickScore={handleSortByScore}
      />
      {data?.cvs.length ? (
        [...data?.cvs]
          .sort(sortBy === SortMethod.DATE ? sortCvsByDate : sortCvsByScore)
          .map((data: Cv) => (
            <CvRow
              key={data.id}
              title={data.title}
              date={data.updatedAt}
              score={data.score}
              onClick={() => push(`/cv/${data?.id}`)}
            />
          ))
      ) : (
        <Box display="flex" alignItems="center" height="50vh">
          <Typography variant="h6">You don&apos;t have any CVs yet</Typography>
        </Box>
      )}
    </Page>
  );
};

export default AllCvsPage;
