import React from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import useStyles from '../styles';
import type { Education, WorkExperience } from '../../../types';

const fromTimestampToMonthYearFormat = (stringDate: string) => {
  const date = new Date(parseInt(stringDate, 10));
  const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const renderMultilineFromText = (text: string) =>
  text.split('\n').map((line, idx) => (
    <Typography key={idx} component="p" variant="body1">
      {line}
    </Typography>
  ));

interface ExperienceFieldViewProps extends BoxProps {
  experiences?: Education[] | WorkExperience[];
}

const ExperienceFieldView = ({ experiences, ...rest }: ExperienceFieldViewProps) => {
  const classes = useStyles();

  return (
    <Box {...rest}>
      {experiences?.map((e) => (
        <Box key={e.id} className={classes.fieldInfo}>
          <Typography component="span" variant="h6" className={classes.institutionName}>
            {e.name}
          </Typography>
          {e?.location ? (
            <Typography component="span" variant="subtitle2" className={classes.locationName}>
              , {e.location}
            </Typography>
          ) : (
            ''
          )}
          {e?.title ? (
            <Typography component="span" variant="subtitle2" className={classes.title}>
              {' '}
              - {e.title}
            </Typography>
          ) : (
            ''
          )}
          <Typography gutterBottom component="p" variant="caption">
            {e.startAt ? fromTimestampToMonthYearFormat(e.startAt) : 'PRESENT'} -{' '}
            {e.endAt ? fromTimestampToMonthYearFormat(e.endAt) : 'PRESENT'}
          </Typography>
          {e?.description && <div className={classes.description}>{renderMultilineFromText(e.description)}</div>}
        </Box>
      ))}
    </Box>
  );
};

ExperienceFieldView.defaultProps = {
  experiences: undefined,
};

export default ExperienceFieldView;
