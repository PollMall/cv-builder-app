import React, { useState } from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';
import { Education, WorkExperience } from '../../types';

interface ExperienceFieldProps extends BoxProps {
  title: string;
  experiences?: Education[] | WorkExperience[];
}

const ExperienceField = ({ title, experiences, ...rest }: ExperienceFieldProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const classes = useStyles({ icon: showEdit });

  const handleEnterHover = () => {
    setShowEdit(true);
  };

  const handleExitHover = () => {
    setShowEdit(false);
  };

  return (
    <Box
      {...rest}
      // border="1px solid red"
      width="75%"
      onMouseOver={handleEnterHover}
      onMouseOut={handleExitHover}
      className={classes.root}
    >
      <Box display="flex" alignItems="center" className={classes.fieldNameContainer}>
        <Typography variant="h5" className={classes.fieldName}>
          {title}
        </Typography>
        <EditIcon color="secondary" fontSize="small" className={classes.icon} />
      </Box>
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

ExperienceField.defaultProps = {
  experiences: undefined,
};

export default ExperienceField;
