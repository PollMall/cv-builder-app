import React from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import useStyles from '../styles';
import { Education, WorkExperience } from '../../../types';

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
          <Typography component="span" variant="subtitle1" className={classes.locationName}>
            {' '}
            - {e.location}
          </Typography>
          <Typography gutterBottom component="p" variant="caption">
            {e.startAt ? new Date(parseInt(e.startAt, 10)).toLocaleDateString('en-US') : 'PRESENT'} -{' '}
            {e.endAt ? new Date(parseInt(e.endAt, 10)).toLocaleDateString('en-US') : 'PRESENT'}
          </Typography>
          {e.description && (
            <Typography component="p" variant="body1" className={classes.description}>
              • {e.description}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

ExperienceFieldView.defaultProps = {
  experiences: undefined,
};

export default ExperienceFieldView;
