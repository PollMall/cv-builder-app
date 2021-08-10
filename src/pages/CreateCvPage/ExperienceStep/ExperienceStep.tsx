import React, { ChangeEvent } from 'react';
import { useField } from 'formik';
import { Box, Typography, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import Input from '../../../components/FormInputs/FormikInput';
import AddIcon from '@material-ui/icons/Add';
import useStyles from '../styles';
import ExperienceCard from './ExperienceCard';
import { Education, WorkExperience } from '../../../types';

interface ExperienceStepProps {
  title: string;
  inputName: string;
  arrayInputName: string;
}

type Experience = Education | WorkExperience;

const ExperienceStep = ({ title, inputName, arrayInputName }: ExperienceStepProps) => {
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
    console.log(event.target.value);
    startAtHelper.setValue(new Date(event.target.value).getTime().toString());
  };

  const handleChangeEndDate = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    endAtHelper.setValue(new Date(event.target.value).getTime().toString());
  };

  const descSortByEndAt = (a: Experience, b: Experience) => {
    const aStartAt = a.startAt ? parseInt(a.startAt, 10) : 0;
    const bStartAt = b.startAt ? parseInt(b.startAt, 10) : 0;
    return bStartAt - aStartAt;
  };

  return (
    <Box display="flex" justifyContent="space-around">
      <Box display="flex" flexDirection="column">
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Input name={`${inputName}.name`} placeholder="Name" />
        <Input name={`${inputName}.description`} multiline rows={2} placeholder="Description" />
        <Input name={`${inputName}.location`} placeholder="Location" />
        <Input
          name={`${inputName}.startAt`}
          onChange={handleChangeStartDate}
          value={startAtField.value && new Date(parseInt(startAtField.value, 10)).toISOString().split('T')[0]}
          label="Start date"
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <Input
          disabled={presentField.value}
          name={`${inputName}.endAt`}
          onChange={handleChangeEndDate}
          value={endAtField.value && new Date(parseInt(endAtField.value, 10)).toISOString().split('T')[0]}
          type="date"
          label="End date"
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
        {arrayInputField.value?.sort(descSortByEndAt).map((exp: Experience, idx: number) => (
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

export default ExperienceStep;
