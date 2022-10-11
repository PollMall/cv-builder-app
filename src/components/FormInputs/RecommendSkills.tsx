import React, { useState, MouseEvent, useEffect } from 'react';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Box, IconButton, ListItem, ListItemText, Menu, Typography, CircularProgress } from '@material-ui/core';
import { useLazyQuery } from '@apollo/client';
import { RECOMMEND_SKILLS } from './api';
import { HardSkill, SoftSkill } from '../../types';

interface RecommendSkillsProps {
  fieldOfWork: string;
  typeOfSkill: string;
}

const RecommendSkills = ({ fieldOfWork, typeOfSkill }: RecommendSkillsProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const [recommendSkills, { data, loading, error }] = useLazyQuery(RECOMMEND_SKILLS, {
    fetchPolicy: 'cache-and-network',
  });
  const [skills, setSkills] = useState<string[]>([]);

  const flatArrayOfSkills = (data: HardSkill[] | SoftSkill[]) => data?.map((s) => s.name);

  const handleOpen = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    recommendSkills({ variables: { field: fieldOfWork, typeOfSkills: typeOfSkill } });
  };

  const handleClose = () => {
    setAnchorEl(undefined);
  };

  useEffect(() => {
    if (data) {
      setSkills(flatArrayOfSkills(data.recommendSkills));
    }
  }, [data]);

  return (
    <>
      <IconButton size="small" onClick={handleOpen}>
        <HelpOutlineIcon fontSize="large" color="primary" />
      </IconButton>
      <Menu
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        <Box display="flex" flexDirection="column">
          <ListItem>
            <ListItemText>
              <Typography variant="h6">Popular skills</Typography>
            </ListItemText>
          </ListItem>
          <Box display="flex" flexDirection="column">
            {loading ? (
              <CircularProgress />
            ) : (
              error ||
              (skills.length === 0 && (
                <ListItem>
                  <ListItemText>
                    <Typography variant="body2">None</Typography>
                  </ListItemText>
                </ListItem>
              ))
            )}
            {skills.length > 0 &&
              skills.map((skillName) => (
                <ListItem key={skillName}>
                  <ListItemText>
                    <Typography variant="body2">{skillName}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default RecommendSkills;
