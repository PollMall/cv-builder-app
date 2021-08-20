import React, { useState, MouseEventHandler } from 'react';
import Card from '../Card/Card';
import { Typography, CardProps, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './style';

interface ExperienceCardProps extends CardProps {
  name: string;
  description: string;
  location: string;
  startAt: string;
  endAt: string;
  onDelete: MouseEventHandler;
}

const ExperienceCard = ({ name, description, location, startAt, endAt, onDelete, ...rest }: ExperienceCardProps) => {
  const [showDelete, setShowDelete] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setShowDelete(true);
  };

  const handleClose = () => {
    setShowDelete(false);
  };

  return (
    <Card {...rest} onClick={handleOpen} onMouseOver={handleOpen} onMouseOut={handleClose}>
      <Typography component="span" variant="subtitle1" className={classes.institutionName}>
        {name}
      </Typography>
      <Typography component="span" variant="subtitle2" className={classes.locationName}>
        {' '}
        - {location}
      </Typography>
      <Typography gutterBottom component="p" variant="caption">
        {startAt ? new Date(parseInt(startAt, 10)).toLocaleDateString('en-US') : 'PRESENT'} -{' '}
        {endAt ? new Date(parseInt(endAt, 10)).toLocaleDateString('en-US') : 'PRESENT'}
      </Typography>
      {description && (
        <Typography component="p" variant="body2">
          • {description}
        </Typography>
      )}
      <div hidden={!showDelete} className={classes.deleteBtn}>
        <IconButton onClick={onDelete}>
          <DeleteIcon color="primary" fontSize="small" />
        </IconButton>
      </div>
    </Card>
  );
};

export default ExperienceCard;
