import React, { ChangeEvent } from 'react';
import { useField } from 'formik';
import { Box, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import Input from './FormikInput';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';
import ExperienceCard from './ExperienceCard';
import type { Education, WorkExperience } from '../../types';
import { descSortExperienceByStartAt } from '../../utils';

const fromTimestampToMonthYearFormat = (date: string) => {
  const dateISOStringElements = new Date(parseInt(date, 10)).toISOString().split('-');
  return `${dateISOStringElements[0]}-${dateISOStringElements[1]}`;
};

interface FormikExperienceInputProps {
  inputName: string;
  arrayInputName: string;
}

type Experience = Education | WorkExperience;

const FormikExperienceInput = ({ inputName, arrayInputName }: FormikExperienceInputProps) => {
  const classes = useStyles();
  const [inputField, inputMeta, inputHelper] = useField(inputName);
  const [arrayInputField, , arrayInputHelper] = useField(arrayInputName);
  const [presentField] = useField(`${inputName}.present`);
  const [startAtField, , startAtHelper] = useField(`${inputName}.startAt`);
  const [endAtField, , endAtHelper] = useField(`${inputName}.endAt`);

  const handleAdd = () => {
    if (presentField.value === true) {
      arrayInputHelper.setValue(arrayInputField.value.concat({ ...inputField.value, endAt: '' }));
    } else {
      arrayInputHelper.setValue(arrayInputField.value.concat(inputField.value));
    }
    inputHelper.setValue(inputMeta.initialValue);
  };

  const handleDelete = (experience: Experience) => {
    arrayInputHelper.setValue(
      arrayInputField.value?.filter((el: Experience) => JSON.stringify(el) !== JSON.stringify(experience)),
    );
  };

  const handleChangeStartDate = (event: ChangeEvent<HTMLInputElement>) => {
    startAtHelper.setValue(new Date(event.target.value).getTime().toString());
  };

  const handleChangeEndDate = (event: ChangeEvent<HTMLInputElement>) => {
    endAtHelper.setValue(new Date(event.target.value).getTime().toString());
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" flexDirection="column" width="45%">
        <Input name={`${inputName}.name`} placeholder="Name" />
        <Input name={`${inputName}.title`} placeholder="Title" />
        <Input name={`${inputName}.description`} multiline minRows={8} maxRows={8} placeholder="Description" />
        <Input name={`${inputName}.location`} placeholder="Location" />
        <Input
          name={`${inputName}.startAt`}
          onChange={handleChangeStartDate}
          value={startAtField.value && fromTimestampToMonthYearFormat(startAtField.value)}
          label="Start date"
          type="month"
          InputLabelProps={{ shrink: true }}
        />
        <Input
          disabled={presentField.value}
          name={`${inputName}.endAt`}
          onChange={handleChangeEndDate}
          value={endAtField.value && fromTimestampToMonthYearFormat(endAtField.value)}
          label="End date"
          type="month"
          InputLabelProps={{ shrink: true }}
          style={{ marginBottom: 0 }}
        />
        <FormControlLabel
          className={classes.presentCheckbox}
          control={<Checkbox size="small" checked={presentField.value} {...presentField} color="primary" />}
          label="Present?"
          labelPlacement="start"
        />
        <Button className={classes.addBtn} startIcon={<AddIcon />} onClick={handleAdd}>
          add
        </Button>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="flex-start" className={classes.cardsContainer}>
        {arrayInputField.value
          ?.slice()
          .sort(descSortExperienceByStartAt)
          .map((exp: Experience, idx: number) => (
            <ExperienceCard
              key={idx}
              {...exp}
              raised={false}
              className={classes.roundedCard}
              onDelete={() => handleDelete(exp)}
            />
          ))}
      </Box>
    </Box>
  );
};

export default FormikExperienceInput;
