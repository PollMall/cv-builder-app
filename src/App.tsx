import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home">
          <h2>Landing page</h2>
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
