import React from 'react';
import { Box, BoxProps, IconButton, Button } from '@material-ui/core';
import PreviewCv from '../../components/PreviewCv/PreviewCv';
import PieChart from '../../components/PieChart/PieChart';
import useStyles from './styles';
import CheckSvg from '../../images/CheckSvg';

interface PreviewFieldProps extends BoxProps {
  score?: number;
  updated?: boolean;
  base64?: string;
  downloadLink?: string;
}

const PreviewField = ({ score, updated, base64, downloadLink, ...rest }: PreviewFieldProps) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" {...rest} style={{ backgroundColor: 'transparent' }}>
      <Box width="100%" display="flex" justifyContent="center" marginBottom={1}>
        <PieChart value={score || 0} className={classes.chart} />
      </Box>
      <Box position="relative" border="1px solid transparent">
        <PreviewCv className={classes.preview} base64={base64} scale={0.51} />
        {updated && (
          <IconButton className={classes.checkBtn}>
            <CheckSvg width={100} />
          </IconButton>
        )}
      </Box>
      <Button
        component="a"
        target="_blank"
        href={downloadLink}
        disabled={!base64 || !downloadLink}
        variant="contained"
        color="primary"
        className={classes.downloadBtn}
      >
        open CV
      </Button>
    </Box>
  );
};

PreviewField.defaultProps = {
  score: undefined,
  cvTitle: undefined,
  updated: undefined,
  base64: undefined,
  downloadLink: undefined,
};

export default PreviewField;
