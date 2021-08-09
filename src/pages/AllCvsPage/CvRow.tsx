import React, { MouseEventHandler } from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { CvSvg } from '../../images';
import useStyles from './styles';
import PieChart from '../../components/PieChart/PieChart';

interface CvRowProps {
  title: string;
  date: string;
  score: number;
  onClick: MouseEventHandler;
}

const CvRow = ({ title, date, score, onClick }: CvRowProps) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} onClick={onClick}>
      <Grid container alignItems="center" className={classes.row}>
        <Grid container item xs={5} justifyContent="flex-start">
          <Grid container item alignItems="center">
            <CvSvg className={classes.icon} />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
              <Typography variant="h6" className={classes.title}>
                {title}
              </Typography>
              {/* <Typography variant="subtitle2" className={classes.text}>
                template
              </Typography> */}
            </Box>
          </Grid>
        </Grid>
        <Grid container item xs={3} justifyContent="flex-end">
          {new Date(parseInt(date, 10)).toLocaleDateString('en-US')}
        </Grid>
        <Grid container item xs={4} justifyContent="flex-end">
          <PieChart value={score} className={classes.score} />
        </Grid>
      </Grid>
    </Button>
  );
};

export default CvRow;
