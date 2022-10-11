import React from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import useStyles from '../styles';
import type { Project } from '../../../types';

const renderMultilineFromText = (text: string) =>
  text.split('\n').map((line, idx) => (
    <Typography key={idx} component="p" variant="body1">
      {line}
    </Typography>
  ));

interface ProjectFieldViewProps extends BoxProps {
  projects?: Project[];
}

const ProjectFieldView = ({ projects, ...rest }: ProjectFieldViewProps) => {
  const classes = useStyles();

  return (
    <Box {...rest}>
      {projects?.map((proj) => (
        <Box key={proj.id} className={classes.fieldInfo}>
          <Typography component="span" variant="h6" className={classes.institutionName}>
            {proj.name}
          </Typography>
          {proj?.title ? (
            <Typography component="span" variant="subtitle2" className={classes.title}>
              {' '}
              - {proj.title}
            </Typography>
          ) : (
            ''
          )}
          {proj?.description && <div className={classes.description}>{renderMultilineFromText(proj.description)}</div>}
        </Box>
      ))}
    </Box>
  );
};

ProjectFieldView.defaultProps = {
  projects: undefined,
};

export default ProjectFieldView;
