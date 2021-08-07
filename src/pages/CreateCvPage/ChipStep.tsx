import React from 'react';
import { useField } from 'formik';
import { Chip, Box, Typography, BoxProps } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Input from '../../components/FormInputs/FormikInput';
import useStyles from './styles';

interface ChipStepProps extends BoxProps {
  inputName: string;
  arrayInputName: string;
  title: string;
  ChipBoxProps?: BoxProps;
}

const ChipStep = ({ inputName, arrayInputName, title, ChipBoxProps, ...rest }: ChipStepProps) => {
  const [arrayField, , arrayHelpers] = useField(arrayInputName);
  const [field, , helper] = useField(inputName);
  const classes = useStyles();

  const handleAdd = () => {
    arrayHelpers.setValue(arrayField.value.concat(field.value));
    helper.setValue('');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" {...rest}>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="" width="100%">
        <Input
          name={inputName}
          endIcon={<AddIcon color="primary" />}
          onClickEndIcon={handleAdd}
          disabledEndIcon={!field.value}
        />
        <Box className={classes.overflowContent} maxHeight={150} {...ChipBoxProps}>
          {arrayField.value?.map((val: string) => (
            <Chip
              key={val}
              style={{ alignSelf: 'flex-start', marginBottom: 8 }}
              label={val}
              variant="outlined"
              onDelete={() => arrayHelpers.setValue(arrayField.value.filter((el: string) => el !== val))}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

ChipStep.defaultProps = {
  ChipBoxProps: undefined,
};

export default ChipStep;
