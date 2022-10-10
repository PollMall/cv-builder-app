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
  onDeleteCv: () => void;
  loading?: boolean;
  fetchingPDF?: boolean;
}

const PreviewField = ({
  score,
  base64,
  downloadLink,
  onSelectTemplate,
  onDeleteCv,
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

  const disabledBtn = !base64 || !downloadLink || loading;

  return (
    <Box display="flex" flexDirection="column" {...rest} style={{ backgroundColor: 'transparent' }} gridGap={10}>
      <Box width="100%" display="flex" justifyContent="center" gridGap={10}>
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
      <Box position="relative" justifyContent="center" alignItems="center">
        <PreviewCv base64={base64} height={500} loading={loading || fetchingPDF} />
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
      <Box width={200} display="flex" flexDirection="column" alignItems="flex-end" alignSelf="center" gridGap={10}>
        <Button
          fullWidth
          component="a"
          target="_blank"
          href={downloadLink}
          disabled={disabledBtn}
          variant="contained"
          color="primary"
          className={classes.downloadBtn}
        >
          open CV
        </Button>
        <Button fullWidth disabled={disabledBtn} variant="outlined" className={classes.deleteBtn} onClick={onDeleteCv}>
          Delete
        </Button>
      </Box>
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
