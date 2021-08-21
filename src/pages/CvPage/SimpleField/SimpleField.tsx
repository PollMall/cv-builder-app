import React, { useState, FC, useEffect } from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import useStyles from '../styles';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import SimpleFieldView from './SimpleFieldView';
import { useField } from 'formik';

interface SimpleFieldProps extends BoxProps {
  title: string;
  fieldName: string;
  info?: string | string[];
  editComponent: FC;
}

const SimpleField = ({ title, fieldName, info, editComponent, ...rest }: SimpleFieldProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const [edit, setEdit] = useState(false);
  const classes = useStyles();
  const [, meta, helper] = useField(fieldName);

  const handleEnterHover = () => {
    setShowEdit(true);
  };

  const handleExitHover = () => {
    setShowEdit(false);
  };

  const handleClickEdit = () => {
    setEdit((prev) => !prev);
  };

  useEffect(() => {
    if (!edit) {
      helper.setValue(meta.initialValue);
    }
  }, [edit]);

  return (
    <Box {...rest} className={classes.root}>
      <Box
        display="flex"
        alignItems="center"
        className={classes.fieldNameContainer}
        onMouseOver={handleEnterHover}
        onMouseOut={handleExitHover}
        onClick={handleClickEdit}
      >
        <Typography variant="h5" className={classes.fieldName}>
          {title}
        </Typography>
        {!edit && showEdit && <EditIcon color="secondary" fontSize="small" className={classes.icon} />}
        {edit && <CancelIcon color="secondary" fontSize="small" className={classes.icon} />}
      </Box>
      {edit ? editComponent : <SimpleFieldView info={info} />}
    </Box>
  );
};

SimpleField.defaultProps = {
  info: undefined,
  rows: undefined,
};

export default SimpleField;
