import React, { useState } from 'react';
import { Box, BoxProps, IconButton, Button, Typography, ButtonGroup } from '@material-ui/core';
import PreviewCv from '../../components/PreviewCv/PreviewCv';
import PieChart from '../../components/PieChart/PieChart';
import useStyles from './styles';
import CheckSvg from '../../images/CheckSvg';
import { Templates } from '../../types';

interface PreviewFieldProps extends BoxProps {
  score?: number;
  updated?: boolean;
  base64?: string;
  downloadLink?: string;
  onSelectTemplate?: (template: Templates) => void;
}

const PreviewField = ({ score, updated, base64, downloadLink, onSelectTemplate, ...rest }: PreviewFieldProps) => {
  const classes = useStyles();
  const [template, setTemplate] = useState(Templates.NORMAL);

  const handleOnClick = (template: Templates) => {
    onSelectTemplate && onSelectTemplate(template);
    setTemplate(template);
  };

  return (
    <Box display="flex" flexDirection="column" {...rest} style={{ backgroundColor: 'transparent' }}>
      <Box width="100%" display="flex" justifyContent="space-evenly" marginBottom={1}>
        <PieChart value={score || 0} className={classes.chart} />
        <Box display="flex" flexDirection="column" alignContent="center">
          <Typography gutterBottom align="center" variant="caption">
            Templates
          </Typography>
          <ButtonGroup>
            <Button
              color={template === Templates.NORMAL ? 'secondary' : 'primary'}
              className={classes.template}
              onClick={() => handleOnClick(Templates.NORMAL)}
            >
              Normal
            </Button>
            <Button
              color={template === Templates.COMPACT ? 'secondary' : 'primary'}
              className={classes.template}
              onClick={() => handleOnClick(Templates.COMPACT)}
            >
              Compact
            </Button>
            {/* <Button color="primary" className={classes.template} onClick={handleOnClick}>
              Fancy
            </Button> */}
          </ButtonGroup>
        </Box>
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
  updated: undefined,
  base64: undefined,
  downloadLink: undefined,
  onSelectTemplate: undefined,
};

export default PreviewField;
