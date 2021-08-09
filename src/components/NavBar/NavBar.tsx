import React from 'react';
import { useHistory } from 'react-router';
import { AppBar, Box, IconButton } from '@material-ui/core';
import useStyles from './styles';
import { LogoSvg } from '../../images';
import Dropdown from './Dropdown';

const NavBar = () => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <AppBar elevation={1} className={classes.root} position="fixed">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton size="small" onClick={() => push('/dashboard')}>
          <LogoSvg className={classes.logo} />
        </IconButton>
        <Dropdown />
      </Box>
    </AppBar>
  );
};

export default NavBar;
