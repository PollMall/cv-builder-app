import React, { MouseEventHandler } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

interface CvHeaderProps {
  descDate: boolean;
  descScore: boolean;
  onClickDate: MouseEventHandler;
  onClickScore: MouseEventHandler;
}

const CvHeader = ({ descDate, descScore, onClickDate, onClickScore }: CvHeaderProps) => {
  const classes = useStyles({ descDate, descScore });

  return (
    <Grid container alignItems="center" className={classes.button}>
      <Grid container item xs={5} justifyContent="flex-start">
        <Grid container item alignItems="center" />
      </Grid>
      <Grid container item xs={3} justifyContent="flex-end" alignItems="center">
        <Button onClick={onClickDate} disableRipple className={classes.sortBtn}>
          <Typography variant="h5">Date</Typography>
          <ArrowDropDownIcon color="primary" className={classes.dateSort} />
        </Button>
      </Grid>
      <Grid container item xs={4} justifyContent="flex-end" alignItems="center">
        <Button onClick={onClickScore} disableRipple className={classes.sortBtn}>
          <Typography variant="h5">Score</Typography>
          <ArrowDropDownIcon color="primary" className={classes.scoreSort} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default CvHeader;
