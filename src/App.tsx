import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import LandingPage from './pages/LandingPage/LandingPage';
import NotFound from './pages/NotFound/NotFound';
import { UserProvider } from './context/UserContext';

const App = () => (
  <ThemeProvider theme={theme}>
    <UserProvider>
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route path="/home" component={LandingPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </UserProvider>
  </ThemeProvider>
);

export default App;
