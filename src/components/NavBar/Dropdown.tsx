import React, { useState, MouseEvent, useContext } from 'react';
import { Menu, MenuItem, ListItemIcon, ListItemText, IconButton, CircularProgress } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import useStyles from './styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AuthContext, AuthActions } from '../../context/AuthContext';
import { signOutCall } from './api';

const Dropdown = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const { state, dispatch } = useContext(AuthContext);
  const { loading } = state;

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  const handleSignOut = async () => {
    dispatch({ type: AuthActions.AUTH_STARTED });
    try {
      await signOutCall();
      dispatch({ type: AuthActions.UPDATE_USER, payload: undefined });
    } catch (err) {
      console.log(err);
      dispatch({ type: AuthActions.AUTH_FAILED });
    }
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <PersonOutlineIcon fontSize="large" color="primary" />
      </IconButton>
      <Menu
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{ className: classes.dropdown }}
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        {loading ? (
          <CircularProgress className={classes.loading} />
        ) : (
          <div>
            <MenuItem onClick={handleSignOut}>
              <ListItemIcon>
                <ExitToAppIcon color="primary" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
};

export default Dropdown;
