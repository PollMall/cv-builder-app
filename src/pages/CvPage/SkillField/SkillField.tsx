import React, { useState, FC } from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from '../styles';
import { HardSkill, SoftSkill } from '../../../types';
import SkillFieldView from './SkillFieldView';

interface SkillFieldProps extends BoxProps {
  title: string;
  skills?: HardSkill[] | SoftSkill[];
  editComponent: FC;
}

const SkillField = ({ title, skills, editComponent, ...rest }: SkillFieldProps) => {
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
      onMouseOver={handleEnterHover}
      onMouseOut={handleExitHover}
      onClick={handleClickEdit}
      className={classes.root}
      marginBottom={10}
    >
      <Box display="flex" alignItems="center" className={classes.fieldNameContainer}>
        <Typography variant="h5" className={classes.fieldName}>
          {title}
        </Typography>
        {!edit && showEdit && <EditIcon color="secondary" fontSize="small" className={classes.icon} />}
      </Box>
      {edit ? editComponent : <SkillFieldView skills={skills} />}
    </Box>
  );
};

SkillField.defaultProps = {
  info: undefined,
};

export default SkillField;
