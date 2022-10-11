import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import { useField } from 'formik';
import useStyles from '../styles';
import type { UnratableSkill, RatableSkill } from '../../../types';
import SkillFieldView from './SkillFieldView';

type Skill = UnratableSkill & RatableSkill;

interface SkillFieldProps extends BoxProps {
  isRatable?: boolean;
  title: string;
  fieldName: string;
  skills?: Skill[];
  editComponent: ReactNode;
}

const SkillField = ({ isRatable = false, title, fieldName, skills, editComponent, ...rest }: SkillFieldProps) => {
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
      {edit ? editComponent : <SkillFieldView isRatable={isRatable} skills={skills} />}
    </Box>
  );
};

SkillField.defaultProps = {
  info: undefined,
};

export default SkillField;
