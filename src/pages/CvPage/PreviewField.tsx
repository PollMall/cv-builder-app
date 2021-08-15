import React from 'react';
import { Box, BoxProps, IconButton, Typography } from '@material-ui/core';
import PreviewCv from '../../components/PreviewCv/PreviewCv';
import PieChart from '../../components/PieChart/PieChart';
import useStyles from './styles';
import CheckSvg from '../../images/CheckSvg';

interface PreviewFieldProps extends BoxProps {
  score?: number;
  cvTitle?: string;
  updated?: boolean;
  base64?: string;
}

const PreviewField = ({ score, cvTitle, updated, base64, ...rest }: PreviewFieldProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" {...rest} style={{ backgroundColor: 'transparent' }}>
      <Box width="100%" display="flex" justifyContent="center" marginBottom={1}>
        <PieChart value={score || 0} className={classes.chart} />
      </Box>
      <Box position="relative">
        <PreviewCv className={classes.preview} base64={base64} scale={0.51} />
        {updated && (
          <IconButton className={classes.checkBtn}>
            <CheckSvg width={100} />
          </IconButton>
        )}
      </Box>
      <Typography align="center" variant="subtitle1">
        {cvTitle}
      </Typography>
    </Box>
  );
};

PreviewField.defaultProps = {
  score: undefined,
  cvTitle: undefined,
  updated: undefined,
  base64: undefined,
};

export default PreviewField;
