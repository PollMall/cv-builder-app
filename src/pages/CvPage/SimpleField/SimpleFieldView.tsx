import React from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import useStyles from '../styles';

const renderMultilineFromText = (text: string) =>
  text.split('\n').map((line, idx) => (
    <Typography key={idx} variant="subtitle1">
      {line}
    </Typography>
  ));

interface SimpleFieldViewProps extends BoxProps {
  info?: string | string[];
}

const SimpleFieldView = ({ info, ...rest }: SimpleFieldViewProps) => {
  const classes = useStyles();

  return (
    <Box {...rest}>
      {typeof info === 'string' ? (
        <div className={classes.fieldInfo}>{renderMultilineFromText(info)}</div>
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
