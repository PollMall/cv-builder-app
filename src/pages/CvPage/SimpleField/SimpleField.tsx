import React, { useState, FC } from 'react';
import { Box, Typography, BoxProps } from '@material-ui/core';
import useStyles from '../styles';
import EditIcon from '@material-ui/icons/Edit';
import SimpleFieldView from './SimpleFieldView';

interface SimpleFieldProps extends BoxProps {
  title: string;
  info?: string | string[];
  editComponent: FC;
}

const SimpleField = ({ title, info, editComponent, ...rest }: SimpleFieldProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const [edit, setEdit] = useState(false);
  const classes = useStyles();

  const handleEnterHover = () => {
    setShowEdit(true);
  };

  const handleExitHover = () => {
    setShowEdit(false);
  };

  const handleClickEdit = () => {
    setEdit(true);
  };

  return (
    <Box
      {...rest}
      onMouseOver={handleEnterHover}
      onMouseOut={handleExitHover}
      onClick={handleClickEdit}
      className={classes.root}
    >
      <Box display="flex" alignItems="center" className={classes.fieldNameContainer}>
        <Typography variant="h5" className={classes.fieldName}>
          {title}
        </Typography>
        {!edit && showEdit && <EditIcon color="secondary" fontSize="small" className={classes.icon} />}
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
