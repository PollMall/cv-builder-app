import React, { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import { Box, BoxProps, IconButton, Button, Typography, ButtonGroup, CircularProgress } from '@material-ui/core';
import PreviewCv from '../../components/PreviewCv/PreviewCv';
import PieChart from '../../components/PieChart/PieChart';
import useStyles from './styles';
import CheckSvg from '../../images/CheckSvg';
import { Templates } from '../../types';

interface PreviewFieldProps extends BoxProps {
  score?: number;
  base64?: string;
  downloadLink?: string;
  onSelectTemplate?: (template: Templates) => void;
  loading?: boolean;
  fetchingPDF?: boolean;
}

const PreviewField = ({
  score,
  base64,
  downloadLink,
  onSelectTemplate,
  loading,
  fetchingPDF,
  ...rest
}: PreviewFieldProps) => {
  const classes = useStyles();
  const [field, , helper] = useField('template');
  const [updated, setUpdated] = useState(false);
  const { values, initialValues } = useFormikContext();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnClick = (template: Templates) => {
    onSelectTemplate && onSelectTemplate(template);
    helper.setValue(template);
  };

  React.useEffect(() => {
    if (JSON.stringify(values) !== JSON.stringify(initialValues)) {
      setUpdated(true);
    } else {
      setUpdated(false);
    }
  }, [values]);

  return (
    <Box display="flex" flexDirection="column" width="100%" {...rest} style={{ backgroundColor: 'transparent' }}>
      <Box width="100%" display="flex" justifyContent="space-evenly" marginBottom={1}>
        <PieChart value={score || 0} className={classes.chart} />
        <Box display="flex" flexDirection="column" alignContent="center">
          <Typography gutterBottom align="center" variant="caption">
            Templates
          </Typography>
          <ButtonGroup>
            {Object.keys(Templates).map((template) => (
              <Button
                key={template}
                color={field.value === template ? 'secondary' : 'primary'}
                className={classes.template}
                onClick={() => handleOnClick(template as Templates)}
              >
                {template}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>
      <Box position="relative" border="1px solid transparent">
        <PreviewCv className={classes.preview} base64={base64} scale={0.51} loading={loading || fetchingPDF} />
        {updated && (
          <>
            {loading ? (
              <CircularProgress color="secondary" size={100} className={classes.checkBtn} />
            ) : (
              <IconButton type="submit" className={classes.checkBtn}>
                <CheckSvg width={100} />
              </IconButton>
            )}
          </>
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
  loading: undefined,
  fetchingPDF: undefined,
};

export default PreviewField;
