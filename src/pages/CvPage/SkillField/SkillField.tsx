import React, { useState, FC, useEffect } from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import { useField } from 'formik';
import useStyles from '../styles';
import type { Skill } from '../../../types';
import SkillFieldView from './SkillFieldView';

interface SkillFieldProps extends BoxProps {
  title: string;
  fieldName: string;
  skills?: Skill[];
  editComponent: FC;
}

const SkillField = ({ title, fieldName, skills, editComponent, ...rest }: SkillFieldProps) => {
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
    <Box {...rest} className={classes.root} marginBottom={10}>
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
      {edit ? editComponent : <SkillFieldView skills={skills} />}
    </Box>
  );
};

SkillField.defaultProps = {
  info: undefined,
};

export default SkillField;
