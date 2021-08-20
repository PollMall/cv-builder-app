import React, { useState } from 'react';
import { Box, Typography, BoxProps, LinearProgress } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './styles';
import { HardSkill, SoftSkill } from '../../types';

interface SkillFieldProps extends BoxProps {
  title: string;
  skills?: HardSkill[] | SoftSkill[];
}

const SkillField = ({ title, skills, ...rest }: SkillFieldProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const classes = useStyles();

  const handleEnterHover = () => {
    setShowEdit(true);
  };

  const handleExitHover = () => {
    setShowEdit(false);
  };

  return (
    <Box
      {...rest}
      onMouseOver={handleEnterHover}
      onMouseOut={handleExitHover}
      className={classes.root}
      marginBottom={10}
    >
      <Box display="flex" alignItems="center" className={classes.fieldNameContainer}>
        <Typography variant="h5" className={classes.fieldName}>
          {title}
        </Typography>
        {showEdit && <EditIcon color="secondary" fontSize="small" className={classes.icon} />}
      </Box>
      {skills?.map((s) => (
        <div key={s.name} className={classes.fieldInfo}>
          <Typography variant="subtitle1">{s.name}</Typography>
          <LinearProgress variant="determinate" value={(s.rating * 100) / 5} className={classes.rating} />
        </div>
      ))}
    </Box>
  );
};

SkillField.defaultProps = {
  info: undefined,
};

export default SkillField;
