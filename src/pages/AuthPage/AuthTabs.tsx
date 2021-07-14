import React, { ChangeEvent, useState } from 'react';
import { Box, Tab, Tabs } from '@material-ui/core';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthTabs = () => {
  const [tab, setTab] = useState(0);

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
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Tabs value={tab} onChange={handleChangeTab}>
        <Tab label="Login" id="tab-login" />
        <Tab label="Register" id="tab-register" />
      </Tabs>
      {forms.map((f, idx) => (
        <div key={idx} hidden={tab !== idx}>
          {f.component}
        </div>
      ))}
    </Box>
  );
};

export default AuthTabs;
