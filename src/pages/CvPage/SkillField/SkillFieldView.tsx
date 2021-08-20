import React from 'react';
import { Box, Typography, BoxProps, LinearProgress } from '@material-ui/core';
import useStyles from '../styles';
import { HardSkill, SoftSkill } from '../../../types';

interface SkillFieldViewProps extends BoxProps {
  skills?: HardSkill[] | SoftSkill[];
}

const SkillFieldView = ({ skills, ...rest }: SkillFieldViewProps) => {
  const classes = useStyles();

  return (
    <Box {...rest}>
      {skills?.map((s) => (
        <div key={s.name} className={classes.fieldInfo}>
          <Typography variant="subtitle1">{s.name}</Typography>
          <LinearProgress variant="determinate" value={(s.rating * 100) / 5} className={classes.rating} />
        </div>
      ))}
    </Box>
  );
};

SkillFieldView.defaultProps = {
  info: undefined,
};

export default SkillFieldView;
