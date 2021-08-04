import React, { ChangeEvent, useState } from 'react';
import { Box, Tabs } from '@material-ui/core';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Tab from './Tab';
import useStyles from './styles';
import Card from '../../components/Card/Card';

const AuthTabs = () => {
  const [tab, setTab] = useState(0);
  const classes = useStyles();

  const handleChangeTab = (e: ChangeEvent<any>, newTab: number) => {
    setTab(newTab);
  };

  const forms = [
    {
      component: <LoginForm />,
    },
    {
      component: <RegisterForm />,
    },
  ];

  return (
    <Box className={classes.card} display="flex" flexDirection="column" alignItems="stretch">
      <Tabs
        variant="fullWidth"
        className={classes.tabContainer}
        value={tab}
        onChange={handleChangeTab}
        TabIndicatorProps={{ className: classes.tabIndicator }}
      >
        <Tab value={tab} idx={0} label="Login" id="tab-login" />
        <Tab value={tab} idx={1} label="Register" id="tab-register" />
      </Tabs>
      {forms.map((f, idx) => (
        <Card raised key={idx} hidden={tab !== idx} className={classes.content}>
          {f.component}
        </Card>
      ))}
    </Box>
  );
};

export default AuthTabs;
