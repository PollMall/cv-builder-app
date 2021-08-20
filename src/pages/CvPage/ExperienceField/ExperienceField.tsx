import React, { useState, FC } from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from '../styles';
import { Education, WorkExperience } from '../../../types';
import ExperienceFieldView from './ExperienceFieldView';

interface ExperienceFieldProps extends BoxProps {
  title: string;
  experiences?: Education[] | WorkExperience[];
  editComponent: FC;
}

const ExperienceField = ({ title, experiences, editComponent, ...rest }: ExperienceFieldProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const [edit, setEdit] = useState(false);
  const classes = useStyles();

  const handleEnterHover = () => {
    setShowEdit(true);
  };

  const handleExitHover = () => {
    setShowEdit(false);
  };

  const handleClickEdit = () => {
    setEdit(true);
  };

  return (
    <Box
      {...rest}
      // border="1px solid red"
      width="75%"
      onMouseOver={handleEnterHover}
      onMouseOut={handleExitHover}
      onClick={handleClickEdit}
      className={classes.root}
    >
      <Box display="flex" alignItems="center" className={classes.fieldNameContainer}>
        <Typography variant="h5" className={classes.fieldName}>
          {title}
        </Typography>
        {!edit && showEdit && <EditIcon color="secondary" fontSize="small" className={classes.icon} />}
      </Box>
      {edit ? editComponent : <ExperienceFieldView experiences={experiences} />}
    </Box>
  );
};

ExperienceField.defaultProps = {
  experiences: undefined,
};

export default ExperienceField;
