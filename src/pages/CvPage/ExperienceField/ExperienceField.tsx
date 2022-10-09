import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from '../styles';
import { Education, WorkExperience } from '../../../types';
import ExperienceFieldView from './ExperienceFieldView';
import { useField } from 'formik';

interface ExperienceFieldProps extends BoxProps {
  title: string;
  fieldName: string;
  experiences?: Education[] | WorkExperience[];
  editComponent: ReactNode;
}

const ExperienceField = ({ title, fieldName, experiences, editComponent, ...rest }: ExperienceFieldProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const [edit, setEdit] = useState(false);
  const classes = useStyles();
  const [, meta, helper] = useField(fieldName);

  const handleEnterHover = () => {
    setShowEdit(true);
  };

  const handleExitHover = () => {
    setShowEdit(false);
  };

  const handleClickEdit = () => {
    setEdit((prev) => !prev);
  };

  useEffect(() => {
    if (!edit) {
      helper.setValue(meta.initialValue);
    }
  }, [edit]);

  return (
    <Box {...rest} width="75%" className={classes.root}>
      <Box
        display="flex"
        alignItems="center"
        className={classes.fieldNameContainer}
        onMouseOver={handleEnterHover}
        onMouseOut={handleExitHover}
        onClick={handleClickEdit}
      >
        <Typography variant="h5" className={classes.fieldName}>
          {title}
        </Typography>
        {!edit && showEdit && <EditIcon color="secondary" fontSize="small" className={classes.icon} />}
        {edit && <CancelIcon color="secondary" fontSize="small" className={classes.icon} />}
      </Box>
      {edit ? editComponent : <ExperienceFieldView experiences={experiences} />}
    </Box>
  );
};

ExperienceField.defaultProps = {
  experiences: undefined,
};

export default ExperienceField;
