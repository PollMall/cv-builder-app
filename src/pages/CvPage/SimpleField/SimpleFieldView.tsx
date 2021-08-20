import React from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import useStyles from '../styles';

interface SimpleFieldViewProps extends BoxProps {
  info?: string | string[];
}

const SimpleFieldView = ({ info, ...rest }: SimpleFieldViewProps) => {
  const classes = useStyles();

  return (
    <Box {...rest}>
      {typeof info === 'string' ? (
        <Typography variant="subtitle1" className={classes.fieldInfo}>
          {info}
        </Typography>
      ) : (
        info?.map((i) => (
          <Typography key={i} variant="subtitle1" className={classes.fieldInfo}>
            • {i}
          </Typography>
        ))
      )}
    </Box>
  );
};

SimpleFieldView.defaultProps = {
  info: undefined,
};

export default SimpleFieldView;
