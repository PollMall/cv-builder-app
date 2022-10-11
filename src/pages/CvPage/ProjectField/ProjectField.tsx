import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useField } from 'formik';
import { Box, Typography, BoxProps } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import useStyles from '../styles';
import type { Project } from '../../../types';
import ProjectFieldView from './ProjectFieldView';

interface ExperienceFieldProps extends BoxProps {
  title: string;
  fieldName: string;
  projects?: Project[];
  editComponent: ReactNode;
}

const ExperienceField = ({ title, fieldName, projects, editComponent, ...rest }: ExperienceFieldProps) => {
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
    <Box {...rest} width="100%" className={classes.root}>
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
      {edit ? editComponent : <ProjectFieldView projects={projects} />}
    </Box>
  );
};

ExperienceField.defaultProps = {
  projects: undefined,
};

export default ExperienceField;
